"use strict";

const btc = require("./coins/btc.js");
const vto = require("./coins/vto.js");

module.exports = {
	BTC: btc,
	VTO: vto,

	coins: ["BTC", "VTO"],
};
