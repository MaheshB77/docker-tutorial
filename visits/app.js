const express =  require("express");
const redis =  require("redis");

const app = express();
const client = redis.createClient();
(async () => {
    await client.connect().then(() => {
        client.set("visits", 0);
    }).catch((error) => {
        console.error("Error while connecting to redis server :: " + error);
    })
})();

app.get("/", (req, res) => {
    client.get("visits", (err, visits) => {
        res.send("Number of visits is :: " + visits);
        client.set("visits", parseInt(visits) + 1);
    })
});

app.listen(8081, () => {
    console.log("Application started on port 8081");
});