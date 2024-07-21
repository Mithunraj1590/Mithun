const express = require("express");
const app = express();

app.get("/api/general/:slug", (req, res) => {
  let dbJson = require("./src/api/staticData/db.json");
  const params = req.params;

  let slug = params?.slug;

  if (!slug) {
    return res.sendStatus(404);
  }
  if (dbJson.hasOwnProperty(slug)) {
    return res.send(dbJson[slug]);
  } else {
    return res.sendStatus(404);
  }
});

app.listen(8080, () => {
  console.log(`Example app listening on port 8080`);
});
