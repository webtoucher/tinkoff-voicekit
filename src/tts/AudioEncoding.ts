export enum AudioEncoding {
    /**
     * <i>Unspecified - invalid value.</i> Used as default value to avoid accidental errors.
     */
    ENCODING_UNSPECIFIED = 0,

    /**
     * Raw PCM with signed integer 16-bit linear audio samples.
     */
    LINEAR16 = 1,

    /**
     * Raw PCM with Mu-law mapped 8-bit audio samples (aka PCMU).
     */
    MULAW = 3,

    /**
     * Raw PCM with A-law mapped 8-bit audio samples (aka PCMA).
     */
    ALAW = 8,

    /**
     * Opus frames packed into Protobuf messages. NOTE: each Opus frame is packed into separate message
     * with `audio_content` field. I. e., you can't just concatenate encoded Opus frames and push it as a single chunk
     * into Opus decoder. Also although Opus is sample rate agnostic, estimated duration of synthesized audio
     * is calculated in samples of specified sample rate.
     */
    RAW_OPUS = 11,
}
