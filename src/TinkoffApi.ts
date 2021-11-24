import jwt from 'jsonwebtoken'
import grpc from 'grpc'

export default class TinkoffApi {
    protected readonly credentials

    constructor(issuer: string, subject: string, accessKeyId: string, secretAccessKey: string) {
        const callCredentials = grpc.credentials.createFromMetadataGenerator((params, callback) => {
            const token = jwt.sign({}, new Buffer(secretAccessKey, 'base64'), {
                keyid: accessKeyId,
                algorithm: 'HS256',
                expiresIn: '1 year',
                audience: params['service_url'].split('/').pop(),
                issuer,
                subject,
            })
            console.log('DBG', `Bearer ${token}`)
            const metadata = new grpc.Metadata()
            metadata.set('authorization', `Bearer ${token}`);
            callback(null, metadata)
        })
        this.credentials = grpc.credentials.combineChannelCredentials(grpc.credentials.createSsl(), callCredentials)
    }
}
