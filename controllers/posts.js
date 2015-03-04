Twitter.PostsController = Ember.ArrayController.extend ({
  itemController: 'date',
  sortAscending: false,
  sortProperties: ['date'],
  actions: {
    addTweet: function() {
      tweets.addObject({id: tweets.length + 1, username: this.username, post: this.post, date: new Date().toLocaleString(), comments: []});
    },

  }
});

Twitter.DateController = Ember.ObjectController.extend ({
  isDateShowing: false,
  actions: {
    toggleDate: function() {
      if(this.isDateShowing) {
        this.set('isDateShowing', false);
      } else {
        this.set('isDateShowing', true);
      }
    },
    addComment: function(comment) {
      console.log(comment)
      var tweetComments = this.get('model.comments');
      // temp = this.get('comments');
      tweetComments.addObject(comment);
      // console.log(temp)
      // this.set('comments', temp);
      console.log(tweetComments)

    }
  }
});
