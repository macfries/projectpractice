var array = [];		
function info() {
    lnameinput = document.getElementById('lname').value;
    fnameinput = document.getElementById('fname').value;
    
    if (lnameinput == "" || fnameinput == ""){
        alert("Hoy! All fields are required");  
    } else {
        var fullname = lnameinput +" "+ fnameinput;
        array.push(fullname)
        var itemList ='';
        var nameArray='';
        var fnm  = '';
        var lnm = '';

        for (var item = 0; item < array.length; item++) {
            nameArray = array[item].split(" ");
            fnm += nameArray[0] + "<br>";
            lnm += nameArray[1] + "<br>";
            itemList += ambot + "<br>";
            console.log(item);
            // console.log(fnm);
            // console.log(lnm);

        }
        resetInputField(['lname','fname']);
        document.getElementById("counting").innerHTML = itemList;
        document.getElementById("itemDisplayfname").innerHTML = fnm;
        document.getElementById("itemDisplaylname").innerHTML = lnm;
    }
}
function resetInputField(txtFields){ // []
    for (var item = 0; item < txtFields.length; item++) { 
        document.getElementById(txtFields[item]).value = '';
    }
}
var resultD;
var firstNumber, secondNumber;
function calc() { 
    firstNumber  = document.getElementById("fnumber").value;
    secondNumber  = document.getElementById("snumber").value;
    
    if (firstNumber == "" || secondNumber == ""){
        alert("Hoy! All fields are required");  
    } else {
        console.log("Success");
        

    }
}


// function addNum(){
            
//     calc();
//     resultD = firstNumber+secondNumber;
//     document.getElementById("resultDisplay").innerHTML = resultD;
// }

// function minusNum(){
// calc();
// resultD = firstNumber-secondNumber;
// document.getElementById("resultDisplay").innerHTML = resultD;
// }
// function multiplyNum(){
// calc();
// resultD = firstNumber*secondNumber;
// document.getElementById("resultDisplay").innerHTML = resultD;
// }
// function divideNum(){
// calc();
// resultD = firstNumber/secondNumber;
// document.getElementById("resultDisplay").innerHTML = resultD;
// }


