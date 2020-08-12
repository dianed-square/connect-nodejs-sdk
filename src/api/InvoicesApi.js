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
var CancelInvoiceRequest = require('../model/CancelInvoiceRequest');
var CancelInvoiceResponse = require('../model/CancelInvoiceResponse');
var CreateInvoiceRequest = require('../model/CreateInvoiceRequest');
var CreateInvoiceResponse = require('../model/CreateInvoiceResponse');
var DeleteInvoiceResponse = require('../model/DeleteInvoiceResponse');
var GetInvoiceResponse = require('../model/GetInvoiceResponse');
var ListInvoicesResponse = require('../model/ListInvoicesResponse');
var PublishInvoiceRequest = require('../model/PublishInvoiceRequest');
var PublishInvoiceResponse = require('../model/PublishInvoiceResponse');
var SearchInvoicesRequest = require('../model/SearchInvoicesRequest');
var SearchInvoicesResponse = require('../model/SearchInvoicesResponse');
var UpdateInvoiceRequest = require('../model/UpdateInvoiceRequest');
var UpdateInvoiceResponse = require('../model/UpdateInvoiceResponse');

/**
 * Invoices service.
 * @module api/InvoicesApi
 */

/**
 * Constructs a new InvoicesApi. 
 * @alias module:api/InvoicesApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
module.exports = function(apiClient) {
  this.apiClient = apiClient || ApiClient.instance;



  /**
   * CancelInvoice
   * Note: This endpoint is in beta.
   * Cancels an invoice. The seller cannot collect payments for  the canceled invoice.  You cannot cancel an invoice in a terminal state: &#x60;PAID&#x60;, &#x60;REFUNDED&#x60;, &#x60;CANCELED&#x60;, or &#x60;FAILED&#x60;.
   * @param {String} invoiceId The ID of the &#x60;invoice&#x60; to cancel.
   * @param {module:model/CancelInvoiceRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CancelInvoiceResponse} and HTTP response
   */
  this.cancelInvoiceWithHttpInfo = function(invoiceId, body) {
    var postBody = body;

    // verify the required parameter 'invoiceId' is set
    if (invoiceId === undefined || invoiceId === null) {
      throw new Error("Missing the required parameter 'invoiceId' when calling cancelInvoice");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling cancelInvoice");
    }


    var pathParams = {
      'invoice_id': invoiceId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-08-12';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = CancelInvoiceResponse;

    return this.apiClient.callApi(
      '/v2/invoices/{invoice_id}/cancel', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * CancelInvoice
   * Cancels an invoice. The seller cannot collect payments for  the canceled invoice.  You cannot cancel an invoice in a terminal state: &#x60;PAID&#x60;, &#x60;REFUNDED&#x60;, &#x60;CANCELED&#x60;, or &#x60;FAILED&#x60;.
   * @param {String} invoiceId The ID of the &#x60;invoice&#x60; to cancel.
   * @param {module:model/CancelInvoiceRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CancelInvoiceResponse}
   */
  this.cancelInvoice = function(invoiceId, body) {
    return this.cancelInvoiceWithHttpInfo(invoiceId, body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * CreateInvoice
   * Note: This endpoint is in beta.
   * Creates a draft [invoice](#type-invoice)  for an order created using the Orders API.  A draft invoice remains in your account and no action is taken.  You must publish the invoice before Square can process it (send it to the customer&#39;s email address or charge the customer’s card on file).  For more information, see [Manage Invoices Using the Invoices API](/docs/invoices-api/overview).
   * @param {module:model/CreateInvoiceRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateInvoiceResponse} and HTTP response
   */
  this.createInvoiceWithHttpInfo = function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling createInvoice");
    }


    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-08-12';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = CreateInvoiceResponse;

    return this.apiClient.callApi(
      '/v2/invoices', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * CreateInvoice
   * Creates a draft [invoice](#type-invoice)  for an order created using the Orders API.  A draft invoice remains in your account and no action is taken.  You must publish the invoice before Square can process it (send it to the customer&#39;s email address or charge the customer’s card on file).  For more information, see [Manage Invoices Using the Invoices API](/docs/invoices-api/overview).
   * @param {module:model/CreateInvoiceRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateInvoiceResponse}
   */
  this.createInvoice = function(body) {
    return this.createInvoiceWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * DeleteInvoice
   * Note: This endpoint is in beta.
   * Deletes the specified invoice. When an invoice is deleted, the  associated Order status changes to CANCELED. You can only delete a draft  invoice (you cannot delete an invoice scheduled for publication, or a  published invoice).
   * @param {String} invoiceId The ID of the invoice to delete.
   * @param {Object} opts Optional parameters
   * @param {Number} opts.version The version of the &#x60;invoice&#x60; to delete. If you do not know the version, you can call &#x60;GetInvoice&#x60; or  &#x60;ListInvoices&#x60;.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteInvoiceResponse} and HTTP response
   */
  this.deleteInvoiceWithHttpInfo = function(invoiceId, opts) {
    opts = opts || {};
    var postBody = null;

    // verify the required parameter 'invoiceId' is set
    if (invoiceId === undefined || invoiceId === null) {
      throw new Error("Missing the required parameter 'invoiceId' when calling deleteInvoice");
    }


    var pathParams = {
      'invoice_id': invoiceId
    };
    var queryParams = {
      'version': opts['version']
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-08-12';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = DeleteInvoiceResponse;

    return this.apiClient.callApi(
      '/v2/invoices/{invoice_id}', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * DeleteInvoice
   * Deletes the specified invoice. When an invoice is deleted, the  associated Order status changes to CANCELED. You can only delete a draft  invoice (you cannot delete an invoice scheduled for publication, or a  published invoice).
   * @param {String} invoiceId The ID of the invoice to delete.
   * @param {Object} opts Optional parameters
   * @param {Number} opts.version The version of the &#x60;invoice&#x60; to delete. If you do not know the version, you can call &#x60;GetInvoice&#x60; or  &#x60;ListInvoices&#x60;.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteInvoiceResponse}
   */
  this.deleteInvoice = function(invoiceId, opts) {
    return this.deleteInvoiceWithHttpInfo(invoiceId, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * GetInvoice
   * Note: This endpoint is in beta.
   * Retrieves an invoice by invoice ID.
   * @param {String} invoiceId The id of the invoice to retrieve.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetInvoiceResponse} and HTTP response
   */
  this.getInvoiceWithHttpInfo = function(invoiceId) {
    var postBody = null;

    // verify the required parameter 'invoiceId' is set
    if (invoiceId === undefined || invoiceId === null) {
      throw new Error("Missing the required parameter 'invoiceId' when calling getInvoice");
    }


    var pathParams = {
      'invoice_id': invoiceId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-08-12';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = GetInvoiceResponse;

    return this.apiClient.callApi(
      '/v2/invoices/{invoice_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * GetInvoice
   * Retrieves an invoice by invoice ID.
   * @param {String} invoiceId The id of the invoice to retrieve.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetInvoiceResponse}
   */
  this.getInvoice = function(invoiceId) {
    return this.getInvoiceWithHttpInfo(invoiceId)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * ListInvoices
   * Note: This endpoint is in beta.
   * Returns a list of invoices for a given location. The response  is paginated. If truncated, the response includes a &#x60;cursor&#x60; that you     use in a subsequent request to fetch the next set of invoices. For more information about retrieving invoices, see [Retrieve invoices](/docs/invoices-api/overview#retrieve-invoices).
   * @param {String} locationId The ID of the location for which to list invoices.
   * @param {Object} opts Optional parameters
   * @param {String} opts.cursor A pagination cursor returned by a previous call to this endpoint.  Provide this cursor to retrieve the next set of results for your original query.  For more information, see [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination).
   * @param {Number} opts.limit The maximum number of invoices to return (200 is the maximum &#x60;limit&#x60;).  If not provided, the server  uses a default limit of 100 invoices.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListInvoicesResponse} and HTTP response
   */
  this.listInvoicesWithHttpInfo = function(locationId, opts) {
    opts = opts || {};
    var postBody = null;

    // verify the required parameter 'locationId' is set
    if (locationId === undefined || locationId === null) {
      throw new Error("Missing the required parameter 'locationId' when calling listInvoices");
    }


    var pathParams = {
    };
    var queryParams = {
      'location_id': locationId,
      'cursor': opts['cursor'],
      'limit': opts['limit']
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-08-12';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = ListInvoicesResponse;

    return this.apiClient.callApi(
      '/v2/invoices', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * ListInvoices
   * Returns a list of invoices for a given location. The response  is paginated. If truncated, the response includes a &#x60;cursor&#x60; that you     use in a subsequent request to fetch the next set of invoices. For more information about retrieving invoices, see [Retrieve invoices](/docs/invoices-api/overview#retrieve-invoices).
   * @param {String} locationId The ID of the location for which to list invoices.
   * @param {Object} opts Optional parameters
   * @param {String} opts.cursor A pagination cursor returned by a previous call to this endpoint.  Provide this cursor to retrieve the next set of results for your original query.  For more information, see [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination).
   * @param {Number} opts.limit The maximum number of invoices to return (200 is the maximum &#x60;limit&#x60;).  If not provided, the server  uses a default limit of 100 invoices.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListInvoicesResponse}
   */
  this.listInvoices = function(locationId, opts) {
    return this.listInvoicesWithHttpInfo(locationId, opts)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * PublishInvoice
   * Note: This endpoint is in beta.
   * Publishes the specified draft invoice.   After an invoice is published, Square  follows up based on the invoice configuration. For example, Square  sends the invoice to the customer&#39;s email address, charges the customer&#39;s card on file, or does  nothing. Square also makes the invoice available on a Square-hosted invoice page.   The invoice &#x60;status&#x60; also changes from &#x60;DRAFT&#x60; to a status  based on the invoice configuration. For example, the status changes to &#x60;UNPAID&#x60; if  Square emails the invoice or &#x60;PARTIALLY_PAID&#x60; if Square charge a card on file for a portion of the  invoice amount).  For more information, see  [Create and publish an invoice](/docs/invoices-api/overview#create-and-publish-an-invoice).
   * @param {String} invoiceId The id of the invoice to publish.
   * @param {module:model/PublishInvoiceRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PublishInvoiceResponse} and HTTP response
   */
  this.publishInvoiceWithHttpInfo = function(invoiceId, body) {
    var postBody = body;

    // verify the required parameter 'invoiceId' is set
    if (invoiceId === undefined || invoiceId === null) {
      throw new Error("Missing the required parameter 'invoiceId' when calling publishInvoice");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling publishInvoice");
    }


    var pathParams = {
      'invoice_id': invoiceId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-08-12';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = PublishInvoiceResponse;

    return this.apiClient.callApi(
      '/v2/invoices/{invoice_id}/publish', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * PublishInvoice
   * Publishes the specified draft invoice.   After an invoice is published, Square  follows up based on the invoice configuration. For example, Square  sends the invoice to the customer&#39;s email address, charges the customer&#39;s card on file, or does  nothing. Square also makes the invoice available on a Square-hosted invoice page.   The invoice &#x60;status&#x60; also changes from &#x60;DRAFT&#x60; to a status  based on the invoice configuration. For example, the status changes to &#x60;UNPAID&#x60; if  Square emails the invoice or &#x60;PARTIALLY_PAID&#x60; if Square charge a card on file for a portion of the  invoice amount).  For more information, see  [Create and publish an invoice](/docs/invoices-api/overview#create-and-publish-an-invoice).
   * @param {String} invoiceId The id of the invoice to publish.
   * @param {module:model/PublishInvoiceRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PublishInvoiceResponse}
   */
  this.publishInvoice = function(invoiceId, body) {
    return this.publishInvoiceWithHttpInfo(invoiceId, body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * SearchInvoices
   * Note: This endpoint is in beta.
   * Searches for invoices from a location specified in  the filter. You can optionally specify customers in the filter for whom to  retrieve invoices. In the current implementation, you can only specify one location and  optionally one customer.  The response is paginated. If truncated, the response includes a &#x60;cursor&#x60;  that you use in a subsequent request to fetch the next set of invoices.  For more information about retrieving invoices, see [Retrieve invoices](/docs/invoices-api/overview#retrieve-invoices).
   * @param {module:model/SearchInvoicesRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SearchInvoicesResponse} and HTTP response
   */
  this.searchInvoicesWithHttpInfo = function(body) {
    var postBody = body;

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling searchInvoices");
    }


    var pathParams = {
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-08-12';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = SearchInvoicesResponse;

    return this.apiClient.callApi(
      '/v2/invoices/search', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * SearchInvoices
   * Searches for invoices from a location specified in  the filter. You can optionally specify customers in the filter for whom to  retrieve invoices. In the current implementation, you can only specify one location and  optionally one customer.  The response is paginated. If truncated, the response includes a &#x60;cursor&#x60;  that you use in a subsequent request to fetch the next set of invoices.  For more information about retrieving invoices, see [Retrieve invoices](/docs/invoices-api/overview#retrieve-invoices).
   * @param {module:model/SearchInvoicesRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SearchInvoicesResponse}
   */
  this.searchInvoices = function(body) {
    return this.searchInvoicesWithHttpInfo(body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }


  /**
   * UpdateInvoice
   * Note: This endpoint is in beta.
   * Updates an invoice by modifying field values, clearing field values, or both  as specified in the request.  There are no restrictions to updating an invoice in a draft state.  However, there are guidelines for updating a published invoice.  For more information, see [Update an invoice](/docs/invoices-api/overview#update-an-invoice).
   * @param {String} invoiceId The id of the invoice to update.
   * @param {module:model/UpdateInvoiceRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateInvoiceResponse} and HTTP response
   */
  this.updateInvoiceWithHttpInfo = function(invoiceId, body) {
    var postBody = body;

    // verify the required parameter 'invoiceId' is set
    if (invoiceId === undefined || invoiceId === null) {
      throw new Error("Missing the required parameter 'invoiceId' when calling updateInvoice");
    }

    // verify the required parameter 'body' is set
    if (body === undefined || body === null) {
      throw new Error("Missing the required parameter 'body' when calling updateInvoice");
    }


    var pathParams = {
      'invoice_id': invoiceId
    };
    var queryParams = {
    };
    var headerParams = {
    };
    headerParams['Square-Version'] = '2020-08-12';

    var formParams = {
    };

    var authNames = ['oauth2'];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = UpdateInvoiceResponse;

    return this.apiClient.callApi(
      '/v2/invoices/{invoice_id}', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType
    );
  }

  /**
   * UpdateInvoice
   * Updates an invoice by modifying field values, clearing field values, or both  as specified in the request.  There are no restrictions to updating an invoice in a draft state.  However, there are guidelines for updating a published invoice.  For more information, see [Update an invoice](/docs/invoices-api/overview#update-an-invoice).
   * @param {String} invoiceId The id of the invoice to update.
   * @param {module:model/UpdateInvoiceRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateInvoiceResponse}
   */
  this.updateInvoice = function(invoiceId, body) {
    return this.updateInvoiceWithHttpInfo(invoiceId, body)
      .then(function(response_and_data) {
        return response_and_data.data;
      });
  }
};