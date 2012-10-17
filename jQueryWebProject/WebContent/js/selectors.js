$(document).ready(function() {
  
  //applying css properties
  $(':text').focus(function() {
                              //  $(this).css('background-color' ,'yellow');
  });
  $(':text').blur(function() {
                              //   $(this).css('background-color', 'white');
  });
        //multiple selectors
  $('#bttn1_click, p').click(function() {
          //    alert("something is clicked");
  });

  //change value of a element in html
  $('#bttn_click').click(function() {
                                    $(this).attr('value', 'Changed Bttn');
  });

  // email attribute setting and basic validation
  var email_default ="Enter your email address here :";

  $('input[type="email"]').attr("value", email_default).focus(function() {
          if($(this).val() == email_default) {
                           $(this).attr('value', '');
          }
  }).blur(function() {
                     if($(this).val() == '') {
                                      $(this).attr('value', email_default);
                     }
  });

});
