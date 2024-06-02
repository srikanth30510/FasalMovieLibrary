const mongoose = require('mongoose');

mongoose
  .connect("mongodb+srv://srikanth891922:srikanth@cluster0.tsxxjxz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connecting to MongoDB cloud');
  })
  .catch((err) => {
    console.log(err);
  });





