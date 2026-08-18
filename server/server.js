const app = require("./src/app");
const connectDB = require("./src/config/db");
const { port } = require("./src/config/env");

const startServer = async () => {
  await connectDB();

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
};

startServer();
