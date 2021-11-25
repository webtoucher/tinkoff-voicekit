import type { StreamingRecognitionConfig, StreamingRecognitionConfig__Output } from './StreamingRecognitionConfig'

export interface StreamingRecognizeRequest {
    /**
     * Recognition configuration for streaming RPC. Must be sent as first message only.
     */
    streaming_config?: StreamingRecognitionConfig | null

    /**
     * Input audio data chunk. Must come after recognition configuration message.
     */
    audio_content?: Buffer | Uint8Array | string

    streaming_request?: 'streaming_config' | 'audio_content'
}

export interface StreamingRecognizeRequest__Output {
    /**
     * Recognition configuration for streaming RPC. Must be sent as first message only.
     */
    streaming_config?: StreamingRecognitionConfig__Output | null

    /**
     * Input audio data chunk. Must come after recognition configuration message.
     */
    audio_content?: Buffer

    streaming_request: 'streaming_config' | 'audio_content'
}
