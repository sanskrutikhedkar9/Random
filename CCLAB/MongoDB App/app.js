const app = require('express')();
const http = require('http').Server(app);

const mongoose=require('mongoose');


mongoose.connect("mongodb+srv://sanskrutikhedkar21:<password>@cluster0.6ye6lo6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const User = require('./models/userModel');

async function insert(){
    await User.create({
        name:'Sanskruti',
        email:'sanskrutikhedkar09@gmail.com'
    });
}
insert();

http.listen(3000, function(){
    console.log('Server is running');
});