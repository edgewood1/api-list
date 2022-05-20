# api-list

This app uses json-server to host `server/data.json` file.  It calls the server to display initial data, and allows for the following functionality: 

- search based on name
- search based on tags (this will search within the range specified by name search)
- add tags
- expand the card in order to see additional information


# To run: 

- `npm run install` - this loads up dependencies
- `npm run serve` - this starts the json-server on port 8000
- `npm run dev` - this runs the app in port 1234. If this port is busy, it will select another port.
- `npm run build` - this will build the app for deployment

