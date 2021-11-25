import type { AudioEncoding } from './AudioEncoding'
import type { SpeechContext, SpeechContext__Output } from './SpeechContext'
import type { VoiceActivityDetectionConfig, VoiceActivityDetectionConfig__Output } from './VoiceActivityDetectionConfig'

export interface RecognitionConfig {
    /**
     * Audio encoding. Specifies both container and codec. Must be specified explicitly.
     */
    encoding?: AudioEncoding | keyof typeof AudioEncoding

    /**
     * Sample rate of input audio in Hertz. Must match actual bitstream sample rate for MPEG_AUDIO.
     * Must be specified explicitly.
     */
    sample_rate_hertz?: number

    /**
     * <i>Currently ignored.</i> Language to recognize.
     */
    language_code?: string

    /**
     * Maximal number of phrase alternatives to return at each moment both for final and interim recognition results.
     * Default value: 1.
     */
    max_alternatives?: number

    /**
     * Enables profanity filter for first (most probable) alternative of final result. Words filtered out will contain
     * the first letter and asterisks for the remaining characters.
     */
    profanity_filter?: boolean

    /**
     * Currently unsupported. Defines vocabulary of words and phrases to recognize with highter probability.
     */
    speech_contexts?: SpeechContext[]

    /**
     * Enables automatic punctuation and capitalization for first (most probable) alternative of final result.
     */
    enable_automatic_punctuation?: boolean

    /**
     * Recognition model. Default model is used if not specified.
     */
    model?: string

    /**
     * Channel count for input audio. Must match actual bitstream channel count for MPEG_AUDIO.
     */
    num_channels?: number

    /**
     * Flag to disable phrase range detection. All speech shall be recognized as single phrase with this flag set to true.
     */
    do_not_perform_vad?: boolean

    /**
     * Structure to customize VAD settings.
     */
    vad_config?: VoiceActivityDetectionConfig | null

    /**
     * Enables automatic conversion of numerals from text to numeric form. Applies only to the first (most likely)
     * version of hypothesis.
     */
    enable_denormalization?: boolean

    /**
     * Enables sentiment analysis for emotion classification: negative or neutral. Used for every final hypotheses
     */
    enable_sentiment_analysis?: boolean

    /**
     * Enables gender identification: male or female. Used for every final hypotheses
     */
    enable_gender_identification?: boolean

    vad?: 'do_not_perform_vad' | 'vad_config'
}

export interface RecognitionConfig__Output {
    /**
     * Audio encoding. Specifies both container and codec. Must be specified explicitly.
     */
    encoding: keyof typeof AudioEncoding

    /**
     * Sample rate of input audio in Hertz. Must match actual bitstream sample rate for MPEG_AUDIO.
     * Must be specified explicitly.
     */
    sample_rate_hertz: number

    /**
     * <i>Currently ignored.</i> Language to recognize.
     */
    language_code: string

    /**
     * Maximal number of phrase alternatives to return at each moment both for final and interim recognition results.
     * Default value: 1.
     */
    max_alternatives: number

    /**
     * Enables profanity filter for first (most probable) alternative of final result. Words filtered out will
     * contain the first letter and asterisks for the remaining characters.
     */
    profanity_filter: boolean

    /**
     * Currently unsupported. Defines vocabulary of words and phrases to recognize with highter probability.
     */
    speech_contexts: SpeechContext__Output[]

    /**
     * Enables automatic punctuation and capitalization for first (most probable) alternative of final result.
     */
    enable_automatic_punctuation: boolean

    /**
     * Recognition model. Default model is used if not specified.
     */
    model: string

    /**
     * Channel count for input audio. Must match actual bitstream channel count for MPEG_AUDIO.
     */
    num_channels: number

    /**
     * Flag to disable phrase range detection. All speech shall be recognized as single phrase with this flag set to true.
     */
    do_not_perform_vad?: boolean

    /**
     * Structure to customize VAD settings.
     */
    vad_config?: VoiceActivityDetectionConfig__Output | null

    /**
     * Enables automatic conversion of numerals from text to numeric form. Applies only to the first (most likely)
     * version of hypothesis.
     */
    enable_denormalization: boolean

    /**
     * Enables sentiment analysis for emotion classification: negative or neutral. Used for every final hypotheses
     */
    enable_sentiment_analysis: boolean

    /**
     * Enables gender identification: male or female. Used for every final hypotheses
     */
    enable_gender_identification: boolean

    vad: 'do_not_perform_vad' | 'vad_config'
}
