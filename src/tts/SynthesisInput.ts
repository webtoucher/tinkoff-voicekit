export interface SynthesisInput {
    /**
     * Raw text to synthesize.
     */
    text?: string

    /**
     * The SSML document to synthesize.
     */
    ssml?: string
}

export interface SynthesisInput__Output {
    /**
     * Raw text to synthesize.
     */
    text: string

    /**
     * The SSML document to synthesize.
     */
    ssml: string
}
