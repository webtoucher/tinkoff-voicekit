import TinkoffStorage from 'tinkoff-storage-sdk'
import TinkoffApi from './TinkoffApi.js'
import { LongRunningRecognizeRequest } from './stt/LongRunningRecognizeRequest.js'
import { Operation__Output } from './lro/Operation'
import { RecognizeRequest } from './stt/RecognizeRequest.js'
import { RecognizeResponse__Output } from './stt/RecognizeResponse'

export {
    LongRunningRecognizeRequest,
    RecognizeRequest,
}

export default class TinkoffSpeechToText extends TinkoffApi{
    private readonly s3: TinkoffStorage

    constructor(issuer: string, subject: string, accessKeyId: string, secretAccessKey: string) {
        super(issuer, subject, accessKeyId, secretAccessKey, 'tinkoff.cloud.stt.v1.SpeechToText')
        this.s3 = new TinkoffStorage(accessKeyId, secretAccessKey)
    }

    public get storage(): TinkoffStorage {
        return this.s3
    }

    public async recognize(params: RecognizeRequest): Promise<RecognizeResponse__Output> {
        return await this.request('post', `stt:recognize`, params) as RecognizeResponse__Output
    }

    public async longRunningRecognize(params: LongRunningRecognizeRequest): Promise<Operation__Output> {
        return await this.request('post', `stt:longrunningrecognize`, params) as Operation__Output
    }

    /**
     * Streaming recognition.
     */
    public async streamingRecognize(): Promise<null> {
        // todo
        return await new Promise((resolve, reject) => {
            reject('Not implemented yet')
        })
    }
}
