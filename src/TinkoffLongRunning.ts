import grpc from '@grpc/grpc-js'
import protoLoader from '@grpc/proto-loader'
import { ProtoGrpcType } from './longrunning.js'

import path from 'path'
import TinkoffApi from './TinkoffApi.js'
import { CancelOperationRequest } from './tinkoff/cloud/longrunning/v1/CancelOperationRequest.js'
import { DeleteOperationRequest } from './tinkoff/cloud/longrunning/v1/DeleteOperationRequest.js'
import { GetOperationRequest } from './tinkoff/cloud/longrunning/v1/GetOperationRequest.js'
import { ListOperationsRequest } from './tinkoff/cloud/longrunning/v1/ListOperationsRequest.js'
import { WaitOperationRequest } from './tinkoff/cloud/longrunning/v1/WaitOperationRequest.js'
import { WatchOperationsRequest } from './tinkoff/cloud/longrunning/v1/WatchOperationsRequest.js'

export {
    CancelOperationRequest,
    DeleteOperationRequest,
    GetOperationRequest,
    ListOperationsRequest,
    WaitOperationRequest,
    WatchOperationsRequest,
}

export default class TinkoffLongRunning extends TinkoffApi{
    protected api

    constructor(issuer: string, subject: string, accessKeyId: string, secretAccessKey: string) {
        super(issuer, subject, accessKeyId, secretAccessKey)
        const proto = (grpc.loadPackageDefinition(
            protoLoader.loadSync(
                path.resolve('proto/apis/tinkoff/cloud/longrunning/v1/longrunning.proto'),
                {
                    keepCase: false,
                    longs: String,
                    enums: String,
                    defaults: true,
                    oneofs: true
                }
            )
        ) as unknown) as ProtoGrpcType

        this.api = new proto.tinkoff.cloud.longrunning.v1.Operations('longrunning.tinkoff.ru:443', this.credentials)
    }

    /**
     * Starts polling for operation statuses.
     * Returns operation status.
     */
    public async getOperation(params: GetOperationRequest) {
        return await new Promise((resolve, reject) => {
            this.api.getOperation(params, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }

    /**
     * Wait for operation update.
     */
    public async waitOperation(params: WaitOperationRequest) {
        return await new Promise((resolve, reject) => {
            this.api.waitOperation(params, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }

    /**
     * List operations.
     */
    public async listOperations(params: ListOperationsRequest) {
        return await new Promise((resolve, reject) => {
            this.api.listOperations(params, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }

    /**
     * Deletes specified operations.
     */
    public async deleteOperation(params: DeleteOperationRequest) {
        return await new Promise((resolve, reject) => {
            this.api.deleteOperation(params, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }

    /**
     * Cancels specified operations.
     */
    public async cancelOperation(params: CancelOperationRequest) {
        return await new Promise((resolve, reject) => {
            this.api.cancelOperation(params, (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }

    /**
     * Watch operations.
     */
    public watchOperations(params: WatchOperationsRequest) {
        return this.api.watchOperations(params)
    }
}
