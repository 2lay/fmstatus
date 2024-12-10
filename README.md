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

### Live Demo
You can view the latest song being played at:
- [API Endpoint](https://fm.2lay.net/api/nowplaying)
- [Swagger UI](https://fm.2lay.net/swagger)

### License
This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.
