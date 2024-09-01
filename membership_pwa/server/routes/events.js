import { Router } from 'express';
const router = Router();
import auth from '../middleware/auth';

// @route   GET api/events
// @desc    Get all events
// @access  Private
router.get('/', auth, (req, res) => {
  try {

    res.json(events);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

export default router;