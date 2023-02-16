import multer from "multer";
import fs from "fs";

export const storageConfig = () => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const path = `./uploads/${req.params["user_id"]}`;
      console.log(path);

      fs.mkdirSync(path, { recursive: true });
      cb(null, path);
    },
    filename: function (req, file, cb) {
      cb(null, "profile.png");
    },
  });
  return storage;
};
