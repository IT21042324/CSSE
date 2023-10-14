const purchaseModel = require("../model/purchase");
const userModel = require("../model/user");
const makePurchase = async (req, res) => {
  const { userId, credits } = req.body;

  try {
    const purchase = new purchaseModel(req.body);
    await purchase.save();

    const purchaseObject = purchase.toObject();

    // await the updated user info from the updateUserCredits function
    const updatedUserInfo = await updateUserCredits(userId, credits);

    res.status(200).json({ updatedUserInfo, ...purchaseObject });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateUserCredits = async (userId, credits) => {
  try {
    // await the promise returned by the findByIdAndUpdate method
    const updatedUserInfo = await userModel.findByIdAndUpdate(
      userId,
      {
        $inc: { credits: credits },
      },
      { new: true }
    );

    console.log(updatedUserInfo);

    // return the updated user info
    return updatedUserInfo;
  } catch (err) {
    console.log(err.message);
  }
};

const findPurchaseRecordById = async (req, res) => {
  const { id } = req.params;
  try {
    const purchase = await purchaseModel.findById(id);
    res.status(200).json(purchase);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const findAllPurchaseRecords = async (req, res) => {
  try {
    const purchases = await purchaseModel.find();
    res.status(200).json(purchases);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  makePurchase,
  findPurchaseRecordById,
  findAllPurchaseRecords,
};
