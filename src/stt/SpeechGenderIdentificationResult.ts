export interface SpeechGenderIdentificationResult {
    /**
     * Probability that speaker is male
     */
    male_proba?: number | string

    /**
     * Probability that speaker is female. It's assume that male_proba + female_proba = 1
     */
    female_proba?: number | string
}

export interface SpeechGenderIdentificationResult__Output {
    /**
     * Probability that speaker is male
     */
    male_proba: number | string

    /**
     * Probability that speaker is female. It's assume that male_proba + female_proba = 1
     */
    female_proba: number | string
}
