
const loadArtist = async (search) => {
    const res = await fetch(`https://www.theaudiodb.com/api/v1/json/2/search.php?s=${search}`);
    const data = await res.json();
    //console.log(data.artists[0]);
    return data.artists[0]
}

const inputElem = document.getElementById('artist-input');
inputElem.addEventListener('keypress', async (event) => {
    const key = event.key
    const artistData = await loadArtist();
    //const artist = data.artists[0]
    //console.log(artist);

    if (key === 'Enter') {
        const inputValue = inputElem.value;
        loadArtist(inputValue);
    }
})

/* const displayArtist = async () => {
    //
    const inputElem = document.getElementById('artist-input');
    const inputValue = inputElem.value;

} */

/* displayArtist(); */

loadArtist('adele')

