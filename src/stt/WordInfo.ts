import type { Duration, Duration__Output } from '../base/Duration'

export interface WordInfo {
    /**
     * Word start time inside input audiostream.
     */
    start_time?: Duration | null

    /**
     * Word end time inside input audiostream.
     */
    end_time?: Duration | null

    /**
     * Word inside phrase.
     */
    word?: string

    /**
     * Relative confidence factor (relative to other words of the phrase and to words of other alternatives
     * for requests configuration with max_alternatives > 1). Value may be negative.
     */
    confidence?: number | string
}

export interface WordInfo__Output {
    /**
     * Word start time inside input audiostream.
     */
    start_time: Duration__Output | null

    /**
     * Word end time inside input audiostream.
     */
    end_time: Duration__Output | null

    /**
     * Word inside phrase.
     */
    word: string

    /**
     * Relative confidence factor (relative to other words of the phrase and to words of other alternatives
     * for requests configuration with max_alternatives > 1). Value may be negative.
     */
    confidence: number | string
}
