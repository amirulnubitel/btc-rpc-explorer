"use strict";

const Decimal = require("decimal.js");
const Decimal8 = Decimal.clone({ precision: 8, rounding: 8 });

const blockRewardEras = [new Decimal8(50)];
for (let i = 1; i < 34; i++) {
	let previous = blockRewardEras[i - 1];
	blockRewardEras.push(new Decimal8(previous).dividedBy(2));
}

const currencyUnits = [
	{
		type: "native",
		name: "VTO",
		multiplier: 1,
		default: true,
		values: ["", "vto", "VTO"],
		decimalPlaces: 8,
	},
	{
		type: "native",
		name: "mVTO",
		multiplier: 1000,
		values: ["mvto"],
		decimalPlaces: 5,
	},
	{
		type: "native",
		name: "bits",
		multiplier: 1000000,
		values: ["bits"],
		decimalPlaces: 2,
	},
	{
		type: "native",
		name: "sat",
		multiplier: 100000000,
		values: ["sat", "satoshi"],
		decimalPlaces: 0,
	},
	{
		type: "exchanged",
		name: "USD",
		multiplier: "usd",
		values: ["usd"],
		decimalPlaces: 2,
		symbol: "$",
	},
	{
		type: "exchanged",
		name: "EUR",
		multiplier: "eur",
		values: ["eur"],
		decimalPlaces: 2,
		symbol: "€",
	},
];

module.exports = {
	name: "Vertocoin",
	ticker: "VTO",
	logoUrlsByNetwork: {
		main: "./img/network-mainnet/vto-logo.svg",
		test: "./img/network-testnet/vto-logo.svg",
		regtest: "./img/network-regtest/vto-logo.svg",
		signet: "./img/network-signet/vto-logo.svg",
	},
	coinIconUrlsByNetwork: {
		main: "./img/network-mainnet/vto-coin-icon.svg",
		test: "./img/network-testnet/vto-coin-icon.svg",
		signet: "./img/network-signet/vto-coin-icon.svg",
		regtest: "./img/network-regtest/vto-coin-icon.svg",
	},
	coinColorsByNetwork: {
		main: "#00D4AA",
		test: "#1daf00",
		signet: "#af008c",
		regtest: "#777",
	},
	siteTitlesByNetwork: {
		main: "Vertocoin Explorer",
		test: "Vertocoin Testnet Explorer",
		regtest: "Vertocoin Regtest Explorer",
		signet: "Vertocoin Signet Explorer",
	},
	demoSiteUrlsByNetwork: {
		main: "https://explorer.vertocoin.com",
		test: "https://testnet.explorer.vertocoin.com",
		signet: "https://signet.explorer.vertocoin.com",
	},
	knownTransactionsByNetwork: {
		main: "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
		test: "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
		signet: "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
	},
	miningPoolsConfigUrls: [
		// Add Vertocoin mining pools configuration URLs here when available
	],
	maxBlockWeight: 4000000,
	maxBlockSize: 4000000,
	minTxBytes: 60,
	minTxWeight: 240,
	difficultyAdjustmentBlockCount: 1440,
	maxSupplyByNetwork: {
		main: new Decimal(50000000000),
		test: new Decimal(50000000000),
		regtest: new Decimal(50000000000),
		signet: new Decimal(50000000000),
	},
	targetBlockTimeSeconds: 150, // 2.5 minutes (typical for Scrypt-based coins)
	targetBlockTimeMinutes: 2.5,
	currencyUnits: currencyUnits,
	currencyUnitsByName: {
		VTO: currencyUnits[0],
		vto: currencyUnits[0],
		mVTO: currencyUnits[1],
		mvto: currencyUnits[1],
		bits: currencyUnits[2],
		sat: currencyUnits[3],
		satoshi: currencyUnits[3],
	},
	baseCurrencyUnit: currencyUnits[3],
	defaultCurrencyUnit: currencyUnits[0],
	feeSatoshiPerByteBucketMaxima: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 50, 75, 100, 150],

	// Address patterns for VTO (Vertocoin)
	addressPatterns: {
		main: /^[V].*$/, // VTO mainnet addresses start with V
		test: /^[m].*$/, // VTO testnet addresses start with m
		regtest: /^[m].*$/, // VTO regtest addresses start with m
		signet: /^[m].*$/, // VTO signet addresses start with m
	},

	halvingBlockIntervalsByNetwork: {
		main: 840000, // Typical for Litecoin-based coins (4x Bitcoin's interval)
		test: 840000,
		regtest: 150,
		signet: 840000,
	},

	terminalHalvingCountByNetwork: {
		main: 32,
		test: 32,
		regtest: 32,
		signet: 32,
	},

	coinSupplyCheckpointsByNetwork: {
		main: [0, new Decimal(0)],
		test: [0, new Decimal(0)],
		signet: [0, new Decimal(0)],
		regtest: [0, new Decimal(0)],
	},

	utxoSetCheckpointsByNetwork: {
		main: {
			height: 11,
			bestblock: "385705b8fd9f4a96b6bf85c7fd5fa30bc39f1a30db3fef44eb4baf1a28b83a75",
			txouts: 11,
			bogosize: 825,
			muhash: "7ce5e9903a57c4b15a5c0e0258da634277ca591dc95d5108b3961d20d369d6f4",
			total_amount: 11.0,
			total_unspendable_amount: 0, // Not available without coinstatsindex
			transactions: 11,
			disk_size: 0,
			hash_serialized_2: "6df8ffc7ccd33de45e5808d12f9006eaea656db2dca6135784153cbdf782e4d8",
			lastUpdated: "2025-07-04T19:08:46Z",
		},
	},

	genesisBlockHashesByNetwork: {
		main: "385705b8fd9f4a96b6bf85c7fd5fa30bc39f1a30db3fef44eb4baf1a28b83a75",
		test: "385705b8fd9f4a96b6bf85c7fd5fa30bc39f1a30db3fef44eb4baf1a28b83a75",
		regtest: "0f9188f13cb7b2c71f2a335e3a4fc328bf5beb436012afca590b1a11466e2206",
		signet: "385705b8fd9f4a96b6bf85c7fd5fa30bc39f1a30db3fef44eb4baf1a28b83a75",
	},
	genesisCoinbaseTransactionIdsByNetwork: {
		main: "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
		test: "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
		regtest: "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
		signet: "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
	},
	genesisCoinbaseTransactionsByNetwork: {
		main: {
			hex: "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff4d04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73ffffffff0100f2052a01000000434104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac00000000",
			txid: "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
			hash: "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
			size: 204,
			vsize: 204,
			version: 1,
			confirmations: 0,
			vin: [
				{
					coinbase: "04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73",
					sequence: 4294967295,
				},
			],
			vout: [
				{
					value: 50,
					n: 0,
					scriptPubKey: {
						asm: "04678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5f OP_CHECKSIG",
						hex: "4104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac",
						reqSigs: 1,
						type: "pubkey",
						addresses: ["VpxWVSkycU6FrqpHkfH1CgvudgNBiDXMU9"],
					},
				},
			],
			blockhash: "385705b8fd9f4a96b6bf85c7fd5fa30bc39f1a30db3fef44eb4baf1a28b83a75",
			time: 1609459200,
			blocktime: 1609459200,
		},
		test: {
			hex: "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff4d04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73ffffffff0100f2052a01000000434104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac00000000",
			txid: "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
			hash: "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
			version: 1,
			size: 204,
			vsize: 204,
			weight: 816,
			locktime: 0,
			vin: [
				{
					coinbase: "04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73",
					sequence: 4294967295,
				},
			],
			vout: [
				{
					value: 50.0,
					n: 0,
					scriptPubKey: {
						asm: "04678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5f OP_CHECKSIG",
						hex: "4104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac",
						reqSigs: 1,
						type: "pubkey",
						addresses: ["mpXwg4jMtRhuSpVq4xS3HFHmCmWp9NyGKt"],
					},
				},
			],
			blockhash: "0000000000000000000000000000000000000000000000000000000000000000",
			time: 1609459200,
			blocktime: 1609459200,
		},
		regtest: {
			hex: "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff4d04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73ffffffff0100f2052a01000000434104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac00000000",
			txid: "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
			hash: "4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",
			version: 1,
			size: 204,
			vsize: 204,
			weight: 816,
			locktime: 0,
			vin: [
				{
					coinbase: "04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73",
					sequence: 4294967295,
				},
			],
			vout: [
				{
					value: 50.0,
					n: 0,
					scriptPubKey: {
						asm: "04678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5f OP_CHECKSIG",
						hex: "4104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac",
						type: "pubkey",
					},
				},
			],
			blockhash: "0f9188f13cb7b2c71f2a335e3a4fc328bf5beb436012afca590b1a11466e2206",
			time: 1609459200,
			blocktime: 1609459200,
		},
		signet: {
			hex: "01000000010000000000000000000000000000000000000000000000000000000000000000ffffffff4d04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73ffffffff0100f2052a01000000434104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac00000000",
			txid: "0000000000000000000000000000000000000000000000000000000000000000",
			hash: "0000000000000000000000000000000000000000000000000000000000000000",
			version: 1,
			size: 204,
			vsize: 204,
			weight: 816,
			locktime: 0,
			vin: [
				{
					coinbase: "04ffff001d0104455468652054696d65732030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66207365636f6e64206261696c6f757420666f722062616e6b73",
					sequence: 4294967295,
				},
			],
			vout: [
				{
					value: 50.0,
					n: 0,
					scriptPubKey: {
						asm: "04678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5f OP_CHECKSIG",
						hex: "4104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5fac",
						type: "pubkey",
					},
				},
			],
			blockhash: "0000000000000000000000000000000000000000000000000000000000000000",
			time: 1609459200,
			blocktime: 1609459200,
		},
	},
	genesisBlockStatsByNetwork: {
		main: {
			avgfee: 0,
			avgfeerate: 0,
			avgtxsize: 0,
			blockhash: "385705b8fd9f4a96b6bf85c7fd5fa30bc39f1a30db3fef44eb4baf1a28b83a75",
			feerate_percentiles: [0, 0, 0, 0, 0],
			height: 0,
			ins: 0,
			maxfee: 0,
			maxfeerate: 0,
			maxtxsize: 0,
			medianfee: 0,
			mediantime: 1609459200,
			mediantxsize: 0,
			minfee: 0,
			minfeerate: 0,
			mintxsize: 0,
			outs: 1,
			subsidy: 5000000000,
			swtotal_size: 0,
			swtotal_weight: 0,
			swtxs: 0,
			time: 1609459200,
			total_out: 0,
			total_size: 0,
			total_weight: 0,
			totalfee: 0,
			txs: 1,
			utxo_increase: 1,
			utxo_size_inc: 117,
		},
		test: {
			avgfee: 0,
			avgfeerate: 0,
			avgtxsize: 0,
			blockhash: "385705b8fd9f4a96b6bf85c7fd5fa30bc39f1a30db3fef44eb4baf1a28b83a75",
			feerate_percentiles: [0, 0, 0, 0, 0],
			height: 0,
			ins: 0,
			maxfee: 0,
			maxfeerate: 0,
			maxtxsize: 0,
			medianfee: 0,
			mediantime: 1609459200,
			mediantxsize: 0,
			minfee: 0,
			minfeerate: 0,
			mintxsize: 0,
			outs: 1,
			subsidy: 5000000000,
			swtotal_size: 0,
			swtotal_weight: 0,
			swtxs: 0,
			time: 1609459200,
			total_out: 0,
			total_size: 0,
			total_weight: 0,
			totalfee: 0,
			txs: 1,
			utxo_increase: 1,
			utxo_size_inc: 117,
		},
		regtest: {
			avgfee: 0,
			avgfeerate: 0,
			avgtxsize: 0,
			blockhash: "0f9188f13cb7b2c71f2a335e3a4fc328bf5beb436012afca590b1a11466e2206",
			feerate_percentiles: [0, 0, 0, 0, 0],
			height: 0,
			ins: 0,
			maxfee: 0,
			maxfeerate: 0,
			maxtxsize: 0,
			medianfee: 0,
			mediantime: 1609459200,
			mediantxsize: 0,
			minfee: 0,
			minfeerate: 0,
			mintxsize: 0,
			outs: 1,
			subsidy: 5000000000,
			swtotal_size: 0,
			swtotal_weight: 0,
			swtxs: 0,
			time: 1609459200,
			total_out: 0,
			total_size: 0,
			total_weight: 0,
			totalfee: 0,
			txs: 1,
			utxo_increase: 1,
			utxo_size_inc: 117,
		},
		signet: {
			avgfee: 0,
			avgfeerate: 0,
			avgtxsize: 0,
			blockhash: "385705b8fd9f4a96b6bf85c7fd5fa30bc39f1a30db3fef44eb4baf1a28b83a75",
			feerate_percentiles: [0, 0, 0, 0, 0],
			height: 0,
			ins: 0,
			maxfee: 0,
			maxfeerate: 0,
			maxtxsize: 0,
			medianfee: 0,
			mediantime: 1609459200,
			mediantxsize: 0,
			minfee: 0,
			minfeerate: 0,
			mintxsize: 0,
			outs: 1,
			subsidy: 5000000000,
			swtotal_size: 0,
			swtotal_weight: 0,
			swtxs: 0,
			time: 1609459200,
			total_out: 0,
			total_size: 0,
			total_weight: 0,
			totalfee: 0,
			txs: 1,
			utxo_increase: 1,
			utxo_size_inc: 117,
		},
	},
	extraPagesByNetwork: {
		main: [
			// Vertocoin-specific pages can be added here
		],
		test: [
			// Testnet-specific pages
		],
		regtest: [
			// Regtest-specific pages
		],
		signet: [
			// Signet-specific pages
		],
	},

	exchangeRateData: {
		jsonUrl: "https://api.coingecko.com/api/v3/simple/price?ids=vertocoin&vs_currencies=usd,eur,gbp",
		responseBodySelectorFunction: function (responseBody) {
			if (responseBody.vertocoin) {
				var exchangeRates = {};

				if (responseBody.vertocoin.usd) {
					exchangeRates.usd = responseBody.vertocoin.usd;
				}
				if (responseBody.vertocoin.eur) {
					exchangeRates.eur = responseBody.vertocoin.eur;
				}
				if (responseBody.vertocoin.gbp) {
					exchangeRates.gbp = responseBody.vertocoin.gbp;
				}

				return exchangeRates;
			}

			return null;
		},
	},
	goldExchangeRateData: {
		jsonUrl: "https://forex-data-feed.swissquote.com/public-quotes/bboquotes/instrument/XAU/USD",
		responseBodySelectorFunction: function (responseBody) {
			if (responseBody[0].topo && responseBody[0].topo.platform == "MT5") {
				var prices = responseBody[0].spreadProfilePrices[0];

				return {
					usd: prices.ask,
				};
			}

			return null;
		},
	},
	blockRewardFunction: function (blockHeight, chain) {
		let halvingBlockInterval = chain == "regtest" ? 150 : 840000;
		let index = Math.floor(blockHeight / halvingBlockInterval);

		return blockRewardEras[index];
	},
};
