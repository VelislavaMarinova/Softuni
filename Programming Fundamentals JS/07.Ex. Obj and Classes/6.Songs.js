function songs(arr) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    let numSongs = arr.shift();
    let lastEl = arr[arr.length-1]
    for (let i = 0; i < numSongs; i++) {
        let songInfo = arr[i];

        let [typeList, name, time] = songInfo.split('_');
        let currentSong = new Song(typeList, name, time);
        if(currentSong.typeList === lastEl){
            console.log(currentSong.name);
        }
        if(lastEl === 'all'){
            console.log(currentSong.name);
        }
        //console.log(currentSong);
    }

}
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    
)