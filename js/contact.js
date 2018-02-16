$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var email = $("input#email").val();
            var message = $("textarea#message").val();

            // Post to Formspree
            $.ajax({
                url: "//formspree.io/info@anchorages.io",
                type: "POST",
                dataType: "json",
                data: {
                    email: email,
                    message: message
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' id='closeBtn' onclick='closeMessage()' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Thanks for getting in touch! We will let you know when the beta is ready.</strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('.contactForm').trigger("reset");
                }
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});

function closeMessage() {
  $('#success').html('');
}
