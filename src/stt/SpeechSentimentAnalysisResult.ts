export interface SpeechSentimentAnalysisResult {
    /**
     * Probability of negative emotion given from audio phrase
     */
    negative_prob_audio?: number | string

    /**
     * Probability of negative emotion given from audio phrase and recognized text
     */
    negative_prob_audio_text?: number | string
}

export interface SpeechSentimentAnalysisResult__Output {
    /**
     * Probability of negative emotion given from audio phrase
     */
    negative_prob_audio: number | string

    /**
     * Probability of negative emotion given from audio phrase and recognized text
     */
    negative_prob_audio_text: number | string
}
