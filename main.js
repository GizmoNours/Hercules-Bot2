const Discord = require("discord.js");
const client = new Discord.Client();

require('events').EventEmitter.defaultMaxListeners = 0

client.on("ready", () => {
    console.log("Je suis connecté avec un jus de fruit");
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'confédération-libre');
    if (!channel) return;
    channel.send(`Bienvenue en CL ${member.user}, Votre arrivée a-t-elle été approuvée par référendum ?`);
    

});



client.on("message", msg => {
    if (msg.author.username != "Hercules"){
    if (msg.content.match(/hercules/i)) {
        msg.reply("Le gouvernement tente d'imposer sa politique sans que je n'ai mon mot à dire.");
        }
  
    if (msg.content.match(/Référendum/i)) {
        msg.reply("Je demande un référendum à visages découvert.");
    }

    if (msg.content.match(/Bonne nuit/i)) {
        msg.reply("Mais d'abord un petit jus de fruit.");
    }

    if (msg.content.match(/Bonjour/i)) {
        msg.reply("Je les avais prévenu que tu reviendrais...");
    }

    if (msg.content.match(/Vote/i)) {
        msg.reply("Seul un citoyen actif, non fonctionnaire, de plus de 18 ans, ayant une prostate en bon état, la nationalité depuis plus de 10 jours, n'ayant aucun casier judiciaire et qui s'est lavé les mains à le droit de voter.");
    }

    if (msg.content.match(/élections/i)) {
        msg.reply("Il ne faut pas faire voter les policiers et l'armée voyons.");
    }

    if (msg.content.match(/érections/i)){
        msg.reply("STOP ! Vous avez certainement voulu dire élections");
    }

    if (msg.content.match(/burnes/i)) {
        msg.reply("STOP ! Vous avez certainement voulu dire urnes");
    }


    if (msg.content.match(/Baston/i)) {
        msg.reply("Sur mon honneur, je suis contre la violence.");
    }


    if (msg.content.match(/réactif/i)) {
        msg.reply("La réactivité est essentielle pour un ministre ou un fonctionnaire.");
    }


    if (msg.content.match(/Mule/i)) {
        msg.reply("Je n'approuve pas ces pratiques anti jeu.");
    }


    if (msg.content.match(/Urnes/i)) {
        msg.reply("Il ne faut pas bruler les urnes des honnêtes citoyens.");
    }

    if (msg.content.match(/Papy élmérien/i)) {
        msg.reply("On parle de moi ? Je dormais...");
    }

    if (msg.content.match(/Jus de fruit/i)) {
        msg.reply("Pas touche au mien sinon ça va gacher ma sieste.");
    }



    if ( msg.content.match(/guerre/i)) {
        msg.reply("Les citoyens ne veulent pas de cette guerre que le gouvernement tente d'imposer sans permettre de débat.");
    }


    if (msg.content.match(/Président/i)) {
        msg.reply("vous savez que moi j'ai été de nombreuses fois président ?");
    }

    if (msg.content.match(/Flood/i)) {
        msg.reply("Je vous demande de vous arrêter !");
    }

    if (msg.content.match(/Sport/i)) {
        msg.reply("Pourquoi courir quand on peut faire une sieste ?");
    }

    if (msg.content.match(/Blague/i)) {
        msg.reply("Dans un débat, qui ne dit mot con sent...");
    }

    if (msg.mentions.has(client.user)) {
    msg.reply('Tu as demandé mon avis éclairé ?');
}}
});

var express = require('express');
var app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

client.login(process.env.TOKEN);