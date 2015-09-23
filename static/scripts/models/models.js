define(['backbone'], function(Backbone) {
  'use strict';

  /*** Models **/

  /* Article model: */
  // a model that holds a single article object from the JSON API.
  var Article = Backbone.Model.extend({

  });

  /* Paginate model: */
  // a model to handle pagination.
  // Values of properties are the bookmark token of the previous and next page called from the JSON API
  // /articles/?api=true&bookmark=CjISLGoQZX5jaHJvbm9zdHJpcGxlc3IYCxILV2ViUmVzb3VyY2UYgICAwMjThAgMGAAgAA==
  // back = null > first page
  // back = bookmark > bookmarked page
  // forward = null > last page
  var Paginate = Backbone.Model.extend({
      back: null,
      forward: null
  });

  // requirejs exports
  // works like module.exports in Nodejs
  return {
    Article: Article,
    Paginate: Paginate
  }

});