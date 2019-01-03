const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = 'f!'
client.on('ready', () => {
  console.log(`${client.user.username} is ready`)  
})
client.on('message', message => {
let fake = require('./fake.json')
const address = fake[Math.floor(Math.random() * fake.length)];
    if(message.content === `${prefix}get`) {
    let embed = new Discord.RichEmbed()
    .setThumbnail('https://d.top4top.net/p_1097p1q6h1.png')
    .addField('IssuingNetwork:', `${address.IssuingNetwork}`)
    .addField('CardNumber:', `${address.CardNumber}`)
    .addField('Name:', `${address.Name}`)
    .addField('Address:', `${address.Address}`)
    .addField('Country:', `${address.Country}`)
    .addField('Birthday', `${address.Birthday}`)
    .addField('CVV:', `${address.CVV}`)
    .addField('Exp:', `${address.Exp}`)
    .addField('To Get Temporary Mail Go To This Website:', `https://temp-mail.org/ar/`)
    .setTimestamp()
    .setColor('BLUE')
    .setFooter('**This Credit Card Number Is Vaild To Activate Accounts Only , Not For Buying Or Shopping**')
    message.author.sendEmbed(embed)
      let msgembed = new Discord.RichEmbed()
      .setTitle('The Information Has Been Sent To Your DM')
      .setColor('BLUE')
      message.channel.sendEmbed(msgembed)
}})

//simple code by Bowlingtoolkit
client.login(process.env.BOT_TOKEN)
