'use strict';

const request = require('request');
const qs = require('querystring');

////////////////////////// Constants ////////////////////////
const DEFAULT_CLIENT_ID = 'ghost-frontend';
const DEFAULT_BASE_URL = 'http://localhost:2368';
const API_PATH = '/ghost/api/v0.1';
const AUTH_TYPE_CLIENT = "CLIENT";
const AUTH_TYPE_USER = "USER";

/////////////////////// Valid Parameters ////////////////////
/**
    Browse Request Parameters -- /users/, /posts/ and /tags/ endpoints are by default
    Browse requests.
 */
const BROWSE_PARAMS = ["limit", "page", "order", "include", "fields", "filter", "formats"];

/**
    Read Request Parameters -- /posts/:id, /posts/slug/:slug, /tags/:id, /tags/slug/:slug,
    /users/:id and /users/slug/:slug are Read requests.
 */
const READ_PARAMS = ["include"];

function Client (options) {
    this.options = options || {};
    this.url = this.options.endpoint + API_PATH || DEFAULT_BASE_URL + API_PATH;
    this.clientId = this.options.clientId || DEFAULT_CLIENT_ID;
    this.clientSecret = this.options.clientSecret;
    this.token = this.options.token;

    if (this.options.token)
        this.authType = AUTH_TYPE_USER;
    else if (this.options.clientId && this.options.clientSecret)
        this.authType = AUTH_TYPE_CLIENT;
    else
        throw 'Please provide either a token or both clientId and clientSecret together';
}

/**
 * Base request
 * @param path
 * @param method :  [ GET, POST, PUT ...]
 * @param params
 * @param body
 * @param callback  (err, httpResponse, body)
 */
Client.prototype._baseRequest = function (path, method, params, body, callback) {

    let options = {
        url: this.url + path + '?' + qs.encode(params),
        method: method,
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    };

    if (this.authType === AUTH_TYPE_USER) {
        options.headers = {
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': 'Bearer ' + this.token
        }
    } else {
        params.client_id = this.clientId;
        params.client_secret = this.clientSecret;
        options.url = this.url + path + '?' + qs.encode(params);
    }

    if (body) {
        options.body = body;
        options.json = true;
    }

    return new Promise(function (resolve, reject) {
        request(options, function (err, httpResponse, data) {

            if (err) {
                callback && callback(err, httpResponse, data);
                return reject(err);
            }

            callback && callback(err, httpResponse, data);
            return resolve({ httpResponse: httpResponse, data: data });
        });
    });
};

/* POSTS */

/**
 *
 * @param params
 * @param callback
 */
Client.prototype.getPosts = function (params, callback) {
    this._baseRequest('/posts', 'GET', params, {}, callback);
};

Client.prototype.getPostById = function (params, id, callback) {
    this._baseRequest('/posts/' + id, 'GET', params, {}, callback);
};

Client.prototype.getPostBySlug = function (params, slug, callback) {
    this._baseRequest('/posts/slug/' + slug, 'GET', params, {}, callback);
};

Client.prototype.createPost = function (params, post, callback) {
    this._baseRequest('/posts', 'POST', params, { posts: [post] }, callback);
};

Client.prototype.createPosts = function (params, posts, callback) {
    this._baseRequest('/posts', 'POST', params, { posts: posts }, callback);
};

Client.prototype.updatePost = function (params, post, callback) {
    this._baseRequest('/posts/' + post.id, 'PUT', params,
        JSON.stringify({
            posts: [post]
        }), callback);
};

Client.prototype.deletePost = function (params, id, callback) {
    this._baseRequest('/posts/' + id, 'DELETE', params, {}, callback);
};

/* SLUGS */
Client.prototype.createSlug = function (params, slug, callback) {
    this._baseRequest('/slugs/post/' + slug + '/', 'GET', params, {}, callback);
};

// GET http://theleapers.co/ghost/api/v0.1/slugs/post/Testing%20Time/

/* TAGS */

Client.prototype.getTags = function (params, callback) {
    this._baseRequest('/tags', 'GET', params, {}, callback);
};

Client.prototype.getTagById = function (params, id, callback) {
    this._baseRequest('/tags/' + id, 'GET', params, {}, callback);
};

Client.prototype.getTagBySlug = function (params, slug, callback) {
    this._baseRequest('/tags/slug/' + slug, 'GET', params, {}, callback);
};

/* AUTHORS */

Client.prototype.getUsers = function (params, callback) {
    this._baseRequest('/users', 'GET', params, {}, callback);
};

Client.prototype.getUserById = function (params, id, callback) {
    this._baseRequest('/users/' + id, 'GET', params, {}, callback);
};

Client.prototype.getUserBySlug = function (params, slug, callback) {
    this._baseRequest('/users/slug/' + slug, 'GET', params, {}, callback);
};

module.exports = Client;