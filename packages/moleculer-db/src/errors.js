/*
 * moleculer-db
 * Copyright (c) 2019 MoleculerJS (https://github.com/moleculerjs/moleculer-db)
 * MIT Licensed
 */

"use strict";

const { MoleculerClientError } = require("moleculer").Errors;

//const ERR_ENTITY_NOT_FOUND = "ERR_ENTITY_NOT_FOUND";

/**
 * Entity not found
 *
 * @class EntityNotFoundError
 * @extends {MoleculerClientError}
 */
class EntityNotFoundError extends MoleculerClientError {

	/**
	 * Creates an instance of EntityNotFoundError.
	 *
	 * @param {any} ID of entity
	 *
	 * @memberOf EntityNotFoundError
	 */
	constructor(id) {
		super("Entity not found", 404, null, {
			id
		});
	}
}

class EntityLogicallyNotFoundError extends MoleculerClientError {

	/**
	 * Creates an instance of EntityLogicallyNotFoundError.
	 *
	 * @param {any} ID of entity
	 *
	 * @memberOf EntityLogicallyNotFoundError
	 */
	constructor(id) {
		super("Entity logically not found", 404, null, {
			id
		});
	}
}


module.exports = {
	EntityNotFoundError,
	EntityLogicallyNotFoundError

	//ERR_ENTITY_NOT_FOUND,
};
