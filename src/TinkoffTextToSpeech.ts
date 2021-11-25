import TinkoffApi from './TinkoffApi.js'
import { ListVoicesRequest } from './tts/ListVoicesRequest'
import { ListVoicesResponses__Output } from './tts/ListVoicesResponses'
import { SynthesizeSpeechRequest } from './tts/SynthesizeSpeechRequest'
import { SynthesizeSpeechResponse__Output } from './tts/SynthesizeSpeechResponse'

export {
    SynthesizeSpeechRequest,
    ListVoicesRequest,
}

export default class TinkoffTextToSpeech extends TinkoffApi{
    constructor(issuer: string, subject: string, accessKeyId: string, secretAccessKey: string) {
        super(issuer, subject, accessKeyId, secretAccessKey, 'tinkoff.cloud.tts.v1.TextToSpeech')
    }

    public async synthesize(params: SynthesizeSpeechRequest): Promise<SynthesizeSpeechResponse__Output> {
        return await this.request('post', `stt:recognize`, params) as SynthesizeSpeechResponse__Output
    }

    public async listVoices(params: ListVoicesRequest): Promise<ListVoicesResponses__Output> {
        return await this.request('post', `stt:recognize`, params) as ListVoicesResponses__Output
    }

    /**
     * Streaming synthesis.
     */
    public async streamingSynthesize(params: SynthesizeSpeechRequest): Promise<null> {
        // todo
        return await new Promise((resolve, reject) => {
            reject('Not implemented yet')
        })
    }
}
