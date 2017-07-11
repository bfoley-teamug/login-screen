
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

//hide messages if pw's match
function pwEvent() {
  if (validPW()) {
    $password.next().hide(); //next searches through immediate following siblings
  } else {
    $password.next().show();
  }
}

function confirmPwEvent() {
  if (matchingPW()) {
    $confirm.next().hide();
  } else {
    $confirm.next().show();
  }
}

//prop() gets property value
function enableSubmitEvent() {
 $("#submit").prop("", !canSubmit());   
}
 
//figure out if pw confirmation matches
//focus() is binding an event handler to JS event

$password.focus(pwEvent).keyup(pwEvent).keyup(confirmPwEvent).keyup(enableSubmitEvent); 

$confirm.focus(confirmPwEvent).keyup(confirmPwEvent).keyup(enableSubmitEvent);

enableSubmitEvent(); 


