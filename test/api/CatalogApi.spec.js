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
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

const SquareConnect = require('../../src/index');
const {
  accounts,
  expect,
  assert,
  handleUnexpectedError,
  generateIdempotencyKey
} = require('../support/setup');

/** Creates basic catalog item of type ITEM */
const getBasicItem = {
  type: "ITEM",
  id: "#Cocoa",
  item_data: {
    name: "Cocoa",
    description: "Hot chocolate",
    abbreviation: "Ch"
  }
};

/**  Creates basic catalog item of type ITEM */
const getTeaItem = {
  type: "ITEM",
  id: "#Tea",
  item_data: {
    name: "Tea",
    description: "Hot leaf juice",
    abbreviation: "Te"
  }
};

/** Creates catalog item of type MODIFIER_LIST which contains 3 items modifiers of type MODIFIER */
const getMilkItem = {
  type: "MODIFIER_LIST",
  id: '#milk',
  modifier_list_data: {
    name: "Milk",
    modifiers:
      [
        {
          type: "MODIFIER",
          id: "#WholeMilk",
          modifier_data: {
            name: "Whole Milk"
          }
        },
        {
          type: 'MODIFIER',
          id: "#SkimMilk",
          modifier_data: {
            "name": "Skim Milk"
          }
        },
        {
          type: "MODIFIER",
          id: "#SoyMilk",
          modifier_data: {
            name: "Soy Milk",
            price_money: {
              amount: 50.0,
              currency: "USD"
            }
          }
        }
      ]
  }
};

/** Creates catalog item of type TAX */
const getTaxItem =  {
  type: "TAX",
  id: "#SalesTax",
  present_at_all_locations: true,
  tax_data: {
    name: "Sales Tax",
    calculation_phase: "TAX_SUBTOTAL_PHASE",
    inclusion_type: "ADDITIVE",
    percentage: "5.0",
    fee_applies_to_custom_amounts: true,
    enabled: true
  }
};

/** returns a valid BatchUpsertCatalog Object which will create an Catalog Item and Catalog_item_modifier **/
function getBatchUpsertReq() {
  const batch = {objects: [getMilkItem, getTeaItem]};
  const upsertReq = {idempotency_key: generateIdempotencyKey()};
  upsertReq['batches'] = [batch];
  return upsertReq;
}

describe('CatalogApi', function () {
  beforeEach(function () {
    const defaultClient = SquareConnect.ApiClient.instance;
    const oauth2 = defaultClient.authentications['oauth2'];
    oauth2.accessToken = accounts.production.access_token;
    this.api = new SquareConnect.CatalogApi();
  });

  afterEach(async function () {
    const listCatalogResp = await this.api.listCatalog()
      .catch(handleUnexpectedError);

    let catalogItems = listCatalogResp.objects;
    if (!catalogItems || catalogItems.length === 0) {
      return;
    }

    catalogItems = catalogItems.map(item => item.id);
    const deleteRequest = {'object_ids': catalogItems};

    await this.api.batchDeleteCatalogObjects(deleteRequest)
      .catch(handleUnexpectedError)
  });

  describe('batchDeleteCatalogObjects', function () {
    xit('should call batchDeleteCatalogObjects successfully', async function () {
      const milkItem = {idempotency_key: generateIdempotencyKey()};
      milkItem['object'] = getMilkItem;

      await this.api.upsertCatalogObject(milkItem)
        .catch(handleUnexpectedError);

      const listCatalogResp = await this.api.listCatalog({types: 'MODIFIER'})
        .catch(handleUnexpectedError);

      const catalogModifierItems = listCatalogResp.objects.map(item => item.id);
      const deleteRequest = {object_ids: catalogModifierItems};
      const batchDeleteItemsResp = await this.api.batchDeleteCatalogObjects(deleteRequest)
        .catch(handleUnexpectedError);

      expect(batchDeleteItemsResp.deleted_object_ids.length).to.equal(3);
      catalogModifierItems.forEach(itemId => expect(batchDeleteItemsResp.deleted_object_ids).to.include(itemId));
    });
  });
  describe('batchRetrieveCatalogObjects', function () {
    it('should call batchRetrieveCatalogObjects successfully', async function () {
      const upsertReq = getBatchUpsertReq();
      const upsertResp = await this.api.batchUpsertCatalogObjects(upsertReq)
        .catch(handleUnexpectedError);

      const milkModifiers = upsertResp.id_mappings.filter(item => item.client_object_id.includes('Milk'));
      const milkModifierIds = milkModifiers.map(item => item.object_id);

      const batchRetrieveResponse = await this.api.batchRetrieveCatalogObjects({object_ids: milkModifierIds})
        .catch(handleUnexpectedError);

      const retrievedIds = batchRetrieveResponse.objects.map(item => item.id);
      expect(retrievedIds.length).to.equal(3);
      retrievedIds.forEach(retrievedId => expect(milkModifierIds).to.include(retrievedId));
    });
  });
  describe('batchUpsertCatalogObjects', function () {
    it('should call batchUpsertCatalogObjects successfully', async function () {
      const batchUpsertReq = getBatchUpsertReq();
      const bathcUpsertResp = await this.api.batchUpsertCatalogObjects(batchUpsertReq)
        .catch(handleUnexpectedError);

      expect(bathcUpsertResp.id_mappings.length).to.equal(5);
    });
  });
  describe('catalogInfo', function () {
    it('should call catalogInfo successfully', async function () {

      const catalogInfoResp = await this.api.catalogInfo()
        .catch(handleUnexpectedError);

      expect(catalogInfoResp.limits.batch_delete_max_object_ids).to.equal(200);
      expect(catalogInfoResp.limits.batch_upsert_max_total_objects).to.equal(10000);
      expect(catalogInfoResp.limits.batch_upsert_max_objects_per_batch).to.equal(1000);
      expect(catalogInfoResp.limits.batch_retrieve_max_object_ids).to.equal(1000);
      expect(catalogInfoResp.limits.search_max_page_limit).to.equal(1000);
      expect(catalogInfoResp.limits.update_item_taxes_max_item_ids).to.equal(1000);
      expect(catalogInfoResp.limits.update_item_taxes_max_taxes_to_enable).to.equal(1000);
      expect(catalogInfoResp.limits.update_item_taxes_max_taxes_to_disable).to.equal(1000);
      expect(catalogInfoResp.limits.update_item_modifier_lists_max_item_ids).to.equal(1000);
      expect(catalogInfoResp.limits.update_item_modifier_lists_max_modifier_lists_to_enable).to.equal(1000);
      expect(catalogInfoResp.limits.update_item_modifier_lists_max_modifier_lists_to_disable).to.equal(1000);
    });
  });
  describe('deleteCatalogObject', function () {
    it('should call deleteCatalogObject successfully', async function () {
      const item = {idempotency_key: generateIdempotencyKey()};
      item['object'] = getBasicItem;

      const upsertResp = await this.api.upsertCatalogObject(item)
        .catch(handleUnexpectedError);

      const itemId = upsertResp.catalog_object.id;
      const deleteResp = await this.api.deleteCatalogObject(itemId);

      expect(deleteResp.deleted_object_ids.length).to.equal(1);
      expect(deleteResp.deleted_object_ids[0]).to.equal(itemId);
    });
  });
  describe('listCatalog', function () {
    it('should call listCatalog successfully', async function () {
      const batchUpsertReq = getBatchUpsertReq();

      await this.api.batchUpsertCatalogObjects(batchUpsertReq)
        .catch(handleUnexpectedError);

      const listResp = await this.api.listCatalog()
        .catch(handleUnexpectedError);

      expect(listResp.objects.length).to.equal(2);
    });
  });
  describe('retrieveCatalogObject', function () {
    it('should call retrieveCatalogObject successfully', async function () {
      const item = {idempotency_key: generateIdempotencyKey()};
      item['object'] = getBasicItem;

      const upsertResp = await this.api.upsertCatalogObject(item)
        .catch(handleUnexpectedError);

      const itemId = upsertResp.catalog_object.id;
      const retreiveResp = await this.api.retrieveCatalogObject(itemId);

      expect(retreiveResp.object).to.have.property('id', itemId);
      expect(retreiveResp.object.item_data).to.have.property('name', 'Cocoa');
      expect(retreiveResp.object.item_data).to.have.property('description', 'Hot chocolate');
    });
  });
  describe('searchCatalogObjects', function () {
    it('should call searchCatalogObjects successfully', async function () {
      const batchUpsertReq = getBatchUpsertReq();

      await this.api.batchUpsertCatalogObjects(batchUpsertReq)
        .catch(handleUnexpectedError);

      const searchCatalogReq = {
        object_types: ['MODIFIER'],
        query: {
          sorted_attribute_query: {
            attribute_name: 'name',
            sort_order: 'ASC'
          }
        }
      };

      const searchCatalogResp = await this.api.searchCatalogObjects(searchCatalogReq)
        .catch(handleUnexpectedError);

      expect(searchCatalogResp.objects.length).to.equal(3);
      expect(searchCatalogResp.objects[0].modifier_data.name).to.equal('Skim Milk');
      expect(searchCatalogResp.objects[1].modifier_data.name).to.equal('Soy Milk');
      expect(searchCatalogResp.objects[2].modifier_data.name).to.equal('Whole Milk');
    });
  });
  describe('updateItemModifierLists', function () {
    it('should call updateItemModifierLists successfully', async function () {
      const milkMod = {idempotency_key: generateIdempotencyKey()};
      const teaItem = {idempotency_key: generateIdempotencyKey()};
      milkMod['object'] = getMilkItem;
      teaItem ['object'] = getTeaItem;

      const upsertResp = await this.api.upsertCatalogObject(milkMod)
        .catch(handleUnexpectedError);
      const teaUpsertResp = await this.api.upsertCatalogObject(teaItem)
        .catch(handleUnexpectedError);

      const modListId = upsertResp.catalog_object.id;
      const teaItemId = teaUpsertResp.catalog_object.id;
      const teaUpdateReq = {item_ids: [teaItemId], modifier_lists_to_enable: [modListId]};

      await this.api.updateItemModifierLists(teaUpdateReq)
        .catch(handleUnexpectedError);

      const modifiedTeaItem = await this.api.retrieveCatalogObject(teaItemId)
        .catch(handleUnexpectedError);

      expect(modifiedTeaItem.object.item_data.modifier_list_info.length).to.equal(1);
    });
  });
  describe('updateItemTaxes', function () {
    it('should call updateItemTaxes successfully', async function () {
      const taxItem = {idempotency_key: generateIdempotencyKey()};
      const teaItem = {idempotency_key: generateIdempotencyKey()};
      taxItem['object'] = getTaxItem;
      teaItem ['object'] = getTeaItem;

      const taxUpsertResp = await this.api.upsertCatalogObject(taxItem)
        .catch(handleUnexpectedError);
      const teaUpsertResp = await this.api.upsertCatalogObject(teaItem)
        .catch(handleUnexpectedError);

      const taxItemId = taxUpsertResp.catalog_object.id;
      const teaItemId = teaUpsertResp.catalog_object.id;
      const taxUpdateReq = {item_ids: [teaItemId], taxes_to_enable: [taxItemId]};

      await this.api.updateItemTaxes(taxUpdateReq)
        .catch(handleUnexpectedError);

      const modifiedTeaItem = await this.api.retrieveCatalogObject(teaItemId)
        .catch(handleUnexpectedError);

      expect(modifiedTeaItem.object.item_data.tax_ids.length).to.equal(1);
    });
  });
  describe('upsertCatalogObject', function () {
    it('should call upsertCatalogObject successfully', async function () {
      const item = {idempotency_key: generateIdempotencyKey()};
      item['object'] = getBasicItem;

      const upsertResp = await this.api.upsertCatalogObject(item)
        .catch(handleUnexpectedError);

      expect(upsertResp.catalog_object.item_data).to.have.property('name', 'Cocoa');
      expect(upsertResp.catalog_object.item_data).to.have.property('description', 'Hot chocolate');
      expect(upsertResp.id_mappings.length).to.equal(1);
    });
  });
});
