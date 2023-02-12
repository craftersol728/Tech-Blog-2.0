const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: [
        { model: Post, attributes: ['id', 'title', 'post_content', 'created_at'] },
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'created_at'],
          include: { model: Post, attributes: ['title'] }
        }
      ]
    });

    if (!user) {
      res.status(404).json({ message: 'No user found with this id' });
    } else {
      res.json(user);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const user = await User.create(req.body);
    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.username = user.username;
      req.session.loggedIn = true;
      res.status(201).json(user);
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });

    if (!user) {
      res.status(400).json({ message: 'No user with that email address!' });
    } else {
      const validPassword = user.checkPassword(req.body.password);

      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect password!' });
      } else {
        req.session.save(() => {
          req.session.user_id = user.id;
          req.session.username = user.username;
          req.session.loggedIn = true;
          res.json({ user, message: 'You are now logged in!' });
        });
      }
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/logout', withAuth, (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const [numRows, [user]] = await User.update(req.body, {
      individualHooks: true,
      returning: true,
      where: { id: req.params.id }
    });

    if (!user) {
      res.status(404).json({ message: 'No user found with this id' });
    } else {
      res.json(user);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

      router.delete('/:id', withAuth, async (req, res) => {
        try {
        const numRows = await User.destroy({ where: { id: req.params.id } });
        
        if (numRows === 0) {
          res.status(404).json({ message: 'No user found with this id' });
        } else {
          res.status(204).end();
        }
        } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
        }
        });
        
        module.exports = router;