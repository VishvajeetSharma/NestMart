import mongoose from 'mongoose';
// import { database_url } from '../src/constant.js';

const connectDb = async () => {
  try {
    //Local
    const connection = await mongoose.connect(process.env.DATABASE_URI);
    //PRODUCTION 

    // const connection = await mongoose.connect(process.env.DATABASE_URI);
    // console.log(database_url)

    if (connection) {
      const { host, port, name } = mongoose.connection;
      console.log(  `Database connected successfully!, Host: ${host}, Port: ${port}, Database: ${name}`);
    } else {
      console.log('Database connection failed!');
    }
  } catch (error) {
    console.error(error, 'Database connection failed!');
  }
};

export default connectDb;
