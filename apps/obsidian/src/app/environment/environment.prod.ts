export const environment = {
    production: process.env?.['NODE_ENV'] || '',
    api: process.env?.['NX_RUBY_API'] || '',
    oauth_domain: process.env?.['NX_OAUTH_DOMAIN'] || '',
    oauth_key: process.env?.['NX_OAUTH_KEY'] || '',
    oauth_audience: process.env?.['NX_OAUTH_AUDIENCE'] || '',
}