'use strict';

var request = require('request');
var qs = require('querystring');

function Client (options) {
    this.options = options || {};
    this.url = this.options.endpoint + '/ghost/api/v0.1' || 'http://localhost:2368/ghost/api/v0.1';
    this.clientId = this.options.clientId || 'ghost-frontend';
    this.clientSecret = this.options.clientSecret;
    this.token = this.options.token;
}

/**
 * Base request
 * @param path
 * @param method :  [ GET, POST, PUT ...]
 * @param params
 * @param callback  (err, httpResponse, body)
 */
Client.prototype._baseRequest = function (path, method, params, callback) {
    var uri = this.url + path;

    if (typeof this.token !== 'undefined') {

        if (params !== {}) {
            uri = uri + qs.encode(params)
        }

        request({
            uri: uri,
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': this.token
            },
            method: method
        }, function (err, res, body) {
            if (err) return callback(err);

            if (res.statusCode !== 200) return callback(new Error('An error ocurred during the request.'))

            callback(null, JSON.parse(body))
        })
    } else {
        var default_params = {
            clientId: this.clientId,
            clientSecret: this.clientSecret
        };

        uri = uri + '?' + qs.encode(default_params);

        if (params) {
            uri = uri + qs.encode(params)
        }

        request({
            uri: uri,
            method: method
        }, function (err, res, body) {
            if (err) return callback(err);

            if (res.statusCode !== 200) return callback(new Error('An error ocurred during the request.'))

            callback(null, JSON.parse(body))
        })
    }
};

/* POSTS */

/**
 *
 * @param params
 * @param callback
 */
Client.prototype.getPosts = function (params, callback) {
    this._baseRequest('/posts', 'GET', params, callback)
};

/* TAGS */

Client.prototype.getTags = function (params, callback) {
    this._baseRequest('/tags', 'GET', params, callback)
};

Client.prototype.getTagById = function (params, callback) {
    this._baseRequest('/tags', 'GET', params, callback)
};

Client.prototype.getTagBySlug = function (params, callback) {
    this._baseRequest('/tags', 'GET', params, callback)
};

/* AUTHORS */

Client.prototype.getAuthors = function (params, callback) {
    this._baseRequest('/users', 'GET', params, callback)
};

Client.prototype.getAuthorById = function (params, callback) {
    this._baseRequest('/users', 'GET', params, callback)
};

Client.prototype.getAuthorBySlug = function (params, callback) {
    this._baseRequest('/users', 'GET', params, callback)
};