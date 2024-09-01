import { Router } from 'express';
const router = Router();
import auth from '../middleware/auth';
import { findById } from '../models/user';

// @route   GET api/profile
// @desc    Get user profile
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const user = await findById(req.user.id).select('-password');
    if (!user) {
      return res.status(400).json({ msg: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

export default router;  