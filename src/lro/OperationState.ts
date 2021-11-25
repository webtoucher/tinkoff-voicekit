export enum OperationState {
    /**
     * Operation enqueued by service
     */
    ENQUEUED = 0,

    /**
     * Processing started
     */
    PROCESSING = 1,

    /**
     * Operation finished successfully
     */
    DONE = 2,

    /**
     * Operation finished with error
     */
    FAILED = 3,
}
