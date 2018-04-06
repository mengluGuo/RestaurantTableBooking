$(document).ready(function () {
    $('#submit').bind('click', function () {
        var input_title = $('#title option:selected').text();
        var input_first_name = $('#first-name').val();
        var input_last_name = $('#last-name').val();
        var input_email = $('#email').val();
        var input_phone = $('#phone').val();
        var person_info = {title: input_title, first_name: input_first_name, last_name: input_last_name, email: input_email, phone: input_phone};

        // alert(JSON.stringify(person_info));
        localStorage.setItem('person_info', JSON.stringify(person_info));
    })
});