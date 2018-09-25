# ghost-api

<p align="center">
  <a href="https://www.npmjs.com/package/ghost-api">
    <img src="https://img.shields.io/badge/npm-1.0.0-green.svg" alt="Dependency Status" />
  </a>
</p>

<br>


## Table of Contents 

- [Installation](#installation)
- [Authentication: Client Authentication](#authentication-client-authentication)
- [Authentication: User Authentication](#authentication-user-authentication)
- [Public API](#public-api)
        - [POSTS](#posts)
    	- [TAGS](#tags)
    	- [USERS](#users) 
- [Private API](#private-api)
- [License MIT](#license-mit)

## Installation

```bash

$ npm install ghost-api

``` 

## Authentication: Client Authentication

```js

const ghost = require('ghost-api');

const options = {
 endpoint: 'http://YOUR-GHOST-SITE-DOMAIN.com',
 clientId: 'CLIENT-ID',
 clientSecret: 'CLIENT-SECRET'
};

let client = ghost.createClient(options);

```

## Authentication: User Authentication

```js

const ghost = require('ghost-api');

const options = {
 endpoint: 'http://YOUR-GHOST-SITE-DOMAIN.com',
 token: 'YOUR-ACCESS-TOKEN-HERE'
};

let client = ghost.createClient(options);

```

## Public API

### POSTS

#### client.getPosts

```js

client.getPosts({}, function (err, response, posts) {
	if(err){
        console.log(err);
    } else {
        console.log(posts);
    }
});

```

#### client.getPostById

```js

client.getPostById({}, 'post-id-here', function (err, response, post) {
    if(err){
        console.log(err);
    } else {
        console.log(post);
    }
});

```

#### client.getPostBySlug

```js

client.getPostBySlug({},'post-slug-here', function (err, response, post) {
    if(err){
        console.log(err);
    } else {
        console.log(post);
    }
});

```

### TAGS

#### client.getTags

```js

client.getTags({}, function (err, response, tags) {
	if(err){
        console.log(err);
    } else {
        console.log(tags);
    }
});

```

#### client.getTagById

```js

client.getTagById({}, 'tag-id-here', function (err, response, tag) {
    if(err){
        console.log(err);
    } else {
        console.log(tag);
    }
});

```

#### client.getTagBySlug

```js

client.getTagBySlug({},'tag-slug-here', function (err, response, tag) {
    if(err){
        console.log(err);
    } else {
        console.log(tag);
    }
});

```

### USERS

#### client.getUsers

```js

client.getUsers({}, function (err, response, users) {
	if(err){
        console.log(err);
    } else {
        console.log(users);
    }
});

```

#### client.getUserById

```js

client.getUserById({}, 'user-id-here', function (err, response, user) {
    if(err){
        console.log(err);
    } else {
        console.log(user);
    }
});

```

#### client.getUserBySlug

```js

client.getUserBySlug({},'user-slug-here', function (err, response, user) {
    if(err){
        console.log(err);
    } else {
        console.log(user);
    }
});

```

## Private API

### POSTS

#### client.createPost

```js

client.createPost({}, post, function (err, response, post) {
	if(err){
        console.log(err);
    } else {
        console.log(post);
    }
});

```

#### client.updatePost

```js

client.updatePost({}, post, function (err, response, post) {
	if(err){
        console.log(err);
    } else {
        console.log(post);
    }
});

```

#### client.deletePost

```js

client.deletePost({}, 'post-id-here', function (err, response, data) {
	if(err){
        console.log(err);
    } else {
        console.log(posts);
    }
});

```

more coming soon!

## License MIT

Copyright (c) 2018 - Arda Yigithan Orhan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.