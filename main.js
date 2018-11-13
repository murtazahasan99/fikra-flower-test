console.log("hello world")


let fs = require("fs");
fs.readFile("./asset/flower.txt", (err, data) => {
    if (err) return;
    let mm = data.toString()


    var array = mm.split("\n")
    console.log(" Count the number of rows:-")
    let co = array.length;
    console.log(co)


    console.log("List the flower start S")
    let startsWithS = array.filter((flower) => flower.startsWith("S"));
    console.log(startsWithS)



    let startwithoutS = co - startsWithS.length
    console.log(" Count the number of Flow that not start with letter 'S'.")
    console.log(startwithoutS)


    console.log("List the flower start with first letter of your name")
    let startsWithM = array.filter((flower) => flower.startsWith("M"));
    console.log(startsWithM)


    
    console.log("List all the flower the name length is 5.")
    let len= array.filter((flower) => flower.length == 5)
    console.log(len)

})