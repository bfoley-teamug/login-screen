
var $password = $("#password");
var $confirm = $("#confirm_password"); 

$("form span").hide();

function validPW() {
 return $password.val().length > 8; 
}

function matchingPW() {
 return $password.val() === $confirm.val(); 
}

function canSubmit() {
 return validPW() && matchingPW(); 
}

