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

$(document).ready(function(){   

	var mybutton =document.getElementById('listbtn');
    mybutton.onclick =()=>{

	var request;
	if (window.XMLHttpRequest) {
		request = new XMLHttpRequest();
	} else {
		request = new ActiveXObject("Microsoft.XMLHTTP");
	}
	request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
	request.onreadystatechange = function() {
		if ((request.readyState===4) && (request.status===200)) {
			var items = JSON.parse(request.responseText);
			var output = '';
            for (var key in items) {
                if (items[key].completed ==true){
                output += '<input type="checkbox"  class="inp" name="check" checked disabled="disabled">' + items[key].title + '</input>' +'<br>';
                }
                output += '<input type="checkbox" class="inp" name="uncheck[]">' + items[key].title + '</input>' +'<br>';

				document.getElementById('result').innerHTML = output;
            }
		}

		$('#result input:checkbox').on("change", function() {
			var len = $('#result input[name="uncheck[]"]:checked').length;

            if (len=5){
				alert('Congrats! 5 Tasks have been successfully completed');
				window.setTimeout( ()=> {
					window.location.reload();
				  }, 1500);
			}
			});

        request.send();
        mybutton.onclick =()=>{
            location.reload();
        }
	}
}

});