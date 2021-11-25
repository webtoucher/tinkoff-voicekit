export interface InterimResultsConfig {
    /**
     * Flag to enable sending interim results. Disabled by default.
     */
    enable_interim_results?: boolean

    /**
     * Desired interval in seconds for sending interim results. Actual interval between interim results depends
     * on service internals and is selected for optimal give out of relevant data.
     */
    interval?: number | string
}

export interface InterimResultsConfig__Output {
    /**
     * Flag to enable sending interim results. Disabled by default.
     */
    enable_interim_results: boolean

    /**
     * Desired interval in seconds for sending interim results. Actual interval between interim results depends
     * on service internals and is selected for optimal give out of relevant data.
     */
    interval: number | string
}
