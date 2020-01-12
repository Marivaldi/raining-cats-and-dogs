# Raining Cats & Dogs
 A Discord Bot that returns random weather, cat pictures, or dog pictures. Based on 3 open APIs. Check them out!

**Random Cats:** https://aws.random.cat/

**Dog API:** https://dog.ceo/dog-api/

**MetaWeather:** https://www.metaweather.com/

## Setup
1. `git clone https://github.com/Marivaldi/raining-cats-and-dogs`
2. `npm install`
3. Go to https://discordapp.com/developers/applications/
4. Create a new application
5. Go to the Bot tab and click `Add Bot`
6. Under Token, click `Copy`
7. Create a `.env` file in raining-cats-and-dogs
8. Add `DISCORD_BOT_KEY=your_key` to the file and replace `your_key` with the copied token
9. Go to the OAuth tab
10. Under Scopes, select Bot
11. Copy the URL and paste it into another browser tab
12. Add the bot to a server (you may want to create a new server just to test it out without annoying everyone in an existing one)
13. Open a command prompt in the `raining-cats-and-dogs` folder
14. `npm run dev`
15. Go to the Discord Server and type 'RC&D'

This project was initially created by following the steps at https://thomlom.dev/create-a-discord-bot-under-15-minutes/.
