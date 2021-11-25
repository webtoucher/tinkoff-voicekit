import type { RecognitionConfig, RecognitionConfig__Output } from './RecognitionConfig'
import type { RecognitionAudio, RecognitionAudio__Output } from './RecognitionAudio'

export interface RecognizeRequest {
    /**
     * Recognition configuration.
     */
    config: RecognitionConfig

    /**
     * Audio to recognize.
     */
    audio: RecognitionAudio
}

export interface RecognizeRequest__Output {
    /**
     * Recognition configuration.
     */
    config: RecognitionConfig__Output

    /**
     * Audio to recognize.
     */
    audio: RecognitionAudio__Output
}
