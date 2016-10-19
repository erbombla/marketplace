$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var name1Input = $("input#name1").val();
    var addressInput = $("input#address").val();

    $(".name1").text(name1Input);
    $(".address").text(addressInput);

    $("#receipt").show();

    event.preventDefault();
  });
});
