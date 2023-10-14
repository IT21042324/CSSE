const purchaseModel = require("../model/purchase");
const userModel = require("../model/user");

const makePurchase = async (req, res) => {
  const { userName, credits } = req.body;

  try {
    const updatedUserInfo = await updateUserCredits(userName, credits);

    if (updatedUserInfo) {
      const purchase = new purchaseModel(req.body);
      await purchase.save();

      const purchaseObject = purchase.toObject();

      res.status(200).json({ updatedUserInfo, ...purchaseObject });
    } else {
      res.status(400).json("The provided username is not found in the system.");
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateUserCredits = async (userName, credits) => {
  try {
    // find the user document by userName
    const user = await userModel.findOne({ userName });

    if (user) {
      const updatedUserInfo = await userModel.findByIdAndUpdate(
        user._id,
        {
          $inc: { credits: credits },
        },
        { new: true }
      );

      console.log(updatedUserInfo);

      return updatedUserInfo;
    } else {
      return null;
    }
  } catch (err) {
    console.log(err.message);
    return err.message;
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
