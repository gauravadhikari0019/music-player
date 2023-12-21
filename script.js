// Sample songs array
const songs = [
    { id: 1, name: 'Song 1', artist: 'Artist 1', img: 'song1.jpg', genre: 'pop', source: 'song1.mp3' },
    { id: 2, name: 'Song 2', artist: 'Artist 2', img: 'song2.jpg', genre: 'rock', source: 'song2.mp3' },
    // Add more songs as needed
];

let currentSongIndex = 0;
let currentPlaylist = [];
let currentTheme = 'light'; // Default theme

document.addEventListener('DOMContentLoaded', () => {
    showSongs();
    renderCurrentSong();
    renderPlaylist();
});

// ...

function toggleTheme() {
    const themeSelect = document.getElementById('themeToggle');
    currentTheme = themeSelect.value;
    document.documentElement.setAttribute('data-theme', currentTheme);
}

// ...


function showSongs() {
    const genreFilter = document.getElementById('genreFilter');
    const selectedGenre = genreFilter.value;
    const songList = document.getElementById('songList');

    // Filter songs based on genre
    const filteredSongs = selectedGenre === 'all' ? songs : songs.filter(song => song.genre === selectedGenre);

    // Display the filtered songs in the list
    songList.innerHTML = '';
    filteredSongs.forEach(song => {
        const listItem = document.createElement('li');
        listItem.textContent = `${song.name} - ${song.artist}`;
        listItem.addEventListener('click', () => playSong(filteredSongs.indexOf(song)));
        songList.appendChild(listItem);
    });
}

function playSong(index) {
    currentSongIndex = index;
    renderCurrentSong();
}

function renderCurrentSong() {
    const songCard = document.getElementById('songCard');
    const currentSong = songs[currentSongIndex];
    songCard.innerHTML = `<img src="${currentSong.img}" alt="${currentSong.name}"><h3>${currentSong.name}</h3><p>${currentSong.artist}</p>`;
}

function playNext() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    renderCurrentSong();
}

function playPrevious() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    renderCurrentSong();
}

function addToPlaylist() {
    const selectedSong = songs[currentSongIndex];
    currentPlaylist.push(selectedSong);
    renderPlaylist();
}

function createPlaylist() {
    const playlistName = prompt('Enter playlist name:');
    if (playlistName) {
        const newPlaylist = { name: playlistName, songs: [] };
        currentPlaylist.push(newPlaylist);
        renderPlaylist();
    }
}

function renderPlaylist() {
    const playlistList = document.getElementById('playlistList');
    playlistList.innerHTML = '';
    currentPlaylist.forEach(playlist => {
        const listItem = document.createElement('li');
        listItem.textContent = playlist.name;
        listItem.addEventListener('click', () => renderPlaylistSongs(playlist));
        playlistList.appendChild(listItem);
    });
}

function renderPlaylistSongs(playlist) {
    // Display songs of the selected playlist
    // You may want to create a separate section for playlist songs
}
