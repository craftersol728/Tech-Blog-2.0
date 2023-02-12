
//This code is for a blog application where users can create posts and comments. The code connects to a database and allows users to read, create, update, and delete posts.

//The code uses the express.js framework to create an HTTP server and handle HTTP requests. It also uses the Sequelize ORM to interact with a MySQL database.
const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all posts with their comments and authors
router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll({
      attributes: [
        'id',
        'post_content',
        'title',
        'created_at',
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    });
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get a single post with its comments and author
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findOne({
      where: { id: req.params.id },
      attributes: [
        'id',
        'post_content',
        'title',
        'created_at',
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    });
    if (!post) {
      res.status(404).json({ message: 'No post found with this id' });
    } else {
      res.json(post);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Create a new post
router.post('/', withAuth, async (req, res) => {
  try {
    const post = await Post.create({
      title: req.body.title,
      post_content: req.body.post_content,
      user_id: req.session.user_id
    });
    res.status(201).json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update an existing post
router.put('/:id', withAuth, async (req, res) => {
  try {
    const [numRows, [updatedPost]] = await Post.update(
      {
        title: req.body.title,
        post_content: req.body.post_content
      },
      {
        where: { id: req.params.id },
        returning: true
      }
    );
    if (!updatedPost) {
      res.status(404).json({ message: 'No post found with this id' });
    } else {
      res.json(updatedPost);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Delete a post
router.delete('/:id', withAuth, async (req, res) => {
    try {
      const post = await Post.findByPk(req.params.id);
      if (!post) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      
      await post.destroy();
      res.status(204).end();
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  module.exports = router;