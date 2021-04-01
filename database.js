const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://root:root@cluster0.znkxu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true });

const Student = mongoose.model("Student", {
    id: String,
    name: String,
    description: String
});

module.exports = { Student };