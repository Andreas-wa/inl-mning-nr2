
// const fs = require("fs");
// // //skriver på en fil
// // fs.writeFile("text.txt", " Hej hej ", (err)=>{
// //    console.log(err)
// // })

// //skriver på en fil
// fs.writeFile("text.txt", " hej hej hallå ", (err)=>{
//    console.log(err)
// })

// //skriver på en fil
// fs.writeFile("filename.txt", " NOOO ", (err)=>{
//    // console.log(err)
// })



// fs.readFile("text.txt", (err, data)=>{
//    err?  console.log(err): console.log(data.toString());
//   })
  

  
   const fs = require("fs");
   const http = require("http");
   const express = require("express");
   const app = express();
   app.get("/", (req, res)=>{
      res.send("Data!?");
   });

//   var server = http.createServer((req, res)=>{
//     res.write("NOOOOO!");
//     res.end();
//  });

   app.listen(8000);

   