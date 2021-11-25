import type { SpeechRecognitionResult, SpeechRecognitionResult__Output } from './SpeechRecognitionResult'

export interface RecognizeResponse {
    /**
     * Recognized phrases.
     */
    results?: SpeechRecognitionResult[]
}

export interface RecognizeResponse__Output {
    /**
     * Recognized phrases.
     */
    results: SpeechRecognitionResult__Output[]
}
