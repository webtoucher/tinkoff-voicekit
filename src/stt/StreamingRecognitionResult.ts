import type { SpeechRecognitionResult, SpeechRecognitionResult__Output } from './SpeechRecognitionResult'

export interface StreamingRecognitionResult {
    /**
     * Recognition result.
     */
    recognition_result?: SpeechRecognitionResult | null

    /**
     * Set to true if final version of phrase is recognized. Value of false means interim result.
     */
    is_final?: boolean

    /**
     * <i>Currently unused.</i> Stability factor.
     */
    stability?: number | string
}

export interface StreamingRecognitionResult__Output {
    /**
     * Recognition result.
     */
    recognition_result: SpeechRecognitionResult__Output | null

    /**
     * Set to true if final version of phrase is recognized. Value of false means interim result.
     */
    is_final: boolean

    /**
     * <i>Currently unused.</i> Stability factor.
     */
    stability: number | string
}
