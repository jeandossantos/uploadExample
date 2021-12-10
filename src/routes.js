const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

const Post = require('./models/Post');

routes.post('/posts', multer(multerConfig).single('file'), async (req, res) => {

    const file = req.file;

    const post = new Post({
        name: file.originalname,
        size: file.size,
        key: file.filename,
        url: ''
    });

    await post.save();

    return res.json(post);

});

module.exports = routes;