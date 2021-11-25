export interface SynthesizeSpeechResponse {
    /**
     * Whole synthesized audio.
     */
    audio_content?: Buffer | Uint8Array | string
}

export interface SynthesizeSpeechResponse__Output {
    /**
     * Whole synthesized audio.
     */
    audio_content: Buffer
}
