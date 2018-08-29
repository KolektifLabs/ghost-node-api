const Client = require('./lib/client.js');

function createClient (options) {
    if (typeof options !== 'object'){
        throw 'Invalid options format. Parameter options must be an object';
    } else if (!options.endpoint){
        throw 'Missing parameter in options: endpoint'
    } else {
        return new Client(options);
    }
}

module.exports = {
    createClient: createClient
};