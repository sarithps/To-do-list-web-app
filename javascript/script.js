var uname = document.getElementById("uname");
var pswd = document.getElementById("pswd");
var checkbx = document.getElementsByClassName("check");

// function for form validation
function vald(redirect){
    if(uname.value=="admin" && pswd.value=="12345"){
        redirect();
    }
    else{
        alert("invalid username and password");
        return false;
    }

    function redirect(){
        document.getElementById("valForm").setAttribute("action","home.html");
        return true;
    }
}

// function to display message when user ticks 5 checkboxes
function check(){
    var promise = new Promise(function(resolve,reject){
        count = 0;
        val = false;
        for (var i=0; i<checkbx.length; i++) {
        if (checkbx[i].checked === true){
            count++;
            if(count ===5){
                val = true;
            }
            else{
                val = false;
            }
        }
        }
        if(val){
            resolve("Congrats. 5 Tasks have been Successfully Completed");
        }
    });

    promise.then(function(s){
        alert(s);
    })
}