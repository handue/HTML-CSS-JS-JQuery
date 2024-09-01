import { Router } from 'express';
const router = Router();
import auth from '../middleware/auth';

// @route   GET api/benefits
// @desc    Get all benefits
// @access  Private
router.get('/', auth, (req, res) => {
  try {

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

export default router;