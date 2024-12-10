import { Elysia } from 'elysia'

let cachedSong: { artist: any; name: any; album: any; url: any; image: any; date: number; error?: undefined; } | { error: string; artist?: undefined; name?: undefined; album?: undefined; url?: undefined; image?: undefined; date?: undefined; } | null = null;
let lastFetchTime = 0;

export const NowPlaying = new Elysia()
    .get('/api/nowplaying', async () => {
        const currentTime = Date.now();
        if (cachedSong && (currentTime - lastFetchTime < Number(process.env.CACHE_DURATION))) {
            console.log("cache")
            return cachedSong;
        }
        
        const latestSong = await getLatestSong();
        cachedSong = latestSong;
        lastFetchTime = currentTime;
        console.log("fetch")
        return latestSong;
    });

async function getLatestSong() {
    const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${process.env.LASTFM_USERNAME}&api_key=${process.env.LASTFM_API_KEY}&limit=1&format=json`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        const track = json.recenttracks.track[0];
        return {
            artist: track.artist['#text'],
            name: track.name,
            album: track.album['#text'],
            url: track.url,
            image: track.image.find((img: { size: string; }) => img.size === 'large')['#text'],
            date: Math.floor(new Date(track.date['#text']).getTime() / 1000)
        };
    } catch (error) {
        console.error(error);
        return { error: 'Failed to fetch the latest song' };
    }
}
