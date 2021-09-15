const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/YqVlUfk.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Ruby bot by nabuhandbz*\n
\n*owner number wa.me/918289836232*\n
\n*CONTACT OWNER THROUGH social networks-https://www.instagram.com/im.naabu?r=nametag*\n

\n*githublink       https://github.com/nabuhandbz/ruby*\n
`}) 

}));
