const { Op } = require('sequelize');
const { Post, User, Comment } = require('../models');

// Define a route handler for the homepage route
const homepageHandler = async (req, res) => {
  try {
    const posts = await Post.findAll({
      attributes: ['id', 'title', 'created_at', 'post_content'],
      include: [
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
      ],
    });

    const plainPosts = posts.map((post) => post.get({ plain: true }));

    res.render('homepage', {
      posts: plainPosts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

// Define a route handler for the single post route
const singlePostHandler = async (req, res) => {
  try {
    const post = await Post.findOne({
      where: {
        id: {
          [Op.eq]: req.params.id,
        },
      },
      attributes: ['id', 'title', 'created_at', 'post_content'],
      include: [
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
      ],
    });

    if (!post) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }

    const plainPost = post.get({ plain: true });

    res.render('single-post', {
      post: plainPost,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

// Define the router with the two routes
const router = require('express').Router();
router.get('/', homepageHandler);
router.get('/post/:id', singlePostHandler);

module.exports = router;
