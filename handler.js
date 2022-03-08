"use strict";

const getUnixTime = require("date-fns/getUnixTime");

module.exports.hello = async (event) => {
	return {
		statusCode: 200,
		body: JSON.stringify(
			{
				message: "From Serverless CI/CD",
				input: event,
				timestamp: getUnixTime(new Date()),
			},
			null,
			2
		),
	};
};
