import type { OperationsInitialState, OperationsInitialState__Output } from './OperationsInitialState'
import type { Empty, Empty__Output } from '../base/Empty'
import type { OperationsUpdate, OperationsUpdate__Output } from './OperationsUpdate'

export interface WatchOperationsResponse {
    /**
     * Initial state
     */
    initial_state?: OperationsInitialState | null

    /**
     * Init finished
     */
    init_finished?: Empty | null

    /**
     * Update
     */
    update?: OperationsUpdate | null

    operations?: 'initial_state' | 'init_finished' | 'update'
}

export interface WatchOperationsResponse__Output {
    /**
     * Initial state
     */
    initial_state?: OperationsInitialState__Output | null

    /**
     * Init finished
     */
    init_finished?: Empty__Output | null

    /**
     * Update
     */
    update?: OperationsUpdate__Output | null

    operations: 'initial_state' | 'init_finished' | 'update'
}
