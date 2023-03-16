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
            itemList += ( item + 1 )+ "<br>";
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

function outcome() { 
    var firstNumber = Number(document.getElementById("fnumber").value);
    var seconNumber = Number(document.getElementById("snumber").value);
    var total = 0;
    
    if (document.getElementById("addition").checked){
        total = firstNumber + seconNumber;
    }
    else if (document.getElementById("subtraction").checked){ 
        total = firstNumber - seconNumber;
    }
    else if (document.getElementById("multiplication").checked){
        total = firstNumber * seconNumber;
    }
    else{
        total = firstNumber / seconNumber;
    }
    document.getElementById("resultArea").innerHTML = total; 
} 
