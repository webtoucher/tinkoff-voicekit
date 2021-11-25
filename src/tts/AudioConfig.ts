import type { AudioEncoding } from './AudioEncoding'

export interface AudioConfig {
    /**
     * Audio encoding. Specifies both container and codec. Must be specified explicitly.
     */
    audio_encoding?: AudioEncoding | keyof typeof AudioEncoding

    /**
     * <i>Currently ignored.</i> Speaking rate of generated audio as a fraction of original speaking rate. Default value is "1.0".
     */
    speaking_rate?: number | string

    /**
     * Sample rate of generated audio in Hertz. Must be specified explicitly.
     */
    sample_rate_hertz?: number
}

export interface AudioConfig__Output {
    /**
     * Audio encoding. Specifies both container and codec. Must be specified explicitly.
     */
    audio_encoding: keyof typeof AudioEncoding

    /**
     * <i>Currently ignored.</i> Speaking rate of generated audio as a fraction of original speaking rate. Default value is "1.0".
     */
    speaking_rate: number | string

    /**
     * Sample rate of generated audio in Hertz. Must be specified explicitly.
     */
    sample_rate_hertz: number
}
