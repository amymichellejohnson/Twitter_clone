Twitter.PostsRoute = Ember.Route.extend({
  model: function() {
    return tweets;
  }
});
