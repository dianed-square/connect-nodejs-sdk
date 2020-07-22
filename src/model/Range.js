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




/**
 * The Range model module.
 * Note: This model is in beta.
 * @module model/Range
 */

/**
 * Constructs a new <code>Range</code>.
 * The range of a number value between the specified lower and upper bounds.
 * @alias module:model/Range
 * @class
 */
var exports = function() {
  var _this = this;



};

/**
 * Constructs a <code>Range</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/Range} obj Optional instance to populate.
 * @return {module:model/Range} The populated <code>Range</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

      if (data.hasOwnProperty('min')) {
      obj['min'] = ApiClient.convertToType(data['min'], 'String');
    }
      if (data.hasOwnProperty('max')) {
      obj['max'] = ApiClient.convertToType(data['max'], 'String');
    }
    }
  return obj;
}

/**
 * The lower bound of the number range.
 * @member {String} min
 */
exports.prototype['min'] = undefined;
/**
 * The upper bound of the number range.
 * @member {String} max
 */
exports.prototype['max'] = undefined;



module.exports = exports;



