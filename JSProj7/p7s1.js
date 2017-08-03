/**
 * @author Sharon Tender
 */

// got this from Murach's jQuery book p 171
// same as using $(document).ready(function() {
$(function(){
   $( ".button" ).click(function() {
      $( ".p1" ).hide();
      //$( "h1 + p" ).toggle("fold");

    });

});
