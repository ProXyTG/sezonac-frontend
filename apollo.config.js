// apollo.config.js
module.exports = {
  client: {
    service: {
      name: 'Sezonac',
      url: 'https://blue-surf-1230260.us-east-1.aws.cloud.dgraph.io/graphql',
    },
    // Files processed by the extension
    includes: [
      'src/**/*.vue',
      'src/**/*.js',
    ],
  },
}