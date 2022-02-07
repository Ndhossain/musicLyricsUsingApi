const getSearchapi = () => {
    let inputValue = document.getElementById('searchValue').value;
    fetch(`https://api.lyrics.ovh/suggest/${inputValue}`)
        .then(res => res.json())
        .then(data => {
            const song = data.data;
            displayData(song);
        })
}

const displayData = (songs) => {
    const results = document.getElementById('searchResult')
    results.innerHTML = '';
    songs.forEach(datas => {
        results.innerHTML += `<div class="single-result row align-items-center my-3 p-3">
        <div class="col-md-9">
            <h3 class="lyrics-name">${datas.title}</h3>
            <p class="author lead">Album by <span>${datas.artist.name}</span></p>
            <audio controls>
                <source src="${datas.preview}" type="audio/mpeg">
            </audio>
        </div>
        <div class="col-md-3 text-md-right text-center">
            <button onclick="getLyrics('${datas.artist.name}', '${datas.title}')" class="btn btn-success">Get Lyrics</button>
        </div>
    </div>`
    });
    document.getElementById('searchValue').value = '';
}

function getLyrics(artist, title) {
    fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById('lyric').innerText = data.lyrics
        })
}

const menuopenBar = () => {
    document.getElementById('collapsibleNavId').style.display = 'block'
    document.getElementById('open').style.display = 'none'
    document.getElementById('close').style.display = 'block'
}

const menucloseBar = () => {
    document.getElementById('collapsibleNavId').style.display = 'none'
    document.getElementById('open').style.display = 'block'
    document.getElementById('close').style.display = 'none'
}