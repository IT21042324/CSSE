const router = require("express").Router();

const { deleteInquiryById } = require("../controller/inquiry");
const {
  makePurchase,
  findPurchaseRecordById,
  findAllPurchaseRecords,
  deletePurchaseRecordById,
} = require("../controller/purchase");

router.get("/", findAllPurchaseRecords);
router.get("/:id", findPurchaseRecordById);
router.post("/", makePurchase);
router.delete("/:id", deletePurchaseRecordById);

module.exports = router;
