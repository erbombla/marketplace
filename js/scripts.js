$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var name1Input = $("input#name1").val();
    var addressInput = $("input#address").val();
    var animalInput= $("input#animal").val();
    var exclamationInput = $("input#exclamation").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();

    $(".name1").text(name1Input);
    $(".address").text(addressInput);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#receipt").show();

    event.preventDefault();
  });
});
