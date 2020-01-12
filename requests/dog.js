const request = require('request');
module.exports =  (channel) => {
  request('https://dog.ceo/api/breeds/image/random', function (error, response, body) {
    if (error) {
      console.log(error);
      channel.send("Er. Something went wrong... bye!");
      return;
    }

    let doggo = JSON.parse(body);
    channel.send("Woof!", {files: [doggo.message]});
  });
}