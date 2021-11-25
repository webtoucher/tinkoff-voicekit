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
     * Raw PCM with Mu-law mapped 8-bit audio samples.
     */
    MULAW = 3,

    /**
     * Raw PCM with A-law mapped 8-bit audio samples.
     */
    ALAW = 8,

    /**
     * Opus frames packed into Protobuf messages.<br/> NOTE: each Opus frame must be packed into "content" field
     * of RecognitionAudio. Each Opus frame must be sent individually exactly as encoded since boundary information
     * isn't included in Opus frame. I. e. you can't just concatenate multiple encoded Opus frames and put it
     * as a single chunk inside "content".
     */
    RAW_OPUS = 11,

    /**
     * MPEG audio bitstream.
     */
    MPEG_AUDIO = 12,
}
