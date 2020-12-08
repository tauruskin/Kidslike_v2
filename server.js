const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require("./swagger.json");
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const { testsRouter } = require("./test/tests.router");

const IMAGES_PATH = path.join(__dirname, "public/images");

exports.CrudServer = class {
  constructor() {
    this.server = null;
  }

  async start() {
    this.initServer();
    await this.initDatabase();
    this.initMiddlewares();
    this.initRoutes();
    this.initErrorHandling();
    this.startListening();
  }

  initServer() {
    this.server = express();
    this.server.use("/images", express.static(IMAGES_PATH));
  }

  async initDatabase() {
    try {
      await mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      });
    } catch (err) {
      console.log(err);
      process.exit(1);
    }
  }

  initMiddlewares() {
    this.server.use(express.json());
    this.server.use(morgan("tiny"));
  }

  initRoutes() {
    this.server.use("/api/test", testsRouter);

    this.server.use(
      "/api-docs",
      swaggerUi.serve,
      swaggerUi.setup(swaggerDocument)
    );

    //put your route here
    // start

    // end
    //put your route here

    this.server.use("/api/*", (req, res) => {
      res.status(404).send("This api not found.");
    });

    if (process.env.LOCATION === "production") {
      this.server.use(
        "/",
        express.static(path.join(__dirname, "client", "build"))
      );

      this.server.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
      });
    }
  }

  initErrorHandling() {
    this.server.use((err, req, res, next) => {
      const statusCode = err.status || 500;
      return res.status(statusCode).send(err.message);
    });
  }

  startListening() {
    const { PORT } = process.env;
    this.server.listen(PORT, () => {
      console.log("Server started listening on port", PORT);
    });
  }
};
