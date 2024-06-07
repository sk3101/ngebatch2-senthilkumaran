//import express
import express from 'express';

//create express instance 
const app = express();


//create an endpoint
app.get('/hello',(req,res) => {
    res.write ("HEllo response from the express server");
    res.end();    
}
);

//creating another endpoint
app.get('/users',(req,res) => {
    res.write ("Hello users");
    res.write ("End of the message");
    res.end();    
}
);

//creating another endpoint
app.get('/courses',(req,res) => {
    var courses = ['angular','node','react','api'];
    //res.write (courses);
    //res.end();    
    res.send(courses);
}
);

//creating another endpoint
app.get('/product',(req,res) => {
    var product = {
        "id": "P100",
        "name": "Laptop",
        "price": 352323,
    };
    res.send(product);
}
);

//creating an endpoint with parameters - https://localhost:3400/users/1

app.get('/users/:id',(req,res)=>{
    res.send('Good Evening!!' + req.params.id)
});

// http://localhost:3400/courses/byid?id=13
app.get('/courses/byid',(req,res)=>{
    const query = req.query.id;
    res.send('Good Evening!!, you are enrolled with id - ' + query)
});

app.use(express.json())

//creating an endpoint for a post request
app.post('/loginUser',(req,res)=> {
    console.log("To create a user login - pass the info as post body", req.body);
    const object = req.body.user;
    res.json({result:object})

});

//creating an endpoint for a post request
app.post('/createProduct',(req,res)=> {
    console.log("To create a product", req.body);
    const objectp = req.body.product;
    res.json({result:objectp})

});


const PORT = 3400;

//listen to a port no
app.listen(3400, '127.0.0.1', ()=> {
    console.log(`Server is running at port no ${PORT}`);
});