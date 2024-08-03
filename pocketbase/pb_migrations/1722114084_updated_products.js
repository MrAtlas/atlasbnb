/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rz6mt98b428xgat")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jjaqamja",
    "name": "maxCapacity",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rz6mt98b428xgat")

  // remove
  collection.schema.removeField("jjaqamja")

  return dao.saveCollection(collection)
})
