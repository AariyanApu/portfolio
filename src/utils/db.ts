import mongoose from 'mongoose';

// Connect to database
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    throw new Error('Error connecting to database');
  }
};

export default connect;
