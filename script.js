var input = $("new-item-input")



input.keydown(function(e) {	
  
  if (e.keyCode == "13") {
    var valueToSave = input.val();
    addListItem(valueToSave);
  }
})

onNewListItem("katyasList", function(value) {
  $("#list-display").append("<div>" + value + "</div>")
  console.log("hi");
  console.log(value);
}) 