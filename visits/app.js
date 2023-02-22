const express =  require("express");
const redis =  require("redis");

const app = express();
const client = redis.createClient({
    url: "redis://redis-server:6379",
});

client.connect().then(() => {
    console.log("redis connected successfully");
    client.set("visits", 0);
}).catch((error) => {
    console.error("Error while connecting to redis server :: " + error);
});

app.get("/", async (req, res) => {
    const visits = await client.get("visits");
    await client.set("visits", parseInt(visits) + 1)
    res.send("Number of visits is :: " + visits);
});

app.listen(8085, () => {
    console.log("Application started on port 8085");
});