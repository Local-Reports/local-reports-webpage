/** @format */


/**
 * Simplified client for backend
 *
 * @class BackendClient
 */
export class BackendClient {
	/**
	 * @param {import('mongodb').MongoClient} client
	 */
	constructor(client) {
		/**
		 * @type {import('mongodb').MongoClient}
		 */
		this.client = client;

		/**
		 * @type {string | null}
		 */
		this._db = null;

		/**
		 * @type {import('mongodb').Db}
		 */
		this.currentDb = this.client.db();
	}

	async connect() {
		await this.client.connect();
	}

	/**
	 * @param {string | null} value
	 * @returns {void}
	 */
	set db(value) {
		this._db = value;

		if (value == null) this.currentDb = this.client.db();
		else this.currentDb = this.client.db(value);
	}

	/**
	 * @param {string | null} value
	 * @returns {string | null}
	 */
	setDb(value) {
		const oldValue = this._db;
		this.db = value;
		return oldValue;
	}

	/**
	 * @param {string} collectionName
	 */
	getCollection(collectionName) {
		const db = this.currentDb;
		return db.collection(collectionName);
	}

	getReportsCol() {
		return this.currentDb.collection("reports");
	}

	getUsersCol() {
		return this.currentDb.collection("users");
	}

	/**
	 * @param {import('./crudUtils.js').ReportPrompt} param
	 */
	async insertReport(param) {
		await this.getReportsCol().insertOne(param);
	}

	/**
	 * @param {import('./crudUtils.js').CivilianUserPrompt} param
	 */
	async insertCivilUser(param) {
		await this.getUsersCol().insertOne(param);
	}

	/**
	 * @param {import('./crudUtils.js').LegalAuthorityUserPrompt} param
	 */
	async insertPoliceUser(param) {
		await this.getUsersCol().insertOne(param);
	}
}
