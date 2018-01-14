// AudioProcessor
let mp3Split = require('mp3-split');

export default class AudioProcessor {

    constructor(episode, timestamps){
        this.episode = episode
        this.timestamps = timestamps
    }

    splitIntoParts(episode, timestamps){
        var template = this.generateTemplate(timestamps)
        let options = {input: episode, audios: template};
        let split = mp3Split(options);

        split.parse().then((parsedAudio) => {
            for (let audio of parsedAudio) {
                console.log(audio.name);
                console.log(audio.start);
                console.log(audio.end);
                console.log(audio.trackName);
            }
        });
    }

    generateTemplate(timestamps){
        var template = []
        for (var i = 0; i < timestamps.length; i++) {
            template.append("[" + timestamps[i] + "]" + " - Part " + i)
        }
        return template
    }
}

