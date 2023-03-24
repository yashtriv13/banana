$(document).ready(function() {
  // Attach a click event handler to the button
  $('#myButton').click(function() {
    // Make an Ajax call to get the new content
    $.ajax({
      url: 'newContent.html',
      success: function(data) {
        // Replace the content of the div with the new content
        $('#myDiv').html(data);
      },
      error: function() {
        // Handle errors if the Ajax call fails
        alert('Failed to replace the div.');
      }
    });
  });
});