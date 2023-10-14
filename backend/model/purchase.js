const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const purchaseSchema = new Schema(
  {
    paymentMethod: {
      type: String,
      required: true,
      default: "cash",
    },
    paymentType: {
      type: String,
      default: "inspectorHandheldDevice",
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    userName: String,
    inspectorId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    credits: {
      type: Number,
      default: "inspector",
    },
    amount: {
      type: Number,
      default: "inspector",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Purchase", purchaseSchema);
