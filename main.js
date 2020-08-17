// Clicking search button and taking search item

document.getElementById("search-button").addEventListener("click", (event) => {
    let searchInput = document.getElementById("search-input");
    console.log(searchInput.value);
    lyricsReport(searchInput.value);
})

// Api linking

const lyricsApi = {
    baseUrl : "https://api.lyrics.ovh/suggest",
    subUrl : "https://api.lyrics.ovh/v1/",   
}

// fetch for finding song name

function lyricsReport(songName){
    fetch(`${lyricsApi.baseUrl}/${songName}`)
    .then(lyrics => lyrics.json())
    .then(showLyricsReport);
}

// show lyrics report

function showLyricsReport(lyrics){
    console.log(lyrics);
    //console.log(lyrics.data);
    var dataIndex = lyrics.data;
    //console.log(dataIndex);

    document.getElementById('display-content').style.display="block";

    for(let i = 0; i < dataIndex.length; i++){
        if(i == 10){
            break;
        }
        var searchResult = dataIndex[i];
        console.log(searchResult); 
        if(i == 0){

            let coverImage = document.getElementById('cover-image-0');
            coverImage.value = `${searchResult.album.cover_small}`;
            let coverPhoto = coverImage.value;
            coverImage.src = coverPhoto;

            let songName = document.getElementById('lyrics-name-0');
            songName.innerText = `${searchResult.title}`;
            console.log(songName.innerText);
            let nameSong = songName.innerText;
    
            let albumName = document.getElementById('album-name-0');
            albumName.innerText = `${searchResult.album.title}`;
            //console.log(albumName.innerText);
             
    
            let singerName = document.getElementById('singer-name-0');
            singerName.innerText = `${searchResult.artist.name}`;
            console.log(singerName.innerText);
            let nameSinger = singerName.innerText;

            let audioSong = document.getElementById('track-0');
            audioSong.value = `${searchResult.preview}`;
            let audioSource = audioSong.value;
            audioSong.src = audioSource;

            let clickButton = document.getElementById('click-button-0');
            clickButton.addEventListener('click', (event) => {
                let buttonClick = clickButton.innerText; 
                buttonClick = `${nameSinger}/${nameSong}`;
                console.log(buttonClick);
                songLyrics0(buttonClick);

            })
            
        }
        else if(i == 1){

            let coverImage = document.getElementById('cover-image-1');
            coverImage.value = `${searchResult.album.cover_small}`;
            let coverPhoto = coverImage.value;
            coverImage.src = coverPhoto;

            let songName = document.getElementById('lyrics-name-1');
            songName.innerText = `${searchResult.title}`;
            let nameSong = songName.innerText;
            
            let albumName = document.getElementById('album-name-1');
            albumName.innerText = `${searchResult.album.title}`;
    
            let singerName = document.getElementById('singer-name-1');
            singerName.innerText = `${searchResult.artist.name}`;
            let nameSinger = singerName.innerText;

            let audioSong = document.getElementById('track-1');
            audioSong.value = `${searchResult.preview}`;
            let audioSource = audioSong.value;
            audioSong.src = audioSource;

            let clickButton = document.getElementById('click-button-1');
            clickButton.addEventListener('click', (event) => {
                let buttonClick = clickButton.innerText; 
                buttonClick = `${nameSong}/${nameSinger}`;
                console.log(buttonClick);
                songLyrics1(buttonClick);

            })
            
        }
        else if(i == 2){

            let coverImage = document.getElementById('cover-image-2');
            coverImage.value = `${searchResult.album.cover_small}`;
            let coverPhoto = coverImage.value;
            coverImage.src = coverPhoto;

            let songName = document.getElementById('lyrics-name-2');
            songName.innerText = `${searchResult.title}`;
            let nameSong = songName.innerText;
            
            let albumName = document.getElementById('album-name-2');
            albumName.innerText = `${searchResult.album.title}`;
    
            let singerName = document.getElementById('singer-name-2');
            singerName.innerText = `${searchResult.artist.name}`;
            let nameSinger = singerName.innerText;

            let audioSong = document.getElementById('track-2');
            audioSong.value = `${searchResult.preview}`;
            let audioSource = audioSong.value;
            audioSong.src = audioSource;

            let clickButton = document.getElementById('click-button-2');
            clickButton.addEventListener('click', (event) => {
                let buttonClick = clickButton.innerText; 
                buttonClick = `${nameSong}/${nameSinger}`;
                console.log(buttonClick);
                songLyrics2(buttonClick);

            })
            
        }
        else if(i == 3){

            let coverImage = document.getElementById('cover-image-3');
            coverImage.value = `${searchResult.album.cover_small}`;
            let coverPhoto = coverImage.value;
            coverImage.src = coverPhoto;

            let songName = document.getElementById('lyrics-name-3');
            songName.innerText = `${searchResult.title}`;
            let nameSong = songName.innerText;
            
            let albumName = document.getElementById('album-name-3');
            albumName.innerText = `${searchResult.album.title}`;
    
            let singerName = document.getElementById('singer-name-3');
            singerName.innerText = `${searchResult.artist.name}`;
            let nameSinger = singerName.innerText;

            let audioSong = document.getElementById('track-3');
            audioSong.value = `${searchResult.preview}`;
            let audioSource = audioSong.value;
            audioSong.src = audioSource;

            let clickButton = document.getElementById('click-button-3');
            clickButton.addEventListener('click', (event) => {
                let buttonClick = clickButton.innerText; 
                buttonClick = `${nameSong}/${nameSinger}`;
                console.log(buttonClick);
                songLyrics3(buttonClick);

            })
            
        }
        else if(i == 4){

            let coverImage = document.getElementById('cover-image-4');
            coverImage.value = `${searchResult.album.cover_small}`;
            let coverPhoto = coverImage.value;
            coverImage.src = coverPhoto;

            let songName = document.getElementById('lyrics-name-4');
            songName.innerText = `${searchResult.title}`;
            let nameSong = songName.innerText;
            
            let albumName = document.getElementById('album-name-4');
            albumName.innerText = `${searchResult.album.title}`;
    
            let singerName = document.getElementById('singer-name-4');
            singerName.innerText = `${searchResult.artist.name}`;
            let nameSinger = singerName.innerText;
            

            let audioSong = document.getElementById('track-4');
            audioSong.value = `${searchResult.preview}`;
            let audioSource = audioSong.value;
            audioSong.src = audioSource;

            let clickButton = document.getElementById('click-button-4');
            clickButton.addEventListener('click', (event) => {
                let buttonClick = clickButton.innerText; 
                buttonClick = `${nameSong}/${nameSinger}`;
                console.log(buttonClick);
                songLyrics4(buttonClick);

            })
            
        }
        else if(i == 5){

            let coverImage = document.getElementById('cover-image-5');
            coverImage.value = `${searchResult.album.cover_small}`;
            let coverPhoto = coverImage.value;
            coverImage.src = coverPhoto;

            let songName = document.getElementById('lyrics-name-5');
            songName.innerText = `${searchResult.title}`;
            let nameSong = songName.innerText;
            
            let albumName = document.getElementById('album-name-5');
            albumName.innerText = `${searchResult.album.title}`;
    
            let singerName = document.getElementById('singer-name-5');
            singerName.innerText = `${searchResult.artist.name}`;
            let nameSinger = singerName.innerText;

            let audioSong = document.getElementById('track-5');
            audioSong.value = `${searchResult.preview}`;
            let audioSource = audioSong.value;
            audioSong.src = audioSource;
            
            let clickButton = document.getElementById('click-button-5');
            clickButton.addEventListener('click', (event) => {
                let buttonClick = clickButton.innerText; 
                buttonClick = `${nameSong}/${nameSinger}`;
                console.log(buttonClick);
                songLyrics5(buttonClick);

            })
        }
        else if(i == 6){

            let coverImage = document.getElementById('cover-image-6');
            coverImage.value = `${searchResult.album.cover_small}`;
            let coverPhoto = coverImage.value;
            coverImage.src = coverPhoto;


            let songName = document.getElementById('lyrics-name-6');
            songName.innerText = `${searchResult.title}`;
            let nameSong = songName.innerText;
            
            let albumName = document.getElementById('album-name-6');
            albumName.innerText = `${searchResult.album.title}`;
    
            let singerName = document.getElementById('singer-name-6');
            singerName.innerText = `${searchResult.artist.name}`;
            let nameSinger = singerName.innerText;

            let audioSong = document.getElementById('track-6');
            audioSong.value = `${searchResult.preview}`;
            let audioSource = audioSong.value;
            audioSong.src = audioSource;

            let clickButton = document.getElementById('click-button-6');
            clickButton.addEventListener('click', (event) => {
                let buttonClick = clickButton.innerText; 
                buttonClick = `${nameSong}/${nameSinger}`;
                console.log(buttonClick);
                songLyrics6(buttonClick);

            })
            
        }
        else if(i == 7){


            let coverImage = document.getElementById('cover-image-7');
            coverImage.value = `${searchResult.album.cover_small}`;
            let coverPhoto = coverImage.value;
            coverImage.src = coverPhoto;

            let songName = document.getElementById('lyrics-name-7');
            songName.innerText = `${searchResult.title}`;
            let nameSong = songName.innerText;
            
            let albumName = document.getElementById('album-name-7');
            albumName.innerText = `${searchResult.album.title}`;
    
            let singerName = document.getElementById('singer-name-7');
            singerName.innerText = `${searchResult.artist.name}`;
            let nameSinger = singerName.innerText;

            let audioSong = document.getElementById('track-7');
            audioSong.value = `${searchResult.preview}`;
            let audioSource = audioSong.value;
            audioSong.src = audioSource;

            let clickButton = document.getElementById('click-button-7');
            clickButton.addEventListener('click', (event) => {
                let buttonClick = clickButton.innerText; 
                buttonClick = `${nameSong}/${nameSinger}`;
                console.log(buttonClick);
                songLyrics7(buttonClick);

            })
            
        }
        else if(i == 8){

            let coverImage = document.getElementById('cover-image-8');
            coverImage.value = `${searchResult.album.cover_small}`;
            let coverPhoto = coverImage.value;
            coverImage.src = coverPhoto;

            let songName = document.getElementById('lyrics-name-8');
            songName.innerText = `${searchResult.title}`;
            let nameSong = songName.innerText;
            
            let albumName = document.getElementById('album-name-8');
            albumName.innerText = `${searchResult.album.title}`;
    
            let singerName = document.getElementById('singer-name-8');
            singerName.innerText = `${searchResult.artist.name}`;
            let nameSinger = singerName.innerText;

            let audioSong = document.getElementById('track-8');
            audioSong.value = `${searchResult.preview}`;
            let audioSource = audioSong.value;
            audioSong.src = audioSource;

            let clickButton = document.getElementById('click-button-8');
            clickButton.addEventListener('click', (event) => {
                let buttonClick = clickButton.innerText; 
                buttonClick = `${nameSong}/${nameSinger}`;
                console.log(buttonClick);
                songLyrics8(buttonClick);

            })
            
        }
        else if(i == 9){

            let coverImage = document.getElementById('cover-image-9');
            coverImage.value = `${searchResult.album.cover_small}`;
            let coverPhoto = coverImage.value;
            coverImage.src = coverPhoto;

            let songName = document.getElementById('lyrics-name-9');
            songName.innerText = `${searchResult.title}`;
            let nameSong = songName.innerText;
            
            let albumName = document.getElementById('album-name-9');
            albumName.innerText = `${searchResult.album.title}`;
    
            let singerName = document.getElementById('singer-name-9');
            singerName.innerText = `${searchResult.artist.name}`;
            let nameSinger = singerName.innerText;

            let audioSong = document.getElementById('track-9');
            audioSong.value = `${searchResult.preview}`;
            let audioSource = audioSong.value;
            audioSong.src = audioSource;

            let clickButton = document.getElementById('click-button-9');
            clickButton.addEventListener('click', (event) => {
                let buttonClick = clickButton.innerText; 
                buttonClick = `${nameSong}/${nameSinger}`;
                console.log(buttonClick);
                songLyrics9(buttonClick);

            })
            
        }
                
    }
         
}

// fetch for finding song's lyrics

function songLyrics0(titleArtist){
    fetch(`${lyricsApi.subUrl}/${titleArtist}`)
    .then(lyrics => lyrics.json())
    .then(songLyricsProperty0);

}

function songLyrics1(titleArtist){
    fetch(`${lyricsApi.subUrl}/${titleArtist}`)
    .then(lyrics => lyrics.json())
    .then(songLyricsProperty1);

}

function songLyrics2(titleArtist){
    fetch(`${lyricsApi.subUrl}/${titleArtist}`)
    .then(lyrics => lyrics.json())
    .then(songLyricsProperty2);

}

function songLyrics3(titleArtist){
    fetch(`${lyricsApi.subUrl}/${titleArtist}`)
    .then(lyrics => lyrics.json())
    .then(songLyricsProperty3);

}

function songLyrics4(titleArtist){
    fetch(`${lyricsApi.subUrl}/${titleArtist}`)
    .then(lyrics => lyrics.json())
    .then(songLyricsProperty4);

}

function songLyrics5(titleArtist){
    fetch(`${lyricsApi.subUrl}/${titleArtist}`)
    .then(lyrics => lyrics.json())
    .then(songLyricsProperty5);

}

function songLyrics6(titleArtist){
    fetch(`${lyricsApi.subUrl}/${titleArtist}`)
    .then(lyrics => lyrics.json())
    .then(songLyricsProperty6);

}

function songLyrics7(titleArtist){
    fetch(`${lyricsApi.subUrl}/${titleArtist}`)
    .then(lyrics => lyrics.json())
    .then(songLyricsProperty7);

}

function songLyrics8(titleArtist){
    fetch(`${lyricsApi.subUrl}/${titleArtist}`)
    .then(lyrics => lyrics.json())
    .then(songLyricsProperty8);

}

function songLyrics9(titleArtist){
    fetch(`${lyricsApi.subUrl}/${titleArtist}`)
    .then(lyrics => lyrics.json())
    .then(songLyricsProperty9);

}

// Function calling for lyrics

function songLyricsProperty0(lyricsSong){

    console.log(lyricsSong);

    let songLyrics0 =  document.getElementById('song-lyrics-0');
    songLyrics0.innerText = `${lyricsSong.lyrics}`;

}

function songLyricsProperty1(lyricsSong){

    console.log(lyricsSong);

    let songLyrics1 =  document.getElementById('song-lyrics-1');
    songLyrics1.innerText = `${lyricsSong.lyrics}`;
}

function songLyricsProperty2(lyricsSong){

    console.log(lyricsSong);

    let songLyrics2 =  document.getElementById('song-lyrics-2');
    songLyrics2.innerText = `${lyricsSong.lyrics}`;
}

function songLyricsProperty3(lyricsSong){

    console.log(lyricsSong);

    let songLyrics3 =  document.getElementById('song-lyrics-3');
    songLyrics3.innerText = `${lyricsSong.lyrics}`;
}

function songLyricsProperty4(lyricsSong){

    console.log(lyricsSong);

    let songLyrics4 =  document.getElementById('song-lyrics-4');
    songLyrics4.innerText = `${lyricsSong.lyrics}`;

}

function songLyricsProperty5(lyricsSong){

    console.log(lyricsSong);

    let songLyrics5 =  document.getElementById('song-lyrics-5');
    songLyrics5.innerText = `${lyricsSong.lyrics}`;
}

function songLyricsProperty6(lyricsSong){

    console.log(lyricsSong);

    let songLyrics6 =  document.getElementById('song-lyrics-6');
    songLyrics6.innerText = `${lyricsSong.lyrics}`;
}

function songLyricsProperty7(lyricsSong){

    console.log(lyricsSong);

    let songLyrics7 =  document.getElementById('song-lyrics-7');
    songLyrics7.innerText = `${lyricsSong.lyrics}`;
}

function songLyricsProperty8(lyricsSong){

    console.log(lyricsSong);

    let songLyrics8 =  document.getElementById('song-lyrics-8');
    songLyrics8.innerText = `${lyricsSong.lyrics}`;
}

function songLyricsProperty9(lyricsSong){

    console.log(lyricsSong);

    let songLyrics9 =  document.getElementById('song-lyrics-9');
    songLyrics9.innerText = `${lyricsSong.lyrics}`;
}