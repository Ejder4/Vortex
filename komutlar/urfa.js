const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  message.channel.send({embed: {
       file:"https://img.yemektarifleri.com/photos/25002/1511359459_400.jpg",
           color: 0xD97634,
       description: "**Urfa Dimi Abi (**Evet Koçum Bırak Git**) Peki Abi (**Oh Nefis**)**"
             }});
 };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['urfa'],
  permLevel: 0
};
exports.help = {
  name: 'urfagonder',
  description: 'Değişiklikleri gösterir.',
  usage: 'urfagonder'
};