import winston from "./logging.js";
import keys from "../config/keys.js";
import config from "../config/index.js";

export const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: config.dbName,
};

/**
 * Db connector and options
 * @param {import("express")} app
 * @param {any} connector DB connector
 * @param {any} options connector options
 *
 */
export default (app, connector, dbOptions) => {
  connector
    .connect(keys.dbUri, dbOptions)
    .then(
      app.listen(config.port, () => {
        winston.info("Connected to DB!");
        winston.info(`Server running on port: ${config.port}`);
      })
    )
    .catch((err) => winston.error(err));
};
