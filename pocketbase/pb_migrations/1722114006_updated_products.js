/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rz6mt98b428xgat")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wiwhpgit",
    "name": "rules",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rz6mt98b428xgat")

  // remove
  collection.schema.removeField("wiwhpgit")

  return dao.saveCollection(collection)
})
