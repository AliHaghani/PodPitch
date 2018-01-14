// Episode model

export default class Episode {
    constructor(episodeName, episodeURL){
        this.episodeName = episodeName
        this.episodeURL = episodeURL
        this.timestamps = []
    }


    addTimestamp(timestamp){
        this.timestamps.add(timestamp)
    }

}