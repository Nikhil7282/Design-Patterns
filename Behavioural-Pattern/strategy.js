const localAuth = (req, res) => {
  const { username, password } = req.body;
  if (username === "user" && password === "pass") {
    res.json({ message: "Authenticated using Local Strategy" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};

const oauthAuth = (req, res) => {
  const { token } = req.body;
  if (token === "oauth-token") {
    res.json({ message: "Authenticated using OAuth Strategy" });
  } else {
    res.status(401).json({ message: "Invalid OAuth token" });
  }
};

const apiTokenAuth = (req, res) => {
  const { apiToken } = req.body;
  if (apiToken === "api-token") {
    res.json({ message: "Authenticated using API Token Strategy" });
  } else {
    res.status(401).json({ message: "Invalid API token" });
  }
};

const authContext = (strategy, req, res) => {
  strategy(req, res);
};

app.post("/login/local", (req, res) => {
  authContext(localAuth, req, res);
});

app.post("/login/oauth", (req, res) => {
  authContext(oauthAuth, req, res);
});

app.post("/login/token", (req, res) => {
  authContext(apiTokenAuth, req, res);
});
