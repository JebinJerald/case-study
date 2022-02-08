function checkusrname(){
    let usrname = document.getElementById("usrname");
    let usrnamerror = document.getElementById("usrnamerror");

    if(usrname.value=="admin"){
        return true;
    } else{
        usrnamerror.innerHTML = "Username is incorrect";
        usrnamerror.style.color = "red";
        return false;
    }
}
function checkpwd(){
    let pwd = document.getElementById("pwd");
    let pwderror = document.getElementById("pwderror");

    if(pwd.value==12345){
        return true;
        } else{
            pwderror.innerHTML = "Password is incorrect";
            pwderror.style.color = "red";
            return false;
        }
}

