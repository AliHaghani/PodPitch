// Episode model

export default class Episode {
    constructor(episodeName, episodeURL, audioURI){
        this.episodeName = episodeName;
        this.episodeURL = episodeURL;
        this.timestamps = [];
        this.audioURI = audioURI;
    }

    addTimestamp(timestamp){
        this.timestamps.add(timestamp);
    }

    removeTimestamp(timestampInd) {
        this.timestamps.splice(timestampInd, 1);
    }

    setAudioWithAdsURI(audioWithAds) {
        this.audiWithAdsURI = audioWithAds;
    }

}