import type { OperationFilter, OperationFilter__Output } from './OperationFilter'

interface ListOperationsRequestByFilter {
    /**
     * Operation filter
     */
    filter: OperationFilter

    /**
     * Page size
     */
    page_size?: number
}

interface ListOperationsRequestByPageToken {
    /**
     * Page token
     */
    page_token: string
}

export type ListOperationsRequest = ListOperationsRequestByFilter | ListOperationsRequestByPageToken

export interface ListOperationsRequest__Output {
    /**
     * Operation filter
     */
    filter: OperationFilter__Output | null

    /**
     * Page size
     */
    page_size: number

    /**
     * Page token
     */
    page_token: string
}
