const experienceModel = require("../models/experienceModel");

// create experience
exports.createExperience = async (req, res) => {
  try {
    const { title, subTitle, description, time } = req.body;
    const result = await experienceModel.create({
      title,
      subTitle,
      description,
      time,
    });

    return res.status(201).json({
      success: true,
      data: result,
      message: "Experience add successful.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.toString(),
    });
  }
};

// get all experience
exports.getAllExperience = async (req, res) => {
  try {
    let project = {
      $project: {
        _id: 0,
        title: 1,
        subTitle: 1,
        description: 1,
        time: 1,
        date: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
      },
    };
    const result = await experienceModel.aggregate([project]);

    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.toString(),
    });
  }
};
