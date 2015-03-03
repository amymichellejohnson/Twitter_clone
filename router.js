Twitter.Router.map(function() {
  this.resource('posts',{path: '/'});
  this.resource('posts', function() {
    this.resoure('date')})


});
