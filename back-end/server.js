const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/friendsList', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
  

// Create a scheme for friends in the museum
const friendSchema = new mongoose.Schema({
  id: String,
  avatar: String,
  name: String,
  gender: String,
  job: String,
  ethnicity: String,
  race: String,
  email: String,
});

friendSchema.set('toJSON', {
  virtuals: true
});

const Friend = mongoose.model('Friend', friendSchema);

app.get('/api/friends', async (req, res) => {
  try {
    let friends = await Friend.find();
    res.send({friends});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post('/api/friends', async (req, res) => {
    const friend = new Friend({
    id: req.body.id,
    avatar: req.body.avatar,
    name: req.body.name,
    gender: req.body.gender,
    job: req.body.job,
    ethnicity: req.body.ethnicity,
    race: req.body.race,
    email: req.body.email, 
  });
  try {
    await friend.save();
    res.send({friend});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/friends/:id', async (req, res) => {
  try {
    await Friend.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3002, () => console.log('Server listening on port 3002!'));
