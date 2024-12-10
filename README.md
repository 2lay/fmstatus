## FMStatus
A lightweight Last.fm status API built with Elysia that fetches your recently played tracks.
### Features
* Real-time Last.fm track fetching
* Built purely with Elysia - zero external dependencies
* In-memory caching system *(30-second default)*
* Simple REST API endpoints
* Type-safe responses
* Built with Bun

## Download
To download a release, head over to the [Releases tab](https://github.com/2lay/FMStatus/releases) and download the latest release.

### Installation & Running
#### Binary (Recommended)
1. After downloading the binary executable, make it executable:
   ```bash
   chmod +x ./server
   ```
2. Run the server:
   ```bash
   ./server
   ```

#### JavaScript
1. Run the server:
   ```bash
   ./server.js
   ```
   
## Building
### Getting Started
```bash
# Clone the repository
git clone https://github.com/2lay/FMStatus.git

# Install dependencies
bun install

# Set up environment variables
cp .env.example .env
```

Configure your .env file with your Last.fm API credentials. Replace the empty quotes with your actual API key and username:
```env
LASTFM_API_KEY=""
LASTFM_USERNAME=""
CACHE_DURATION=30000
USE_SWAGGER=false
```
### Building
Elysia provides the option to build your application into either a binary executable or a minified JavaScript file. It is recommended to use the binary build for optimal performance and ease of deployment.

#### Binary Build
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
The JavaScript file will be created at `./dist/index.js`

### Running Production Build

After building, you can run the application using either method:

```bash
# Run the binary
./dist/server

# OR run the JavaScript build
bun ./dist/index.js
```

Note that some Linux distros might not like it, so you may need to run:
```bash
chmod +x ./server
```

### Live Demo
You can view the latest song being played at:
- [API Endpoint](https://fm.2lay.net/api/nowplaying)
- [Swagger UI (if enabled)](https://fm.2lay.net/swagger)

### License
This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.
