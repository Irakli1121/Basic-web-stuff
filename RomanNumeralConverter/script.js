let submit = document.getElementById("submitBtn");
let input = document.getElementById("roman");

let m,cm,d,cd,c,xc,l,xl,x,ix,v,iv,i;

let res = 0;

let romanString;

let regex = "^(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$";



submit.addEventListener('click', () =>{
    

    console.log(input.value);

    romanString = input.value;

    
    if (romanString.match(regex)){
        console.log("Valid Roman Input");
        convert();
        clearInput();
    } else {
        console.log("Invalid Roman Input");
        alert("Invalid input!!!");
    }

    

})

input.addEventListener('keyup', (e) =>{
    if (e.keyCode == 13){
        console.log(input.value);

        romanString = input.value;

    
    if (romanString.match(regex)){
        console.log("Valid Roman Input");
        convert();
        clearInput();
    } else {
        console.log("Invalid Roman Input");
        alert("Invalid input!!!");
    }
        
        


    }
})


function clearInput(){
    input.value = "";
}

//"^(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$"

function convert(){
    

    let saveInput = romanString;

    let newRegEx;

    let size = romanString.length;
    console.log(size);

    newRegEx = /CM/g;

    let res = romanString.replace(newRegEx, "");
    
    cm = (romanString.length - res.length) / 2;

    /* ---------- */

    romanString = res;

    newRegEx = /M/g;

    res = romanString.replace(newRegEx, "");

    m = romanString.length - res.length;

    /* ---------- */

    romanString = res;

    newRegEx = /CD/g;

    res = romanString.replace(newRegEx, "");

    cd = (romanString.length - res.length) / 2;

    /* ----------- */
    romanString = res;

    newRegEx = /D/g;

    res = romanString.replace(newRegEx, "");

    d = romanString.length - res.length;

    /* ---------- */

    romanString = res;

    newRegEx = /XC/g;

    res = romanString.replace(newRegEx, "");

    xc = (romanString.length - res.length) / 2;

    /* ---------- */

    romanString = res;

    newRegEx = /C/g;

    res = romanString.replace(newRegEx, "");

    c = romanString.length - res.length;

    /* ---------- */

    romanString = res;

    newRegEx = /XL/g;

    res = romanString.replace(newRegEx, "");

    xl = (romanString.length - res.length) / 2;

    /* ---------- */

    romanString = res;

    newRegEx = /L/g;

    res = romanString.replace(newRegEx, "");

    l = romanString.length - res.length;


    /* ---------- */

    romanString = res;

    newRegEx = /IX/g;

    res = romanString.replace(newRegEx, "");

    ix = (romanString.length - res.length) / 2;

    /* ---------- */

    romanString = res;

    newRegEx = /X/g;

    res = romanString.replace(newRegEx, "");

    x = romanString.length - res.length;

    /* ---------- */

    romanString = res;

    newRegEx = /IV/g;

    res = romanString.replace(newRegEx, "");

    iv = (romanString.length - res.length) / 2;

    /* ---------- */

    romanString = res;

    newRegEx = /V/g;

    res = romanString.replace(newRegEx, "");

    v = romanString.length - res.length;

    /* ---------- */

    romanString = res;

    newRegEx = /I/g;

    res = romanString.replace(newRegEx, "");

    i = romanString.length - res.length;







    sum = (m * 1000) + (cm* 900) + (d * 500) + (cd * 400) + (c * 100) + (xc * 90) + (l * 50) + (xl*40) + (x * 10) + (ix * 9) + (v * 5) + (iv * 4) + i;

    let answer = document.getElementById("answer");

    answer.innerHTML = "<h3>" + saveInput + " converted to arabic numeral is: " + sum;
}