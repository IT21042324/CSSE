const router = require("express").Router();

const {
  createInquiry,
  findInqById,
  findAllInqs,
} = require("../controller/inquiry");

router.get("/", findAllInqs);
router.get("/:id", findInqById);
router.post("/", createInquiry);

module.exports = router;
