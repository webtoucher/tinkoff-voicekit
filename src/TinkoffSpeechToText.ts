import grpc from '@grpc/grpc-js'
import protoLoader from '@grpc/proto-loader'
import { ProtoGrpcType } from './stt.js'

import path from 'path'
import TinkoffStorage from 'tinkoff-storage-sdk'
import TinkoffApi from './TinkoffApi.js'
import { LongRunningRecognizeRequest } from './tinkoff/cloud/stt/v1/LongRunningRecognizeRequest.js'
import { RecognizeRequest } from './tinkoff/cloud/stt/v1/RecognizeRequest.js'

export {
    LongRunningRecognizeRequest,
    RecognizeRequest,
}

export default class TinkoffSpeechToText extends TinkoffApi{
    protected api
    private readonly storage: TinkoffStorage

    constructor(issuer: string, subject: string, accessKeyId: string, secretAccessKey: string) {
        super(issuer, subject, accessKeyId, secretAccessKey)
        this.storage = new TinkoffStorage(accessKeyId, secretAccessKey)
        const proto = (grpc.loadPackageDefinition(
            protoLoader.loadSync(
                path.resolve('proto/apis/tinkoff/cloud/stt/v1/stt.proto'),
                {
                    keepCase: false,
                    longs: String,
                    enums: String,
                    defaults: true,
                    oneofs: true
                }
            )
        ) as unknown) as ProtoGrpcType

        this.api = new proto.tinkoff.cloud.stt.v1.SpeechToText('stt.tinkoff.ru:443', this.credentials)
    }

    public async recognize(params: RecognizeRequest) {
        return await new Promise((resolve, reject) => {
            this.api.recognize(params, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }

    public async longRunningRecognize(params: LongRunningRecognizeRequest) {
        return await new Promise((resolve, reject) => {
            this.api.longRunningRecognize(params, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }

    /**
     * Streaming recognition.
     */
    public streamingRecognize() {
        return this.api.streamingRecognize()
    }
}
