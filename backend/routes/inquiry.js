const router = require("express").Router();

const {
  createInquiry,
  findInqById,
  findAllInqs,
  findRelevantInqueries,
  deleteInquiryById,
  updateInquiryById,
} = require("../controller/inquiry");

router.get("/", findAllInqs);
router.get("/:id", findInqById);
router.post("/", createInquiry);
router.get("/inspector/:inspectorId", findRelevantInqueries);
router.delete("/delete/:id", deleteInquiryById);
router.patch("/update/:id", updateInquiryById);

module.exports = router;
