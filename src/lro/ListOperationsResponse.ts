import type { Operation, Operation__Output } from './Operation'

export interface ListOperationsResponse {
    /**
     * Operations for current page
     */
    operations?: Operation[]

    /**
     * Next page token
     */
    next_page_token?: string
}

export interface ListOperationsResponse__Output {
    /**
     * Operations for current page
     */
    operations: Operation__Output[]

    /**
     * Next page token
     */
    next_page_token: string
}
