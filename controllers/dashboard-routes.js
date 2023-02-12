const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

const attributes = ['id', 'title', 'created_at', 'post_content'];
const include = [
  {
    model: Comment,
    attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
    include: {
      model: User,
      attributes: ['username'],
    },
  },
  {
    model: User,
    attributes: ['username'],
  },
];

router.get('/', withAuth, (req, res) => {
  Post.findAll({
    where: { user_id: req.session.user_id },
    attributes,
    include,
  })
    .then(posts => res.render('dashboard', { posts, loggedIn: true }))
    .catch(err => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get('/edit/:id', withAuth, (req, res) => {
  Post.findByPk(req.params.id, { attributes, include })
    .then(post => {
      if (post) {
        res.render('edit-post', { post, loggedIn: true });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
