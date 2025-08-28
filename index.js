var name = "Amany";
var GPA = 3.99;

//console.log(typeof name);
//console.log(typeof GPA);

const yourGpa = function(name, GPA) {
    console.log("Hello " + name);

    if (GPA < 3) {
        console.log("you failed !");
    } else if (GPA < 3.5) {
        console.log("you success !");
    } else {
        console.log("you get A+ !");
    }
};

yourGpa("Amany", GPA);
//yourGpa(name, GPA);