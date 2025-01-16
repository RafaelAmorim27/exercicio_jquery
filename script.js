$(document).ready(function() {
    
    $('#task-form').on('submit', function(event) {
        event.preventDefault(); 
        let task = $('#task-input').val().trim();

        if (task) {
            $('.task-list').append(`<li>${task}</li>`);
            $('#task-input').val(''); 
        }
    });

    
    $('#cancel-button').on('click', function() {
        $('#task-input').val('');
    });

    
    $('.task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
