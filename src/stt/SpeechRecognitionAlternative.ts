import type { WordInfo, WordInfo__Output } from './WordInfo'

export interface SpeechRecognitionAlternative {
    /**
     * Recognized text.
     */
    transcript?: string

    /**
     * Relative confidence factor.
     */
    confidence?: number | string

    /**
     * Array of individual words inside phrase.
     */
    words?: WordInfo[]
}

export interface SpeechRecognitionAlternative__Output {
    /**
     * Recognized text.
     */
    transcript: string

    /**
     * Relative confidence factor.
     */
    confidence: number | string

    /**
     * Array of individual words inside phrase.
     */
    words: WordInfo__Output[]
}
