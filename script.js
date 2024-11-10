console.log("Welcome To Spotify");

//Initializing the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressber = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongNam = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName : 'Salam-e-Ishq' , filePath : "songs/1.mp3" , coverPath : "covers/1.jpg"},
    {songName : 'Let Me Love You' , filePath : "songs/2.mp3" , coverPath : "covers/2.jpg"},
    {songName : 'Susume' , filePath : "songs/3.mp3" , coverPath : "covers/3.jpg"},
    {songName : 'Aaya Jawani' , filePath : "songs/4.mp3" , coverPath : "covers/4.jpg"},
    {songName : 'Bones' , filePath : "songs/5.mp3" , coverPath : "covers/5.jpg"},
    {songName : 'Enemy' , filePath : "songs/6.mp3" , coverPath : "covers/6.jpg"},
    {songName : 'House Of Memories' , filePath : "songs/7.mp3" , coverPath : "covers/7.jpg"},
    {songName : 'Sugar & Brownies' , filePath : "songs/8.mp3" , coverPath : "covers/8.jpg"},
    {songName : 'Ekhon Onek Raat' , filePath : "songs/9.mp3" , coverPath : "covers/9.jpg"},
    {songName : 'Paro' , filePath : "songs/10.mp3" , coverPath : "covers/10.jpg"}
]

songItems.forEach((element , i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})


//audioElement.play();

//Handle Play pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
//Lisen to Events
audioElement.addEventListener('timeupdate', ()=> {
  //Update Seekbar
  progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
  myProgressber.value = progress;
})

myProgressber.addEventListener('change', ()=> {
    audioElement.currentTime = (myProgressber.value * audioElement.duration) / 100;
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('allPlay')).forEach((element)=>{
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
    })
}


Array.from(document.getElementsByClassName('allPlay')).forEach((element)=>{
    element.addEventListener('click' ,(e)=>{
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongNam.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex >= 9){
        songIndex = 0;
    }else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongNam.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex <= 0){
        songIndex = 0;
    }else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongNam.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})