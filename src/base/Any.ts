interface AnyExtension {
    /**
     * The fully qualified name of the message type that this object represents,
     * possibly including a URL prefix.
     */
    '@type': string;
}

export type Any = AnyExtension | {
    type_url: string;
    value: Buffer | Uint8Array | string;
}

export type Any__Output = AnyExtension | {
    type_url: string;
    value: Buffer;
}
