var options = [
    {id:1,
        name:'Standard Menu',
        info:'',
        times:['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'],
        full_times:['17:30', '19:00']
    },
    {id:2,
        name:'15% off Night Owl Offer',
        info:'This offer is available from March 21, 2018 until July 31, 2018, subject to availability as displayed in the booking interface. Not available in conjunction with other offers. Offer excludes service.',
        times:['20:30', '21:00', '21:30'],
        full_times:['20:30']
    }];

localStorage.setItem('booking_options', JSON.stringify(options));

$(document).ready(function() {

    // set up bootstrap-datepicker
    $('#embeddingDatePicker')
        .datepicker({
            format: 'dd/mm/yyyy'
        })
        .on('changeDate', function() {
            // Set the value for the date input
            $("#selectedDate").val($("#embeddingDatePicker").datepicker('getFormattedDate'));
            localStorage.setItem('selected_date', $("#selectedDate").val());
        });

    // set up booking option-group
    options.forEach(function (option) {
        var optionid = "option" + option.id;
        var bookingid = "booking" + option.id;
        $('#option-group').append(
            $('<li>',{id:optionid, class:'list-group-item'}).append(
                $('<h4>', {class:"card-title"}).html(option.name))
        );
        $('#' + optionid).append(
            $('<p>', {class:"card-text"}).html(option.info)
        );
        $('#' + optionid).append(
            $('<a>', {id:bookingid, href:"time_options.html", class:"btn btn-primary"}).html('Book')
        );
        $('#' + bookingid).bind('click', function () {
            localStorage.setItem('meal_type', $('#meal-type option:selected').text().capitalize());
            localStorage.setItem('people_number', $('#people-number option:selected').text());
            localStorage.setItem('selected_option', option.id);
        })
    });
});

// capitalize the first letter of a string
String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};
