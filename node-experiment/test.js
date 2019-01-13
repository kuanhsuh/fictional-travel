var fs = require('fs');
var https = require('https');

fs.writeFile(__dirname + "/index.html", "<h1>HTML is great</h1>", function(error) {
  if (error) {
    return console.log(error);
  } else {
    console.log("Congrats");
  }
});

var myPhotoLocation = 'https://images.unsplash.com/photo-1547162255-b3fe27acd196?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'

https.get(myPhotoLocation, function(response) {
  response.pipe(fs.createWriteStream(__dirname + "/photo.jpg"))
})