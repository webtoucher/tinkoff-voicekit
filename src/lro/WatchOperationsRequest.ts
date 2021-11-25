import type { OperationFilter, OperationFilter__Output } from './OperationFilter'

export interface WatchOperationsRequest {
    /**
     * Operation filter
     */
    filter?: OperationFilter | null

    /**
     * Flag to enable keeping gRPC stream and listening for updates
     */
    listen_for_updates?: boolean
}

export interface WatchOperationsRequest__Output {
    /**
     * Operation filter
     */
    filter: OperationFilter__Output | null

    /**
     * Flag to enable keeping gRPC stream and listening for updates
     */
    listen_for_updates: boolean
}
