console.log("Js Connected")
let currentSong=new Audio()

async function getSongs() {

    let song_list = await fetch("http://127.0.0.1:3000/songs/")
    let response = await song_list.text()
    let div = document.createElement("div")
    div.innerHTML = response;
    let song_links = div.getElementsByTagName("a")
    let songs = []
    for (let index = 0; index < song_links.length; index++) {
        const element = song_links[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/songs/")[1])
        }

       
    }
    return songs
}


function seconds_to_minutes(seconds) {
    // / Ensure seconds is a number and non-negative
    if (isNaN(seconds) || seconds < 0) {
      return "Invalid input";
    }
  
    // Handle exceeding maximum time limit (optional)
    // Uncomment and adjust the limit (e.g., 3600 seconds for 1 hour) if needed
    // if (seconds > 3600) {
    //   return "Time exceeds limit";
    // }
  
    // Calculate minutes (round down to nearest whole minute)
    const minutes = Math.floor(seconds / 60);
  
    // Calculate remaining seconds (round down to nearest whole number)
    const remainingSeconds = Math.floor(seconds % 60);
  
    // Format minutes with leading zero if needed (simple approach)
    let formattedMinutes = minutes.toString();
    if (minutes < 10) {
      formattedMinutes = "0" + formattedMinutes;
    }
  
    // Format seconds without decimals (using Math.floor)
    const formattedSeconds = Math.floor(remainingSeconds).toString();
  
    // Return the formatted time string
    return formattedMinutes + ":" + formattedSeconds;
  }
    
  


const playMusic=(track)=>{
    currentSong.src="/songs/"+track
    currentSong.play()
    play.src="pause.svg"
    var currentSongName = track
    .split(" ") // Split the track name into words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter and join back
    .join(" ").replaceAll("-", " ");
     // Join the capitalized words back into a string
    document.querySelector(".song-time").innerHTML="00:00"
    document.querySelector(".song-info-txt").innerHTML=currentSongName;
}

async function main() {
    // Checking the Function
    let songs = await getSongs()
    console.log(songs);
    
    // Making
    
    //Displaying song list
    let songUl=document.querySelector(".song-list").getElementsByTagName("ul")[0]
    for (const song of songs) {
        songUl.innerHTML=songUl.innerHTML+`<li> 
        <img class="invert" src="music_note.svg" alt="">
        <div class="song-info">
            <div class="song-name">${song}</div>
            <div class="Song-Artist">Aditya</div>
        </div>
        <div class="play-now">
        <span>Plan Now</span>
        <img class="invert" id="library-play-btn" src="play.svg" alt=""></div>
    </li>`
        // console.log(songUl);
        
    }

    // Attaching an Event Listner to each song
    Array.from(document.querySelector(".song-list").getElementsByTagName("li")).forEach(e=>{
        e.addEventListener("click",element=>{
            console.log(e.querySelector(".song-info").firstElementChild.innerHTML);
            playMusic(e.querySelector(".song-info").firstElementChild.innerHTML.trim())

        })
    })
// Attaching event listner to play, next and previous
play.addEventListener("click",()=>{
if(currentSong.paused){
    currentSong.play()
    play.src="pause.svg"
}
else{
    currentSong.pause()
    play.src="play.svg"
}
})
// Listen for time update
currentSong.addEventListener("timeupdate",()=>{
    console.log(currentSong.currentTime,currentSong.duration)
    document.querySelector(".song-time").innerHTML=`${seconds_to_minutes(currentSong.currentTime)}/${seconds_to_minutes(currentSong.duration)}`
})
}
main()
