export interface SpeechContextPhrase {
    /**
     * Text of phrase to recognize with higher probability. Currenlty only single-worded phrases are supported.
     * Specifying pharses shorter than 5 characters is discouraged.
     */
    text?: string

    /**
     * Score of phrase to recognize with higher probability. `1.0` is used if not specified.
     * Specifying too high score is discouraged.
     */
    score?: number | string
}

export interface SpeechContextPhrase__Output {
    /**
     * Text of phrase to recognize with higher probability. Currenlty only single-worded phrases are supported.
     * Specifying pharses shorter than 5 characters is discouraged.
     */
    text: string

    /**
     * Score of phrase to recognize with higher probability. `1.0` is used if not specified.
     * Specifying too high score is discouraged.
     */
    score: number | string
}
