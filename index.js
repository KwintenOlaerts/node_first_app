var counter = function(arr){
  return 'There are ' + arr.length + ' elements in this array ';
  };


// console.log(__dirname)
// console.log(__filename)

// standard function
// function sayHi(){
//   console.log("hi");
// }

// function callFunction(fun){
//   fun();
// }

// // sayHi();
// // functions expression
// var sayBye = function(){
//  console.log('bye');
// };

// sayBye();

// callFunction(sayBye);

// var time = 0;

// var timer = setInterval(function(){
//   time += 2;
//   console.log(time + 'seconden zijn gepasseerd');
//   if (time > 5){
//     clearInterval(timer);
//   }
// }, 2000);


// console.log("Extra")

// const express = require("express");

// const app     = express();

// require("./routes/userRoutes")(app);


// const PORT    = 5000;


// app.listen(PORT, () => {
//     console.log(`Server running`);
//   });
  
// const express     = require("express");
// const bodyParser  = require("body-parser");

// ...

// app.use(bodyParser.json());


// app.post("/users/new", (req, res) => {

//     let email    = req.body.email
//     let username = req.body.username
  
//     jsonfile.readFile("./DB/users.json", function(err, content) {
  
//       content.push({ email: email, username: username });
  
//       console.log("added " + email + "to DB");
  
//       jsonfile.writeFile("./DB/users.json", content, function(err) {
//         console.log(err);
//       });
  
//       res.sendStatus(200);
//     });
//   });
