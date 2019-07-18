function myFunction() {
  window.location = window.open("https://www.youtube.com/watch?v=ms9tyNKtjcs");
}

document.getElementById("audio").setAttribute('src', 'daily_download_20171205_128.mp3');

function cs_change_music(music)
{
document.getElementById("audio").pause();
document.getElementById("audio").setAttribute('src', music);

document.getElementById("audio").load();
document.getElementById("audio").play();
}
