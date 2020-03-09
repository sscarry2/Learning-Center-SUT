const express = require('express');
const { signUp, signIn, signJWTForUser } = require('../middleware/auth');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) { 
        cb(null, './upload/');
    },
    filename: function (req, file, cb) { 
        cb(
          null,
          new Date().toISOString().replace(/:|\./g, '') +
            ' - ' +
            file.originalname
        );
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
        cb(null, true);
    } else {
        cb(null, false);
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
};

const upload = multer({
    storage: storage, limits: {
    fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});
const router = new express.Router();

// Sign up
router.post('/auth/sign-up', upload.single('userImage'),signUp, signJWTForUser);

// Sign in
router.post('/auth', signIn, signJWTForUser);

module.exports = router;
