import type { RecognitionConfig, RecognitionConfig__Output } from './RecognitionConfig'
import type { InterimResultsConfig, InterimResultsConfig__Output } from './InterimResultsConfig'

export interface StreamingRecognitionConfig {
    /**
     * Recognition configuration.
     */
    config?: RecognitionConfig | null

    /**
     * Flag to enable single utterance mode. Recognition is finished by service at first recognized phrase in this mode.
     */
    single_utterance?: boolean

    /**
     * Configuration of interim results. I. e., recognized text so far at a moment when only part of phrase audio was sent.
     */
    interim_results_config?: InterimResultsConfig | null
}

export interface StreamingRecognitionConfig__Output {
    /**
     * Recognition configuration.
     */
    config: RecognitionConfig__Output | null

    /**
     * Flag to enable single utterance mode. Recognition is finished by service at first recognized phrase in this mode.
     */
    single_utterance: boolean

    /**
     * Configuration of interim results. I. e., recognized text so far at a moment when only part of phrase audio was sent.
     */
    interim_results_config: InterimResultsConfig__Output | null
}
