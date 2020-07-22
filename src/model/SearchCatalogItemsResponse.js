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
var CatalogObject = require('./CatalogObject');
var Error = require('./Error');




/**
 * The SearchCatalogItemsResponse model module.
 * Note: This model is in beta.
 * @module model/SearchCatalogItemsResponse
 */

/**
 * Constructs a new <code>SearchCatalogItemsResponse</code>.
 * Defines the response body returned from the [SearchCatalogItems](#endpoint-Catalog-SearchCatalogItems) endpoint.
 * @alias module:model/SearchCatalogItemsResponse
 * @class
 */
var exports = function() {
  var _this = this;





};

/**
 * Constructs a <code>SearchCatalogItemsResponse</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/SearchCatalogItemsResponse} obj Optional instance to populate.
 * @return {module:model/SearchCatalogItemsResponse} The populated <code>SearchCatalogItemsResponse</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('errors')) {
      obj['errors'] = ApiClient.convertToType(data['errors'], [Error]);
    }
      if (data.hasOwnProperty('items')) {
      obj['items'] = ApiClient.convertToType(data['items'], [CatalogObject]);
    }
      if (data.hasOwnProperty('cursor')) {
      obj['cursor'] = ApiClient.convertToType(data['cursor'], 'String');
    }
      if (data.hasOwnProperty('matched_variation_ids')) {
      obj['matched_variation_ids'] = ApiClient.convertToType(data['matched_variation_ids'], ['String']);
    }
    }
  return obj;
}

/**
 * Errors detected when the call to `SearchCatalogItems` endpoint fails.
 * @member {Array.<module:model/Error>} errors
 */
exports.prototype['errors'] = undefined;
/**
 * Returned items matching the specified query expressions.
 * @member {Array.<module:model/CatalogObject>} items
 */
exports.prototype['items'] = undefined;
/**
 * Pagination token used in the next request to return more of the search result.
 * @member {String} cursor
 */
exports.prototype['cursor'] = undefined;
/**
 * Ids of returned item variations matching the specified query expression.
 * @member {Array.<String>} matched_variation_ids
 */
exports.prototype['matched_variation_ids'] = undefined;



module.exports = exports;



