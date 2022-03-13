const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();
client.on('qr',qr=>{
    qrcode.generate(qr,{small:true});
})
client.on('ready',()=>{
    console.log('ready');
})

client.on('message',async msg=>{
    console.log(msg.body);
    if(msg.body.toLocaleLowerCase()=== 'hi'){
        await msg.reply('hi');
        await client.sendMessage(msg.from, 'hello from node');
    }
})

client.initialize();