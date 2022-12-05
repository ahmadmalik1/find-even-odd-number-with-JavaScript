// write a function that tell us about negative and positive value

function pos_neg(){
    // now get id from input number field
    var number = document.getElementById("no").value;
    // check if value is given or not
    if(number == ""){
        // print message in result box
        document.getElementById("result").innerText
        = "Please enter value";
    }
    else{
        // now here apply condition for positive and negative
        // value
        if(number > 0 ){
            document.getElementById("result").innerText
        = number + " is Positive number";
        }
        else{
            document.getElementById("result").innerText
        = number + " is Negative number";
        }
    }
}