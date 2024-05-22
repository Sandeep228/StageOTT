import mongoose from "mongoose";

const mongoURI: string = 'mongodb+srv://sandeep:sOgCoKWjRAGqPRVH@cluster0.c4adroo.mongodb.net/stageott?retryWrites=true&w=majority'


export const connectMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {})
    console.log('MongoDB connected')
  } catch (error) {
    console.error(error);
  }
}

