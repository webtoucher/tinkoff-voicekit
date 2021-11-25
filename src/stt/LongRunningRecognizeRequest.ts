import type { RecognitionConfig, RecognitionConfig__Output } from './RecognitionConfig'
import type { RecognitionAudio, RecognitionAudio__Output } from './RecognitionAudio'

export interface LongRunningRecognizeRequest {
    /**
     * Recognition configuration.
     */
    config?: RecognitionConfig | null

    /**
     * Audio to recognize.
     */
    audio?: RecognitionAudio | null

    /**
     * Group to assign to created operation.
     */
    group?: string
}

export interface LongRunningRecognizeRequest__Output {
    /**
     * Recognition configuration.
     */
    config: RecognitionConfig__Output | null

    /**
     * Audio to recognize.
     */
    audio: RecognitionAudio__Output | null

    /**
     * Group to assign to created operation.
     */
    group: string
}
