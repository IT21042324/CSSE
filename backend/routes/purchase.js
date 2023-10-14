const router = require("express").Router();

const {
  makePurchase,
  findPurchaseRecordById,
  findAllPurchaseRecords,
} = require("../controller/purchase");

router.get("/", findAllPurchaseRecords);
router.get("/:id", findPurchaseRecordById);
router.post("/", makePurchase);

module.exports = router;
