import type { SpeechContextPhrase, SpeechContextPhrase__Output } from './SpeechContextPhrase'

export interface SpeechContext {
    /**
     * Phrases to recognize with higher probability.
     */
    phrases?: SpeechContextPhrase[]
}

export interface SpeechContext__Output {
    /**
     * Phrases to recognize with higher probability.
     */
    phrases: SpeechContextPhrase__Output[]
}
