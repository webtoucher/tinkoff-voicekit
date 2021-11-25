export interface Voice {
    /**
     * Code of voice spoken language.
     */
    language_codes?: string[]

    /**
     * Voice name.
     */
    name?: string

    /**
     * Original sample rate. I. e., bigger value indicates higher quality.
     */
    natural_sample_rate_hertz?: number
}

export interface Voice__Output {
    /**
     * Code of voice spoken language.
     */
    language_codes: string[]

    /**
     * Voice name.
     */
    name: string

    /**
     * Original sample rate. I. e., bigger value indicates higher quality.
     */
    natural_sample_rate_hertz: number
}
