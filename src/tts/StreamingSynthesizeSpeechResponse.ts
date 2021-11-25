export interface StreamingSynthesizeSpeechResponse {
    /**
     * Chunk of synthesized audio: either samples for `LINEAR16`, `MULAW` and `ALAW` or single frame for `RAW_OPUS`.
     */
    audio_chunk?: Buffer | Uint8Array | string
}

export interface StreamingSynthesizeSpeechResponse__Output {
    /**
     * Chunk of synthesized audio: either samples for `LINEAR16`, `MULAW` and `ALAW` or single frame for `RAW_OPUS`.
     */
    audio_chunk: Buffer
}
