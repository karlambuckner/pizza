function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.value = [];
}

Pizza.prototype.price = function(userSelection) {
  var Total=0; // base value
  var inp = userSelection;
  for (var i=0, sum=0;i < inp.length; i++) {
    if (inp[i].checked) {
      Total+=parseInt(inp[i].value)
      }
    }

  return Total;
  }

Pizza.prototype.Selections = function(userSelection) {
  var Values = "";
  var inp = userSelection;
  for (var i=0; i < inp.length; i++) {
    if (inp[i].checked) {
      Values+=inp[i].id + " ";
    }
  }
  return Values;
  }

// User Interface//
$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    var userSelection = document.getElementsByTagName("input");
    var newPizza = new Pizza();
    var price = newPizza.price(userSelection);
    var userChoices = newPizza.Selections(userSelection)

    $(".show-price").hide();
    $(".show-price").show();
    $("#pizzaOrder").text(" " + userChoices);
    $("#pizzaPrice").text(" $" + price);
    
  });
});
