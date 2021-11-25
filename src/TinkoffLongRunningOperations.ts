import TinkoffApi from './TinkoffApi.js'
import { CancelOperationRequest } from './lro/CancelOperationRequest.js'
import { DeleteOperationRequest } from './lro/DeleteOperationRequest.js'
import { GetOperationRequest } from './lro/GetOperationRequest.js'
import { ListOperationsRequest } from './lro/ListOperationsRequest.js'
import { ListOperationsResponse__Output } from './lro/ListOperationsResponse'
import { Operation__Output } from './lro/Operation'
import { WaitOperationRequest } from './lro/WaitOperationRequest.js'
import { WatchOperationsRequest } from './lro/WatchOperationsRequest.js'
import { WatchOperationsResponse__Output } from './lro/WatchOperationsResponse'

export {
    CancelOperationRequest,
    DeleteOperationRequest,
    GetOperationRequest,
    ListOperationsRequest,
    WaitOperationRequest,
    WatchOperationsRequest,
}

export default class TinkoffLongRunningOperations extends TinkoffApi{
    constructor(issuer: string, subject: string, accessKeyId: string, secretAccessKey: string) {
        super(issuer, subject, accessKeyId, secretAccessKey, 'tinkoff.cloud.longrunning.v1.Operations')
    }

    /**
     * Starts polling for operation statuses.
     * Returns operation status.
     */
    public async getOperation(params: GetOperationRequest): Promise<Operation__Output> {
        return await this.request('get', `operations/${params.id}`) as Operation__Output
    }

    /**
     * List operations.
     */
    public async listOperations(params: ListOperationsRequest): Promise<ListOperationsResponse__Output> {
        return await this.request('get', 'operations', params) as ListOperationsResponse__Output
    }

    /**
     * Deletes specified operations.
     */
    public async deleteOperation(params: DeleteOperationRequest | string): Promise<true> {
        const id = typeof params === "string" ? params : params.filter?.exact_id
        if (!id) {
            throw new Error('Wrong usage of delete operation')
        }
        await this.request('delete', `operations/${id}`)
        return true
    }

    /**
     * Cancels specified operations.
     */
    public async cancelOperation(params: CancelOperationRequest): Promise<true> {
        const id = typeof params === "string" ? params : params.filter?.exact_id
        if (!id) {
            throw new Error('Wrong usage of cancel operation')
        }
        await this.request('post', `operations/${id}:cancel`)
        return true
    }

    /**
     * Wait for operation update.
     */
    public async waitOperation(params: WaitOperationRequest): Promise<Operation__Output> {
        // todo
        return await new Promise((resolve, reject) => {
            reject('Not implemented yet')
        })
    }

    /**
     * Watch operations.
     */
    public async watchOperations(params: WatchOperationsRequest): Promise<WatchOperationsResponse__Output> {
        // todo
        return await new Promise((resolve, reject) => {
            reject('Not implemented yet')
        })
    }
}
