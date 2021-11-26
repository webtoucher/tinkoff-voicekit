import type { Any, Any__Output } from '../base/Any'
import type { OperationState } from './OperationState'
import type { Status, Status__Output } from '../base/Status'
import type { RecognizeResponse__Output } from '../stt/RecognizeResponse'

export interface Operation {
    /**
     * Operation ID
     */
    id?: string

    /**
     * Operation group
     */
    group?: string

    /**
     * Service-specific metadata associated with the operation.
     */
    metadata?: Any | null

    /**
     * Operation state
     */
    state?: OperationState | keyof typeof OperationState

    /**
     * Operation error if error occurred
     */
    error?: Status | null

    /**
     * Operation response if successfully finished
     */
    response?: Any | null

    /**
     * Metafield x-client-request-id specified at operation creation
     */
    x_client_request_id?: string

    /**
     * Operation result
     */
    result?: 'error' | 'response'
}

export interface Operation__Output {
    /**
     * Operation ID
     */
    id: string

    /**
     * Operation group
     */
    group: string

    /**
     * Service-specific metadata associated with the operation.
     */
    metadata: Any__Output | null

    /**
     * Operation state
     */
    state: keyof typeof OperationState

    /**
     * Operation error if error occurred
     */
    error?: Status__Output | null

    /**
     * Operation response if successfully finished
     */
    response?: RecognizeResponse__Output

    /**
     * Metafield x-client-request-id specified at operation creation
     */
    x_client_request_id: string

    /**
     * Operation result
     */
    result: 'error' | 'response'
}
