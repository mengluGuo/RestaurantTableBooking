var selected_option;

$(document).ready(function () {
    get_selected_option();

    // set up booking information
    var display_str = localStorage.getItem('meal_type') + ' times available for ' + localStorage.getItem('people_number') + ' on ' + localStorage.getItem('selected_date');
    $('#bookingInfo').text(display_str);

    // create html elements
    options.forEach(function (option) {
        var option_div_id = 'option-div-' + option.id;
        var option_input_id = "option-input-" + option.id;

        // create booking option elements
        $('#option-group').append(
            $('<div>', {id: option_div_id, class: "form-check form-check-inline"}).append(
                $('<input>', {
                    id: option_input_id,
                    class: "form-check-input",
                    type: "radio",
                    name: "booking-options",
                    checked: (option.id == selected_option) ? true : false
                })
            )
        );
        $('#' + option_div_id).append(
            $('<label>', {class: "form-check-label", for: option_input_id, style: "font-size: 1.5em"}).html(option.name)
        );

        // create time option elements
        time_options_creation(selected_option);

        // refersh time option elements
        $('#' + option_input_id).change(function () {
            if(this.checked){
                localStorage.setItem('selected_option', option.id);
                get_selected_option();
                time_options_creation(selected_option);
            }
        })
    });

    // method to get selected_option from local storage
    function get_selected_option() {
        options = JSON.parse(localStorage.getItem('booking_options'));
        selected_option = localStorage.getItem('selected_option');
    }

    // method to create time option elements
    function time_options_creation(theoption) {
        $('#time_options').empty();
        options.forEach(function (option) {
            // create time option elements
            if(option.id == theoption){
                option.times.forEach(function (time) {
                    var isfull = false;

                    // check if current booking time is full or not
                    option.full_times.forEach(function (full_time) {
                        if(time == full_time)
                            isfull = true;
                    });

                    // create time element and bind click event
                    $('#time_options').append(
                        $('<a>', {id:time.replace(':','') ,href:"enter_details.html", class:"btn btn-primary", disabled: isfull}).html(time)
                    );
                    $('#'+time.replace(':','')).bind('click', function () {
                        localStorage.setItem('booking_time', time);
                    });
                    if(isfull){
                        $('#'+time.replace(':','')).click(function (e) {
                            e.preventDefault();
                        })
                    }
                });

            }
        });
    }

});