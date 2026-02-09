export const uploadFileController = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "No file uploaded",
      });
    }

    const file = req.file.filename;

    res.status(200).json({
      message: "File Uploaded Successfully",
      url: `http://localhost:8080/${file}`,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
