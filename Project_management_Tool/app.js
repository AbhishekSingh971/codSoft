const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Project = require("./models/project");
mongoose.connect("mongodb+srv://m001-student:abhi@sandbox.1tynyfo.mongodb.net/Ecommerce").then(() => {
    console.log('database connected');
}).catch((err) => {
    console.log(err);
})
app.get("/", (req, res) => {
    res.redirect("/add-Project")
})
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'Public')));
app.use(express.urlencoded({ extended: true }));
const port = 3000;
app.get("/show-Projects",async (req, res) => {
    const allProjects = await Project.find({});
    console.log(allProjects)
    res.render('Show_Projects',{allProjects})
})
app.get('/add-Project', (req, res) => {
    res.render("add_item");
})
app.post('/add-Project', async(req, res) => {
    console.log(req.body);
    const { fname, lname, email, title, image1,image2,image3,image4, content } = req.body;

    const isdatastored=await Project.create({ name: fname + " " + lname, email: email, photo: [image1,image2,image3,image4], text: content, title: title });
    if (!isdatastored) {
        console.log('Err');
    }
    console.log('Data stored Success');
    res.redirect("/show-Projects")
})
app.get("/read-Project/:id",async(req, res) => {
    const { id } = req.params;
    const item = await Project.findById(id);
    console.log(item);
    res.render('read_Projects',{item})
})
app.post("/delete-Project/:id",async (req, res) => {
    const { id } = req.params;
    const deleteitem=await Project.findByIdAndDelete(id);
    if (!deleteitem) {
        console.log('Item not deleted');
    }
    console.log('Item deleted');
    res.redirect("/show-Projects")
})
app.listen(port, () => { console.log('Server is running at port 3000') });