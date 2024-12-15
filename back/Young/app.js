const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/YoungEng', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => {
    console.error('Failed to connect to MongoDB', err);
});

// Middleware
app.use(bodyParser.json());

// Import routes
const showAllPrograms = require('./routes/showAllPrograms');
const removeProgramme = require('./routes/RemoveProgramme');
const removeMember = require('./routes/RemoveMember');
const modifyProgrammes = require('./routes/ModifyProgrammes');
const modifyMember = require('./routes/modifyMember');
const findProgramme = require('./routes/FindProgramme');
const addWithParent = require('./routes/AddWithParent');
const addToParent = require('./routes/AddToParent');
const addProgramme = require('./routes/AddProgramme');
const addGroupe = require('./routes/AddGroupe');

// Use routes
app.use('/api', showAllPrograms);
app.use('/api', removeProgramme);
app.use('/api', removeMember);
app.use('/api', modifyProgrammes);
app.use('/api', modifyMember);
app.use('/api', findProgramme);
app.use('/api', addWithParent);
app.use('/api', addToParent);
app.use('/api', addProgramme);
app.use('/api', addGroupe);

// Routes
app.get('/', (req, res) => {
    res.send('Hello World');
});


// Replace 'your_connection_string' with your MongoDB URI


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});