const app = require("./app");
const { PORT } = require("./src/config/config");

app.listen(PORT, function () {
  console.log(`App Run @${PORT}`);
});
