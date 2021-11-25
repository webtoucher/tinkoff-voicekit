import type { Duration, Duration__Output } from '../base/Duration'

export interface WaitOperationRequest {
    /**
     * Operation ID
     */
    id?: string

    /**
     * The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol.
     */
    timeout?: Duration | null
}

export interface WaitOperationRequest__Output {
    /**
     * Operation ID
     */
    id: string

    /**
     * The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol.
     */
    timeout: Duration__Output | null
}
