// write a function for even odd

function even_odd(){
    // now get the ids from input field
    var number = document.getElementById("no").value;

    // now check first if value is given or not
    if(number == ""){
        // then print message in result box
        document.getElementById("result").innerText
        = "Please provide number";
        return false;
    }
    else{
        // now apply condition for even odd
        if(number % 2 == 0){
            document.getElementById("result").innerText
        = number + " is even number";
        } 
        else{
            document.getElementById("result").innerText
        = number + " is odd number";
        }
    }
}

