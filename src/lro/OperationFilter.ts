import type { Empty, Empty__Output } from '../base/Empty'
import type { OperationState } from './OperationState'

export interface OperationFilter {
    /**
     * For single specific value
     */
    exact_service_id?: string

    /**
     * For any value
     */
    any_service_id?: Empty | null

    /**
     * For single specific value
     */
    exact_id?: string

    /**
     * For any value
     */
    any_id?: Empty | null

    /**
     * For single specific value
     */
    exact_group?: string

    /**
     * For any value
     */
    any_group?: Empty | null

    /**
     * Operation state filter; all operations if empty
     */
    state?: (OperationState | keyof typeof OperationState)[]

    /**
     * Service ID filter
     */
    service_id?: 'exact_service_id' | 'any_service_id'

    /**
     * Operation ID filter
     */
    id?: 'exact_id' | 'any_id'

    /**
     * Operation group filer
     */
    group?: 'exact_group' | 'any_group'
}

export interface OperationFilter__Output {
    /**
     * For single specific value
     */
    exact_service_id?: string

    /**
     * For any value
     */
    any_service_id?: Empty__Output | null

    /**
     * For single specific value
     */
    exact_id?: string

    /**
     * For any value
     */
    any_id?: Empty__Output | null

    /**
     * For single specific value
     */
    exact_group?: string

    /**
     * For any value
     */
    any_group?: Empty__Output | null

    /**
     * Operation state filter; all operations if empty
     */
    state: (keyof typeof OperationState)[]

    /**
     * Service ID filter
     */
    service_id: 'exact_service_id' | 'any_service_id'

    /**
     * Operation ID filter
     */
    id: 'exact_id' | 'any_id'

    /**
     * Operation group filer
     */
    group: 'exact_group' | 'any_group'
}
