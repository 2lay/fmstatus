## FMStatus
A lightweight Last.fm status API built with Elysia that fetches your recently played tracks.
### Features
* Real-time Last.fm track fetching
* Built purely with Elysia - zero external dependencies
* In-memory caching system *(30-second default)*
* Simple REST API endpoints
* Type-safe responses
* Built with Bun

### Building
Elysia provides the option to build your application into either a binary executable or a minified JavaScript file. It is recommended to use the binary build for optimal performance and ease of deployment.

#### Binary Build *(recomended)*
Creates a compiled binary executable:
```bash
bun run build
```
The binary will be created at `./dist/server`

#### JavaScript Build
Creates a minified JavaScript file:
```bash
bun run build@javascript
```
The JavaScript file will be created at `./dist/server.js`

### Running Production Build

After building, you can run the application using either method:

```bash
# Run the binary
./dist/server

# OR run the JavaScript build
bun ./dist/server.js
```

Note that some Linux distros might not like it, so you may need to run:
```bash
chmod +x ./server
```

### Endpoints
```
GET /api/nowplaying
```

Returns the currently playing track (if any) on your Last.fm account.

**Response**
```json
{
  "artist": "Yung Lean",
  "name": "Sold Out",
  "album": "Psykos",
  "url": "https://www.last.fm/music/Yung+Lean/_/Sold+Out",
  "image": "https://lastfm.freetls.fastly.net/i/u/174s/077f29a6b886ca5458fdf54082098897.jpg",
  "date": 1735400506,
  "isPlaying": true
}
```

If no track is currently playing:
```json
{
  "artist": "glaive",
  "name": "for god and country",
  "album": "may it never falter",
  "url": "https://www.last.fm/music/glaive/_/for+god+and+country",
  "image": "https://lastfm.freetls.fastly.net/i/u/174s/993389e83d5543c63a0fe41d9c75c00d.png",
  "date": 1735396740,
  "isPlaying": false
}
```
### License
This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.
