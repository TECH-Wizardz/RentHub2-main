const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('./db.js');

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + path.extreme(file.originalname));
    }
});

const upload = multer({ storage: storage});

const productRoutes = express.Router();
const userRoutes = express.Router();

const PORT = 4000;

let Product = require('./product');
let User = require('./user');

const product = require('./product');
const user = require('./user');

app.use(cors());
app.use(bodyParser.json());


// Login and Signup

userRoutes.route('/login').post(function(req,res) {
    const {email,password} =req.body;
    User.findOne({email:email},(err,user)=>{
        if(user){
           if(password === user.password){
               res.send({message:"login sucess",user:user})
           }else{
               res.send({message:"wrong credentials"})
           }
        }else{
            res.send("not register")
        }
    })
});

userRoutes.route('/register').post(function(req,res) {
    console.log(req.body) 
    const {name,email,password} =req.body;
    User.findOne({email:email},function(err,user){
        if(user){
            res.send({message:"user already exist"})
        }else {
            let user = new User({name,email,password})
            user.save(err=>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"sucessfull"})
                }
            })
        }
    })
})

// Products Functions Implementation

productRoutes.route('/').get(function(req, res) {
    Product.find(function(err, product) {
        if(err) {
            console.log(err);
        }else {
            res.json(product);
        }
    });
});

productRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Product.findById(id, function(err, product) {
        res.json(product);
    });
});

productRoutes.route('/update/:id').post(function(req, res) {
    Product.findById(req.params.id, function(err, product) {
    if(!product)
        res.status(404).send("Data is not found");
    else
    product.productName = req.body.productName,
    product.location = req.body.location,
    product.price = req.body.price,
    product.description = req.body.description,

    product.save().then(product => {
        res.json('Product Updated!');
    })
    .catch(err => {
        res.status(400).send("Update not possible");
    });
})
})

productRoutes.route('/add').post(upload.single("upload"), function(req, res) {
    let product = new Product(req.body);
    product.save()
    .then(product => {
        res.status(200).json({'Product': 'product added successfully'});
    })
    .catch(err => {
        res.status(400).send('adding new product failed');
    });
});

productRoutes.route('/:id').delete(function(req, res) {
    Product.findById(req.params.id)
    .then(product => product.remove().then(() => res.json({ success: true})))
    .catch(err => res.status(404).json({ success: false}));
});

app.use('/product', productRoutes);
app.use('/user', userRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});