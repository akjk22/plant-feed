// plant interface

$(document).ready(function() {
  $("#feed").click(function() {
    const fedPlant = stateChanger(blueFood);
  $("#soilResults").text(fedPlant.soil);
  });

  $("#yuck").click(function() {
    const yuckyPlant = stateChanger(yuckyFood);
    $("#soilResults").text(yuckyPlant.soil);
  });
});

