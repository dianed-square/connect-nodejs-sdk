/**
 * Square Connect API
 * Client library for accessing the Square Connect APIs
 *
 * OpenAPI spec version: 2.0
 * Contact: developers@squareup.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 */
var ApiClient = require('../ApiClient');
var LoyaltyAccountMapping = require('./LoyaltyAccountMapping');




/**
 * The SearchLoyaltyAccountsRequestLoyaltyAccountQuery model module.
 * Note: This model is in beta.
 * @module model/SearchLoyaltyAccountsRequestLoyaltyAccountQuery
 */

/**
 * Constructs a new <code>SearchLoyaltyAccountsRequestLoyaltyAccountQuery</code>.
 * The search criteria for the loyalty accounts.
 * @alias module:model/SearchLoyaltyAccountsRequestLoyaltyAccountQuery
 * @class
 */
var exports = function() {
  var _this = this;


};

/**
 * Constructs a <code>SearchLoyaltyAccountsRequestLoyaltyAccountQuery</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/SearchLoyaltyAccountsRequestLoyaltyAccountQuery} obj Optional instance to populate.
 * @return {module:model/SearchLoyaltyAccountsRequestLoyaltyAccountQuery} The populated <code>SearchLoyaltyAccountsRequestLoyaltyAccountQuery</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('mappings')) {
      obj['mappings'] = ApiClient.convertToType(data['mappings'], [LoyaltyAccountMapping]);
    }
    }
  return obj;
}

/**
 * The set of mappings to use in the loyalty account search.
 * @member {Array.<module:model/LoyaltyAccountMapping>} mappings
 */
exports.prototype['mappings'] = undefined;



module.exports = exports;


