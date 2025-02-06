const ReadProfileService = async (req) => {
  try {
    let user_id = req.headers.user_id;
    let result = await ProfileModel.find({ userID: user_id });
    return { status: "success", data: result };
  } catch (e) {
    return { status: "fail", message: "Something Went Wrong" };
  }
};

module.exports = {
  ReadProfileService,
};
