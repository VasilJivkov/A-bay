$(function () {
  $('#signUpForm').on('click', '.below button', function () {
    var belowCard = $('.below'),
      aboveCard = $('.above'),
      parent = $('.form-collection');
    parent.addClass('animation-state-1');
    setTimeout(function () {
      belowCard.removeClass('below');
      aboveCard.removeClass('above');
      belowCard.addClass('above');
      aboveCard.addClass('below');
      setTimeout(function () {
        parent.addClass('animation-state-finish');
        parent.removeClass('animation-state-1');
        setTimeout(function () {
          aboveCard.addClass('turned');
          belowCard.removeClass('turned');
          parent.removeClass('animation-state-finish');
        }, 300)
      }, 10)
    }, 300);
  });

  // var $newPass = $('#newPassword');
  // var $confirmPass = $('#confirmNewPass');

  // function validatePassword(){
  //   if($newPass.val() != $confirmPass.val()) {
  //     $confirmPass.get(0).setCustomValidity("Passwords Don't Match");
  //   } else {
  //     confirm_password.setCustomValidity('');
  //   }
  // }


//   var $field = $('#confirmPwdField');

//   var validate = function()  {
//   if ($newPass.val() !== $confirmPass.val()) {
//     $field.addClass('input-group');
//     $field.removeClass('incorrectPass');
//   } else {
//     $field.addClass('incorrectPass');
//     $field.removeClass('input-group');
//   }
// };

// $newPass.on('change', validate)
// $confirmPass.on('keyup', validate);

var password = document.getElementById("newPassword")
var confirm_password = document.getElementById("confirmNewPassword");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

});