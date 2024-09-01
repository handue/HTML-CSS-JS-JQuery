require('dotenv').config({ path: '../.env' });
import express, { json } from 'express';
import cors from 'cors';
import { connect } from 'mongoose';

const app = express();

// ! 토큰키 생성할때

// const crypto = require('crypto');
// const jwtSecret = crypto.randomBytes(64).toString('hex'); // 64바이트 랜덤 문자열

// console.log(jwtSecret);


// Middleware
app.use(cors({
  origin: `http://localhost:${process.env.CLIENT_PORT}`
}));
app.use(json());

// Connect to MongoDB
connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/auth', require('./routes/auth').default);
app.use('/api/benefits', require('./routes/benefits').default);
app.use('/api/events', require('./routes/events.js').default);
app.use('/api/profile', require('./routes/profile.js').default);
app.use('/api/home', require('./routes/home.js').default);

const PORT = process.env.SERVER_PORT || 5005;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
