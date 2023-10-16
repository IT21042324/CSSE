const inqModel = require("../model/inquiry");
const userModel = require("../model/user");

const createInquiry = async (req, res) => {
  const { userName } = req.body;

  try {
    const user = await userModel.findOne({ userName });
    if (user) {
      const inq = new inqModel(req.body);
      await inq.save();
      res.status(201).json(inq);
    } else {
      throw new Error("User Not Found");
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const findInqById = async (req, res) => {
  const { id } = req.params;
  try {
    const inq = await inqModel.findById(id);
    res.status(200).json(inq);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const findAllInqs = async (req, res) => {
  try {
    const items = await inqModel.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const findRelevantInqueries = async (req, res) => {
  try {
    const inqueries = await inqModel.find(
      {
        inspectorId: req.params.inspectorId,
      },
      {
        inquiryType: 1,
        description: 1,
        userName: 1,
        penaltyAmount: 1,
        createdAt: 1,
      }
    );
    res.status(200).json(inqueries);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteInquiryById = async (req, res) => {
  const { id } = req.params;

  try {
    const inq = await inqModel.findByIdAndDelete(id);
    res.status(200).json(inq);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateInquiryById = async (req, res) => {
  const { id } = req.params;

  try {
    const inq = await inqModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(inq);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  createInquiry,
  findInqById,
  findAllInqs,
  findRelevantInqueries,
  deleteInquiryById,
  updateInquiryById,
};
