/** @format */

/**
 * @class
 */
export class LegalAuthorityUserPrompt {
	/**
	 * @param {String} firstName
	 * @param {String} lastName
	 * @param {String} badgeNumber
	 * @param {String} county
	 */
	constructor(firstName, lastName, badgeNumber, county) {
		/**
		 * @type {String} firstName
		 */
		this.firstName = firstName;

		/**
		 * @type {String} lastName
		 */
		this.lastName = lastName;

		/**
		 * @type {String} badgeNumber
		 */
		this.badgeNumber = badgeNumber;

		/**
		 * @type {String} county
		 */
		this.county = county;

        /**
         * @type {'POLICE'} type
         */
        this.type = 'POLICE';
	}
}

/**
 * @class
 */
export class CivilianUserPrompt {
	/**
	 * @param {String} firstName
	 * @param {String} lastName
	 * @param {String} email
	 * @param {String} phoneNumber
	 * @param {String} address
	 */
	constructor(firstName, lastName, email, phoneNumber, address) {
		/**
		 * @type {String} firstName
		 */
		this.firstName = firstName;

		/**
		 * @type {String} lastName
		 */
		this.lastName = lastName;

		/**
		 * @type {String} email
		 */
		this.email = email;

		/**
		 * @type {String} phoneNumber
		 */
		this.phoneNumber = phoneNumber;

		/**
		 * @type {String} address
		 */
		this.address = address;

        /**
         * @type {'CIVIL'} type
         */
        this.type = 'CIVIL';
	}
}


/**
 * @class
 */
export class ReportPrompt {
	/**
	 * @param {'CIVIL' | 'POLICE'} type
	 * @param {Number} radiusMiles
	 * @param {String} firstName
	 * @param {String} lastName
	 * @param {Number} age
	 * @param {Number} height
	 * @param {Number} weight
	 * @param {Date} date
	 * @param {String} description
	 */
	constructor(
		type,
		radiusMiles,
		firstName,
		lastName,
		age,
		height,
		weight,
		date,
		description
	) {

        /**
         * @type {'CIVIL' | 'POLICE'} type
         */

        this.type = type;

        /**
         * @type {Number} distanceMiles
         */

        this.radiusMiles = radiusMiles;

		/**
		 * @type {String} firstName
		 */
		this.firstName = firstName;

		/**
		 * @type {String} lastName
		 */
		this.lastName = lastName;

		/**
		 * @type {Number} age
		 */
		this.age = age;

		/**
		 * @type {Number} height
		 */

		this.height = height;

		/**
		 * @type {Number} weight
		 */
		this.weight = weight;

		/**
		 * @type {Date} date
		 */
		this.date = date;

		/**
		 * @type {String} description
		 */
		this.description = description;
	}
}
