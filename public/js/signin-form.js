$(function() {
    $('#login-form-link').click(function(e) {
        $("#login-form").delay(100).fadeIn(100);
        $("#register-form").fadeOut(100);
        $('#register-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

    $('#register-form-link').click(function(e) {
        $("#register-form").delay(100).fadeIn(100);
        $("#login-form").fadeOut(100);
        $('#login-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

    $('#login-form').validate({
        rules: {
            username: {
                required: true,
            },
            password: {
                required: true,
            }
        },
        messages: {
            username: {
                required: "You must specify username"
            },
            password: {
                required: "You must specify password"
            }
        }
    });

    $('#register-form').validate({
        rules: {
            username: {
                required: true,
                minlength: 2,
                maxlength : 20
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 4,
                maxlength: 20
            },
            confirm_password: {
                required: true,
                minlength: 4,
                maxlength: 20
            }
        },
        messages: {
            username: {
                required: "please enter a username",
            },
            email: {
                required: "please enter a email address"
            },
            password: {
                required: "please enter the desired password",
                minlength: jQuery.validator.format("At least {0} characters are necessary"),
                maxlength: jQuery.validator.format("At most {0} characters are possible")

            },
            confirm_password: {
                required: "please confirm the desired password",
                minlength: jQuery.validator.format("At least {0} characters are necessary"),
                maxlength: jQuery.validator.format("At most {0} characters are possible")
            }
        }
    });


});
