import grpc from '@grpc/grpc-js'
import protoLoader from '@grpc/proto-loader'
import { ProtoGrpcType } from './tts.js'

import path from 'path'
import TinkoffApi from './TinkoffApi.js'
import {SynthesizeSpeechRequest} from './tinkoff/cloud/tts/v1/SynthesizeSpeechRequest.js'
import {ListVoicesRequest} from './tinkoff/cloud/tts/v1/ListVoicesRequest.js'

export {
    SynthesizeSpeechRequest,
    ListVoicesRequest,
}

export default class TinkoffTextToSpeech extends TinkoffApi{
    protected api

    constructor(username: string, accessKeyId: string, secretAccessKey: string) {
        super(username, accessKeyId, secretAccessKey)
        const proto = (grpc.loadPackageDefinition(
            protoLoader.loadSync(
                path.resolve('proto/apis/tinkoff/cloud/tts/v1/tts.proto'),
                {
                    keepCase: false,
                    longs: String,
                    enums: String,
                    defaults: true,
                    oneofs: true
                }
            )
        ) as unknown) as ProtoGrpcType

        this.api = new proto.tinkoff.cloud.tts.v1.TextToSpeech('tts.tinkoff.ru:443', this.credentials)
    }

    public async synthesize(params: SynthesizeSpeechRequest) {
        return await new Promise((resolve, reject) => {
            this.api.synthesize(params, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }

    public async listVoices(params: ListVoicesRequest) {
        return await new Promise((resolve, reject) => {
            this.api.listVoices(params, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }

    /**
     * Streaming synthesis.
     */
    public streamingSynthesize(params: SynthesizeSpeechRequest) {
        return this.api.streamingSynthesize(params)
    }
}
