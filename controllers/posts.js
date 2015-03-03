Twitter.PostsController = Ember.ArrayController.extend ({
  sortAscending: false,
  isDateShowing: false,
  sortProperties: ['date'],
  actions: {
    addTweet: function() {
      tweets.addObject({id: tweets.length + 1, username: this.username, post: this.post, date: new Date().toLocaleString()});
    },
    toggleDate: function() {
      if(this.isDateShowing) {
        this.set('isDateShowing', false);
        console.log(this.isDateShowing);
      } else {
        this.set('isDateShowing', true);
        console.log(this.isDateShowing);

      }
    }
  }
});
