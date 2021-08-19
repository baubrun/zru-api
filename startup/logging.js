import winston from "winston";

const options = {
  file: {
    level: "info",
    filename: "logfile.log",
    handleExceptions: true,
    maxsize: 5242880, // 5MB
    colorize: true,
    json: true,
  },
};

const logger = new winston.createLogger({
  transports: [new winston.transports.File(options.file)],
});

logger.stream = {
  write: function (message, encoding) {
    logger.info(message);
  },
};

export default logger;
