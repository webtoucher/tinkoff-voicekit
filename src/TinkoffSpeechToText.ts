import grpc from '@grpc/grpc-js'
import protoLoader from '@grpc/proto-loader'
import { ProtoGrpcType } from './stt.js'

import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import TinkoffStorage from 'tinkoff-storage-sdk'
import TinkoffApi from './TinkoffApi.js'
import { LongRunningRecognizeRequest } from './tinkoff/cloud/stt/v1/LongRunningRecognizeRequest.js'
import { RecognizeRequest } from './tinkoff/cloud/stt/v1/RecognizeRequest.js'

export {
    LongRunningRecognizeRequest,
    RecognizeRequest,
}

const root = dirname(dirname(fileURLToPath(import.meta.url)))

export default class TinkoffSpeechToText extends TinkoffApi{
    protected api
    private readonly s3: TinkoffStorage

    constructor(issuer: string, subject: string, accessKeyId: string, secretAccessKey: string) {
        super(issuer, subject, accessKeyId, secretAccessKey)
        this.s3 = new TinkoffStorage(accessKeyId, secretAccessKey)
        const proto = (grpc.loadPackageDefinition(
            protoLoader.loadSync(
                join(root, 'proto/apis/tinkoff/cloud/stt/v1/stt.proto'),
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

        this.api = new proto.tinkoff.cloud.stt.v1.SpeechToText('api.tinkoff.ai:443', this.credentials)
    }

    public get storage(): TinkoffStorage {
        return this.s3
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
