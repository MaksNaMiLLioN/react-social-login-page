const cookieSession = require("cookie-session");
const express = require("express");
const passport = require("passport");
const cors = require("cors");
const authRoute = require("./routes/auth");
const passportSetup = require("./passport");

const app = express();

app.use(
  cookieSession({
    name: "session",
    keys: ["DEV"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoute);

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.listen(5000, () => {
  console.log("Server is running on PORT 5000");
});
