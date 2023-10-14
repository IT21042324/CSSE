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
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    startingPoint: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Inquiry", inquirySchema);
