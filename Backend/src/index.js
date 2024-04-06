const app = require("./app");
const connectDb = require("./db/indexDb");

const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World");
});

connectDb().then(() => {
  app.on("error", (err) => {
    console.log("Err:", err);
    throw err;
  });
  app.listen(port || 8000, () => {
    console.log(`Server is running on port localhost:${port || 8000}`);
  });
});
