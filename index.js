// for importing json server
const jsonServer=require("json-server")

// create json server using json server library
const ContactServer=jsonServer.create();

// set up a route for db.json file
const router=jsonServer.router("db.json")

// returns middleware used by json server
// for conversion of json data to js
const middleware=jsonServer.defaults();

// setting port for sever
const port=4000 || process.env.PORT;

// use middleware and router in server
ContactServer.use(middleware);
ContactServer.use(router);

// for listeninng request 
ContactServer.listen(port,()=>{
    console.log(
        `Contact server started at port number : ${port}`
    );
})