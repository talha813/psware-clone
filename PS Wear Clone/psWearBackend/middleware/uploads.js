    import multer from "multer";
    import fs from "fs";
    import path from "path"
    
    const storage = multer.memoryStorage();
    const upload = multer({
      storage: storage,
      fileFilter: function (req, file, callback) {
        const filetypes = /jpeg|jpg|png/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        if (mimetype && extname) {
          callback(null, true);
        } else {
          console.log("Only JPEG, JPG, and PNG files are supported");
          callback(null, false);
        }
      },
      limits: {
        fileSize: 1024 * 1024 * 2,
      },
    });
    
    export default upload;
    
