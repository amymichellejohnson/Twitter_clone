Twitter.PostsController = Ember.ArrayController.extend ({
  sortAscending: false,
  sortProperties: ['date'],
  actions: {
    addTweet: function() {
      tweets.addObject({id: tweets.length + 1, username: this.username, post: this.post, date: new Date().toLocaleString()});
    }
  }
});
