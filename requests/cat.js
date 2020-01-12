const request = require('request');
module.exports = (channel) => {
  request('https://aws.random.cat/meow', function (error, response, body) {
    if (error) {
      console.log(error);
      channel.send("Er. Something went wrong... bye!");
      return;
    }

    let kitty = JSON.parse(body);
    channel.send("Meow!", {files: [kitty.file]});
  });
}