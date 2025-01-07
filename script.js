console.log("welcome to spotify")

// initiallize the variables

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));




let songs =[
        {songName: "haye mera dil", filepath: "songs/1.mp3", coverPath: "covers/cover1.jpg"},
        {songName: "Ankhon Ankhon me", filepath: "songs/2.mp3", coverPath: "covers/cover2.jpg"},
        {songName: "Birthday bash", filepath: "songs/3.mp3", coverPath: "covers/cover3.jpg"},
        {songName: "Call Aundi", filepath: "songs/4.mp3", coverPath: "covers/cover4.jpg"},
        {songName: "Care nai karda", filepath: "songs/5.mp3", coverPath: "covers/cover5.jpg"},
        {songName: "Lonely", filepath: "songs/6.mp3", coverPath: "covers/cover6.jpg"},
        {songName: "Mai sharabi", filepath: "songs/7.mp3", coverPath: "covers/cover7.jpg"},
]

songItems.forEach((element,i) => {
//   console.log(element,i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})

// handle play/pause click
masterPlay.addEventListener('click', () => {
        if(audioElement.paused || audioElement.currentTime <= 0){
                audioElement.play();
                // masterPlay.classList.remove('fa-solid fa-play');
                // masterPlay.classList.add('fa-solid fa-pause');
                gif.style.opacity = 1;
        }
                else{
                        audioElement.pause();
                        // masterPlay.classList.remove('fa-solid fa-play');
                        // masterPlay.classList.add('fa-solid fa-pause');
                        gif.style.opacity = 0;
                }

        }
)


// listen to events
audioElement.addEventListener('timeupdate', () => {
//  update seek bar
      progress = ((audioElement.currentTime/audioElement.duration)*100);
      myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
        audioElement.currentTime= myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = () => {
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
                // element.target.classList.remove('fa-solid fa-pause')
                // element.target.classList.add('fa-solid fa-play')
        })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
        element.addEventListener('click', (e)=>{
                makeAllPlays();
                // e.target.classList.remove('fa-solid fa-play');
                // e.target.classList.add('fa-solid fa-pause');
                songIndex = parseInt(e.target.id);
                audioElement.src = `songs/${songIndex+1}.mp3`;
                masterSongName.innerText = songs[songIndex].songName
                audioElement.currentTime = 0;
                audioElement.play();
                gif.style.opacity = 1;
                

        })
})



document.getElementById('next').addEventListener('click', () =>{
        if(songIndex >= 6){
                songIndex = 0;
        }else{
                songIndex += 1;
        }
                audioElement.src = `songs/${songIndex+1}.mp3`;
                masterSongName.innerText = songs[songIndex].songName
                audioElement.currentTime = 0;
                audioElement.play();
})

document.getElementById('previous').addEventListener('click', () => {
        if(songIndex <= 0){
                songIndex = 0;
        }else{
                songIndex -= 1;
        }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName
        audioElement.currentTime = 0;
        audioElement.play();

})


