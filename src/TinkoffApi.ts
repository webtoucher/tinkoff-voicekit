import jwt from 'jsonwebtoken'
import grpc from '@grpc/grpc-js'

export default class TinkoffApi {
    protected readonly credentials

    constructor(username: string, accessKeyId: string, secretAccessKey: string) {
        const token = jwt.sign({}, secretAccessKey, {
            keyid: accessKeyId,
            subject: username,
            algorithm: 'HS256',
            expiresIn: '1 year',
            audience: 'tinkoff.cloud.stt',
            issuer: 'tinkoff_mobile_bank_api',
        })
        const metadata = new grpc.Metadata()
        metadata.set('authorization', `Bearer ${token}`);
        const channelCredentials = grpc.credentials.createSsl()
        const callCredentials = grpc.credentials.createFromMetadataGenerator((params, callback) => {
            callback(null, metadata)
        })
        this.credentials = grpc.credentials.combineChannelCredentials(channelCredentials, callCredentials)
    }
}
