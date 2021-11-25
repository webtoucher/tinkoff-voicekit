export interface VoiceActivityDetectionConfig {
    /**
     * <i>Currently ignored.</i> Minimal duration of phrase to detect by VAD in seconds.
     */
    min_speech_duration?: number | string

    /**
     * <i>Currently ignored.</i> Maximal duration of phrase to detect by VAD in seconds.
     */
    max_speech_duration?: number | string

    /**
     * Duration of silence in seconds to consider phrase ended. Default value depends on service configuration.
     */
    silence_duration_threshold?: number | string

    /**
     * Threshold value for silence probability (in range from 0.0 to 1.0). If silence probabily is below threshold
     * and audio fragment is considered silence. Default value depends on service configuration.
     */
    silence_prob_threshold?: number | string

    /**
     * Currently unused.
     */
    aggressiveness?: number | string
}

export interface VoiceActivityDetectionConfig__Output {
    /**
     * <i>Currently ignored.</i> Minimal duration of phrase to detect by VAD in seconds.
     */
    min_speech_duration: number | string

    /**
     * <i>Currently ignored.</i> Maximal duration of phrase to detect by VAD in seconds.
     */
    max_speech_duration: number | string

    /**
     * Duration of silence in seconds to consider phrase ended. Default value depends on service configuration.
     */
    silence_duration_threshold: number | string

    /**
     * Threshold value for silence probability (in range from 0.0 to 1.0). If silence probabily is below threshold
     * and audio fragment is considered silence. Default value depends on service configuration.
     */
    silence_prob_threshold: number | string

    /**
     * Currently unused.
     */
    aggressiveness: number | string
}
