var input = $("#new-item-input")



input.keydown(function(e) {	
  console.log("hello");
  if (e.keyCode == "13") {
    var valueToSave = input.val();
    addListItem("katyasList", valueToSave);
  }
})

onNewListItem("katyasList", function(value) {
  $("#list-display").append("<div>" + value + "</div>")
  console.log("hi");
  console.log(value);
}) 