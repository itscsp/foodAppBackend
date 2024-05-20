import mongoose from "mongoose";

export const connectDB = async () => {
    // mongodb+srv://chethanspoojary1:XtdQ9mBMbEi6DnF2@cluster0.kjuhayg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    await mongoose.connect('mongodb+srv://chethanspoojary1:XtdQ9mBMbEi6DnF2@cluster0.kjuhayg.mongodb.net/food-del').then(() => console.log('DB CONNECTED'));
}
