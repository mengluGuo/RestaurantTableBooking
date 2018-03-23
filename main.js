$(document).ready(function() {
    $('#embeddingDatePicker')
        .datepicker({
            format: 'dd/mm/yyyy'
        })
        .on('changeDate', function() {
            // Set the value for the date input
            $("#selectedDate").val($("#embeddingDatePicker").datepicker('getFormattedDate'));
            alert($("#selectedDate").val());
        });
});
