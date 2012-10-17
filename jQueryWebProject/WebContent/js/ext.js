$(window).load(function() {
                              // use window load to perform some action
  var countElement = $('#area').find('#iframe').length;
});


$('#image').load(function() {
                       // use of on load event of particular id
                             });

$(document).ready(function(){
  //document ready and hide a function on click
                             $('#para').click(function() {
                                      $('#para').hide();
                             });

                             // search a name from a list of names and provide for display
                             $('#search_a_name').keyup(validate).change(validate);

});

function validate() {
         var textBoxValue = $(this).val();

         if(jQuery.trim(textBoxValue).length > 0) {
                  $("#list_names").find("li:contains('"+textBoxValue+"')").addClass("highlight");
                  $("#list_names").find("li:not(:contains('"+textBoxValue+"'))").removeClass("highlight");
         }
         else {
                   $("#list_names").find("li:not(:contains('"+textBoxValue+"'))").removeClass("highlight");
         }
}