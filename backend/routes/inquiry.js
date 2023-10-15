const router = require("express").Router();

const {
  createInquiry,
  findInqById,
  findAllInqs,
  findRelevantInqueries,
} = require("../controller/inquiry");

router.get("/", findAllInqs);
router.get("/:id", findInqById);
router.post("/", createInquiry);
router.get("/inspector/:inspectorId", findRelevantInqueries);

module.exports = router;
