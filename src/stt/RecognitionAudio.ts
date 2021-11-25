export interface RecognitionAudio {
    /**
     * Input audio data chunk.
     */
    content?: Buffer | Uint8Array | string

    /**
     * Currently only supported for LongRunningRecognizeRequest. Input audio URI.<br/>
     * URI format is ```storage://s3.api.tinkoff.ai/inbound/<file_name>```
     */
    uri?: string

    audio_source?: 'content' | 'uri'
}

export interface RecognitionAudio__Output {
    /**
     * Input audio data chunk.
     */
    content?: Buffer

    /**
     * Currently only supported for LongRunningRecognizeRequest. Input audio URI.<br/>
     * URI format is ```storage://s3.api.tinkoff.ai/inbound/<file_name>```
     */
    uri?: string

    audio_source: 'content' | 'uri'
}
