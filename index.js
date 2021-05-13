const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./authRouter');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use('/auth', authRouter);

const start = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://qwerty:qwerty123@cluster0.olxm7.mongodb.net/forum?retryWrites=true&w=majority`,
      { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
    );
    app.listen(PORT, () => console.log(`server start on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
