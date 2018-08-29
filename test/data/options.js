module.exports = {
    invalidClientOptionsDataFormat: '',

    invalidClientOptionsWithNoTokenAndClientData: {
        endpoint: 'xxxxxxx'
    },

    invalidClientOptionsWithMissingEndpoint: {
        token: 'xxxxxxx',
        clientId: 'xxxxxxx',
        clientSecret: 'xxxxxxx'
    },

    invalidClientOptionsWithMissingClientId: {
        endpoint: 'xxxxxxx',
        clientSecret: 'xxxxxxx'
    },

    invalidClientOptionsWithMissingClientSecret: {
        endpoint: 'xxxxxxx',
        clientId: 'xxxxxxx',
    },

    validClientOptionsData: {
        endpoint: 'xxxxxxx',
        token: 'xxxxxxx',
        clientId: 'xxxxxxx',
        clientSecret: 'xxxxxxx'
    }
};