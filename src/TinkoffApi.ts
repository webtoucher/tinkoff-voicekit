import jwt from 'jsonwebtoken'
import request, { CoreOptions, RequiredUriUrl, Request, RequestAPI } from 'request'
import queryString from 'querystring'

export default class TinkoffApi {
    private readonly api: RequestAPI<Request, CoreOptions, RequiredUriUrl>

    constructor(issuer: string, subject: string, accessKeyId: string, secretAccessKey: string, audience: string) {
        const token = jwt.sign({}, new Buffer(secretAccessKey, 'base64'), {
            keyid: accessKeyId,
            algorithm: 'HS256',
            expiresIn: '1 year',
            audience,
            issuer,
            subject,
        })
        this.api = request.defaults({
            baseUrl: 'https://api.tinkoff.ai/v1/',
            json: true,
            headers: {
                Authorization: `bearer ${token}`,
            }
        })
    }

    protected async request(method: 'get' | 'post' | 'put' | 'delete' | 'head' | 'patch', command: string, params?: Record<string, any>): Promise<Record<string, any>> {
        return await new Promise((resolve, reject) => {
            const config: Record<string, any> = {}
            if (params) {
                config.body = params
            }
            this.api[method](command, config, (err, response, data) => {
                if (err) {
                    reject(err)
                } else if (response.headers['grpc-message']) {
                    reject(queryString.parse(response.headers['grpc-message'] as string))
                } else {
                    resolve(data)
                }
            })
        })
    }
}
