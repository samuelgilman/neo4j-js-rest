module.exports = {
  
  init: function (params, next) {

    var that = this;
    var request = require('request');
    var method = (params.method || 'Post');
    var url = params.url;
    var headers = (params.headers || {
      'Accept': 'application/json; charset=UTF-8',
      'Context-type' : 'application/json',
    });

    that.request = request;
    that.method = method;
    that.headers = headers;
    that.url = url;
    that.ok = false;

    that.run({

      query: [],
      params: params

    }, function (err) {

      if (!err) { that.ok = true; }
      next(err);

    }, true);

  },

  run: function (params, next, init) {

    var that = this;
    var request = that.request;
    var method = that.method;
    var url = that.url;
    var headers = that.headers;
    var ok = (init || that.ok);
    var query = params.query;
    var args = params.params;

    if (ok) {

      query = query.join(' ');

      var body = JSON.stringify({
        query: query,
        parmas: args
      });

      request({

        'method': method,
        'url': url, 
        'headers': headers,
        'body': body,
        'json': true 
 
      }, function (err, res, json) {

        next(err, json);

      });

    } else {

      next('ERROR_NEO4J_JS_REST * err -> not initialized');
  
    }

  }

};
