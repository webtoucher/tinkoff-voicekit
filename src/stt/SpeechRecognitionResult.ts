import type { Duration, Duration__Output } from '../base/Duration'
import type { SpeechRecognitionAlternative, SpeechRecognitionAlternative__Output } from './SpeechRecognitionAlternative'
import type { SpeechSentimentAnalysisResult, SpeechSentimentAnalysisResult__Output } from './SpeechSentimentAnalysisResult'
import type { SpeechGenderIdentificationResult, SpeechGenderIdentificationResult__Output } from './SpeechGenderIdentificationResult'

export interface SpeechRecognitionResult {
    /**
     * Array of phrase alternatives sorted by confidence in descending order.
     */
    alternatives?: SpeechRecognitionAlternative[]

    /**
     * Channel where phrase alternative relates to (starting from 0).
     */
    channel?: number

    /**
     * Phrase start time inside input audiostream.
     */
    start_time?: Duration | null

    /**
     * Phrase end time inside input audiostream.
     */
    end_time?: Duration | null

    /**
     * Result of sentiment analysis
     */
    sentiment_analysis_result?: SpeechSentimentAnalysisResult | null

    /**
     * Result of gender identification
     */
    gender_identification_result?: SpeechGenderIdentificationResult | null
}

export interface SpeechRecognitionResult__Output {
    /**
     * Array of phrase alternatives sorted by confidence in descending order.
     */
    alternatives: SpeechRecognitionAlternative__Output[]

    /**
     * Channel where phrase alternative relates to (starting from 0).
     */
    channel: number

    /**
     * Phrase start time inside input audiostream.
     */
    start_time: Duration__Output | null

    /**
     * Phrase end time inside input audiostream.
     */
    end_time: Duration__Output | null

    /**
     * Result of sentiment analysis
     */
    sentiment_analysis_result: SpeechSentimentAnalysisResult__Output | null

    /**
     * Result of gender identification
     */
    gender_identification_result: SpeechGenderIdentificationResult__Output | null
}
