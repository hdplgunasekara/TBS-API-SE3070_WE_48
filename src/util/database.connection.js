import Mongoose from "mongoose";
import logger from "./logger";
import configs from "../config";

let database;

const connect = async () => {
	const databaseConnectionString = process.env.MONGODB_URL;

	if (database) {
		return;
	}

	Mongoose.connect(databaseConnectionString)
		.then((connection) => {
			database = connection.connection;
			logger.info("✅ Database Synced");
		})
		.catch((error) => {
			logger.error("Error connecting to database: ", error.message);
		});
};

export default connect;
