var TelegramBot = require('node-telegram-bot-api');
var token="5689203882:AAELwJ-sC9P4SWvU0J9iQEE5F1a2Jh5b7R0";
const bot = new TelegramBot(token, {polling: true});
bot.on('message',function(msg){
    if(msg.text=="Hello")
    {
        bot.sendMessage(msg.chat.id,"welcome to hogwarts");
    }
        else if(msg.text=="red")
        {
            bot.sendMessage (msg.chat.id,"gryffindor");
        }
        else if(msg.text=="green")
        {
            bot.sendMessage(msg.chat.id,"slytherin");
        }
        else if(msg.text=="yellow")
        {
            bot.sendMessage(msg.chat.id,"hufflepuff");
        }
       else if(msg.text=="blue")
       {
        bot.sendMessage(msg.chat.id,"ravenclaw");
       }
       else
       {
        bot.sendMessage(msg.chat.id,"you are muggle!!!");
       }
});