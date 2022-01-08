const http = require ("http");
const httpserver = http.createServer();

const getCount = () => {
    httpserver.getConnections((err_, connectionsCount) => {
        console.log(`Number of Connections = ${connectionsCount}`);
    })

    setTimeout(getCount, 1000);
}

getCount();

httpserver.on("request", (req, res) => {
    console.log(req);
    res.write("got your request");
    res.end();
});

httpserver.on("connection", connection => {
    console.log("Someone just connected");
});

httpserver.listen(8080, () => console.log("Listening on port 8080"));

