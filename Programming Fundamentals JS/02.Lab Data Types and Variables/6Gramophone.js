function gramophone(str1, str2, str3){
let nameBand = str1;
let nameAlbum = str2;
let nameSong =str3
let songDurationInSeconds = (nameAlbum.length * nameBand.length) * nameSong.length / 2
let fullRotationSeconds = 2.5
let numRotations = songDurationInSeconds/fullRotationSeconds
console.log(`The plate was rotated ${Math.ceil(numRotations)} times.`);
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs')
gramophone('Rammstein', 'Sehnsucht', 'Engel')