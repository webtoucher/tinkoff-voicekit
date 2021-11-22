import grpc from '@grpc/grpc-js'
import protoLoader from '@grpc/proto-loader'
import { ProtoGrpcType } from './tts.js'

import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import TinkoffApi from './TinkoffApi.js'
import {SynthesizeSpeechRequest} from './tinkoff/cloud/tts/v1/SynthesizeSpeechRequest.js'
import {ListVoicesRequest} from './tinkoff/cloud/tts/v1/ListVoicesRequest.js'

export {
    SynthesizeSpeechRequest,
    ListVoicesRequest,
}

const root = dirname(dirname(fileURLToPath(import.meta.url)))

export default class TinkoffTextToSpeech extends TinkoffApi{
    protected api

    constructor(issuer: string, subject: string, accessKeyId: string, secretAccessKey: string) {
        super(issuer, subject, accessKeyId, secretAccessKey)
        const proto = (grpc.loadPackageDefinition(
            protoLoader.loadSync(
                join(root, 'proto/apis/tinkoff/cloud/tts/v1/tts.proto'),
                {
                    keepCase: false,
                    longs: String,
                    enums: String,
                    defaults: true,
                    oneofs: true,
                    includeDirs: [
                        join(root, 'proto/apis/'),
                        join(root, 'proto/googleapis/'),
                    ],
                }
            )
        ) as unknown) as ProtoGrpcType

        this.api = new proto.tinkoff.cloud.tts.v1.TextToSpeech('api.tinkoff.ai:443', this.credentials)
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
