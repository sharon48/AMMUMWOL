MyPnky.applyCMD({ pattern: 'ig ?(.*)', fromMe: LOL,  deleteCommand: false, desc: Lang.IG_DESC}, (async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.client.sendMessage(message.jid,Lang.NEED_WORD,MessageType.text, {quoted: message.data});

    var payload = await QueenAmdi.insta(userName)

    const profileBuffer = await axios.get(payload.link, {responseType: 'arraybuffer'})
    var downloading = await message.client.sendMessage(message.jid,Lang.DL_VID,MessageType.text, {quoted: message.data});

    var uploading = await message.client.sendMessage(message.jid,Lang.UP_VID,MessageType.text, {quoted: message.data});
    await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {quoted: message.data, caption: Config.CAP, thumbnail: thumb})  
    return await message.client.deleteMessage(message.jid, {id: uploading.key.id, remoteJid: message.jid, fromMe: true})
}));
