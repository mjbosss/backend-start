import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';

const PORT = 5000;
const MONGO_URL = 'mongodb+srv://admin:admin@cluster0.jxjn3gs.mongodb.net/?retryWrites=true&w=majority';
const app = express();

app.use(express.json());
app.use('/api', router);

async function startApp() {
    try {
        await mongoose.connect(MONGO_URL, {useUnifiedTopology: true, useNewUrlParser: true});
        app.listen(PORT, () => console.log('server started on port ' + PORT));
    } catch (e) {
        console.log(e, 'error suka');
    }
}
startApp()