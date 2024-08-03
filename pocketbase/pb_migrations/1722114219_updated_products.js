/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rz6mt98b428xgat")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "diym2fsj",
    "name": "type",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rz6mt98b428xgat")

  // remove
  collection.schema.removeField("diym2fsj")

  return dao.saveCollection(collection)
})
