const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inquirySchema = new Schema(
  {
    inquiryType: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    startingPoint: {
      type: String,
    },
    inspectorId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    penaltyAmount: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Inquiry", inquirySchema);
