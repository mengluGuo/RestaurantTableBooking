var options = JSON.parse(localStorage.getItem('booking_options'));
var selected_option_id = localStorage.getItem('selected_option');
var contact_details = JSON.parse(localStorage.getItem('person_info'));
var date = localStorage.getItem('selected_date');
var people_number = localStorage.getItem('people_number');
var booking_time = localStorage.getItem('booking_time');
var booking_option_name;

options.forEach(function (option) {
    if(selected_option_id == option.id)
        booking_option_name = option.name;
});

$(document).ready(function() {

    // create contact details elements
    $('#contact-details').append(
        $('<h4>').append(
            $('<u>').html(contact_details.title + ' ' + contact_details.first_name + ' ' + contact_details.last_name)
        ).css({'color':'blue', 'font-weight':'bold'})
    );
    $('#contact-details').append(
        $('<p>').html(contact_details.email)
    );
    $('#contact-details').append(
        $('<p>').html(contact_details.phone)
    );

    // create booking details elements
    $('#booking-details').append(
        $('<h4>').append(
            $('<u>').html(date)
        ).css({'color':'blue', 'font-weight':'bold'})
    );
    $('#booking-details').append(
        $('<h4>').html('East-Wind Edinburgh')
    );
    $('#booking-details').append(
        $('<h4>').html(booking_option_name)
    );
    $('#booking-details').append(
        $('<p>').html(people_number + " people at " + booking_time + ' (Restaurant)')
    );

    // characters counting
    var text_max = 200;
    $('#count_message').html("Remaining characters: " + text_max);
    $('#special-request').keyup(function () {
        var text_length = $('#special-request').val().length;
        var text_remaining = text_max - text_length;
        $('#count_message').html("Remaining characters: " + text_remaining);
    })
    
    // booking submit
    $('#submit').bind('click', function () {
        var booking_detail = {booking_option: selected_option_id,
            people_number: people_number,
            date: date,
            time: booking_time,
            contect_details: contact_details,
            message: $('#special-request').val()
        };
        alert(JSON.stringify(booking_detail));
    })
});