// Clicking search button and taking search item

document.getElementById("search-button").addEventListener("click", (event) => {
    let searchInput = document.getElementById("search-input");
    console.log(searchInput.value);
    lyricsReport(searchInput.value);
})

// Api linking

const lyricsApi = {
    baseUrl : "https://api.lyrics.ovh/suggest",
    subUrl : "https://api.lyrics.ovh/v1/artist/title",   
}

// fetch for finding lyrics report

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
    
            let albumName = document.getElementById('album-name-0');
            albumName.innerText = `${searchResult.album.title}`;
            console.log(albumName.innerText);
    
            let singerName = document.getElementById('singer-name-0');
            singerName.innerText = `${searchResult.artist.name}`;
            console.log(singerName.innerText);

            let audioSong = document.getElementById('track-0');
            audioSong.value = `${searchResult.preview}`;
            let audioSource = audioSong.value;
            audioSong.src = audioSource;
        }
        else if(i == 1){

            let coverImage = document.getElementById('cover-image-1');
            coverImage.value = `${searchResult.album.cover_small}`;
            let coverPhoto = coverImage.value;
            coverImage.src = coverPhoto;

            let songName = document.getElementById('lyrics-name-1');
            songName.innerText = `${searchResult.title}`;
            
            let albumName = document.getElementById('album-name-1');
            albumName.innerText = `${searchResult.album.title}`;
    
            let singerName = document.getElementById('singer-name-1');
            singerName.innerText = `${searchResult.artist.name}`;

            let audioSong = document.getElementById('track-1');
            audioSong.value = `${searchResult.preview}`;
            let audioSource = audioSong.value;
            audioSong.src = audioSource;
            
        }
        else if(i == 2){

            let coverImage = document.getElementById('cover-image-2');
            coverImage.value = `${searchResult.album.cover_small}`;
            let coverPhoto = coverImage.value;
            coverImage.src = coverPhoto;

            let songName = document.getElementById('lyrics-name-2');
            songName.innerText = `${searchResult.title}`;
            
            let albumName = document.getElementById('album-name-2');
            albumName.innerText = `${searchResult.album.title}`;
    
            let singerName = document.getElementById('singer-name-2');
            singerName.innerText = `${searchResult.artist.name}`;

            let audioSong = document.getElementById('track-2');
            audioSong.value = `${searchResult.preview}`;
            let audioSource = audioSong.value;
            audioSong.src = audioSource;
            
        }
        else if(i == 3){

            let coverImage = document.getElementById('cover-image-3');
            coverImage.value = `${searchResult.album.cover_small}`;
            let coverPhoto = coverImage.value;
            coverImage.src = coverPhoto;

            let songName = document.getElementById('lyrics-name-3');
            songName.innerText = `${searchResult.title}`;
            
            let albumName = document.getElementById('album-name-3');
            albumName.innerText = `${searchResult.album.title}`;
    
            let singerName = document.getElementById('singer-name-3');
            singerName.innerText = `${searchResult.artist.name}`;

            let audioSong = document.getElementById('track-3');
            audioSong.value = `${searchResult.preview}`;
            let audioSource = audioSong.value;
            audioSong.src = audioSource;
            
        }
        else if(i == 4){

            let coverImage = document.getElementById('cover-image-4');
            coverImage.value = `${searchResult.album.cover_small}`;
            let coverPhoto = coverImage.value;
            coverImage.src = coverPhoto;

            let songName = document.getElementById('lyrics-name-4');
            songName.innerText = `${searchResult.title}`;
            
            let albumName = document.getElementById('album-name-4');
            albumName.innerText = `${searchResult.album.title}`;
    
            let singerName = document.getElementById('singer-name-4');
            singerName.innerText = `${searchResult.artist.name}`;

            let audioSong = document.getElementById('track-4');
            audioSong.value = `${searchResult.preview}`;
            let audioSource = audioSong.value;
            audioSong.src = audioSource;
            
        }
        else if(i == 5){

            let coverImage = document.getElementById('cover-image-5');
            coverImage.value = `${searchResult.album.cover_small}`;
            let coverPhoto = coverImage.value;
            coverImage.src = coverPhoto;

            let songName = document.getElementById('lyrics-name-5');
            songName.innerText = `${searchResult.title}`;
            
            let albumName = document.getElementById('album-name-5');
            albumName.innerText = `${searchResult.album.title}`;
    
            let singerName = document.getElementById('singer-name-5');
            singerName.innerText = `${searchResult.artist.name}`;

            let audioSong = document.getElementById('track-5');
            audioSong.value = `${searchResult.preview}`;
            let audioSource = audioSong.value;
            audioSong.src = audioSource;
            
        }
        else if(i == 6){

            let coverImage = document.getElementById('cover-image-6');
            coverImage.value = `${searchResult.album.cover_small}`;
            let coverPhoto = coverImage.value;
            coverImage.src = coverPhoto;


            let songName = document.getElementById('lyrics-name-6');
            songName.innerText = `${searchResult.title}`;
            
            let albumName = document.getElementById('album-name-6');
            albumName.innerText = `${searchResult.album.title}`;
    
            let singerName = document.getElementById('singer-name-6');
            singerName.innerText = `${searchResult.artist.name}`;

            let audioSong = document.getElementById('track-6');
            audioSong.value = `${searchResult.preview}`;
            let audioSource = audioSong.value;
            audioSong.src = audioSource;
            
        }
        else if(i == 7){


            let coverImage = document.getElementById('cover-image-7');
            coverImage.value = `${searchResult.album.cover_small}`;
            let coverPhoto = coverImage.value;
            coverImage.src = coverPhoto;

            let songName = document.getElementById('lyrics-name-7');
            songName.innerText = `${searchResult.title}`;
            
            let albumName = document.getElementById('album-name-7');
            albumName.innerText = `${searchResult.album.title}`;
    
            let singerName = document.getElementById('singer-name-7');
            singerName.innerText = `${searchResult.artist.name}`;

            let audioSong = document.getElementById('track-7');
            audioSong.value = `${searchResult.preview}`;
            let audioSource = audioSong.value;
            audioSong.src = audioSource;
            
        }
        else if(i == 8){

            let coverImage = document.getElementById('cover-image-8');
            coverImage.value = `${searchResult.album.cover_small}`;
            let coverPhoto = coverImage.value;
            coverImage.src = coverPhoto;

            let songName = document.getElementById('lyrics-name-8');
            songName.innerText = `${searchResult.title}`;
            
            let albumName = document.getElementById('album-name-8');
            albumName.innerText = `${searchResult.album.title}`;
    
            let singerName = document.getElementById('singer-name-8');
            singerName.innerText = `${searchResult.artist.name}`;

            let audioSong = document.getElementById('track-8');
            audioSong.value = `${searchResult.preview}`;
            let audioSource = audioSong.value;
            audioSong.src = audioSource;
            
        }
        else if(i == 9){

            let coverImage = document.getElementById('cover-image-9');
            coverImage.value = `${searchResult.album.cover_small}`;
            let coverPhoto = coverImage.value;
            coverImage.src = coverPhoto;

            let songName = document.getElementById('lyrics-name-9');
            songName.innerText = `${searchResult.title}`;
            
            let albumName = document.getElementById('album-name-9');
            albumName.innerText = `${searchResult.album.title}`;
    
            let singerName = document.getElementById('singer-name-9');
            singerName.innerText = `${searchResult.artist.name}`;

            let audioSong = document.getElementById('track-9');
            audioSong.value = `${searchResult.preview}`;
            let audioSource = audioSong.value;
            audioSong.src = audioSource;
            
        }
                
    }
         
}

function songProperty(){

    
    
}
