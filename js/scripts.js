function Order (type, size, crust, topping) {
    this.type = type;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
}
Order.prototype.fullOrder = function () {
    return this.type + " with the crust of " + this.crust + " and " + this.topping + " as topping.";
  };
function Charges(quantity,size,delivery){
    this.quantity = quantity;
    this.size = size;
    this.delivery = delivery;
}
Charges.prototype.finalTotal = function () {
    return this.price * this.quantity + this.delivery;
  };
var sizePrice = [1200, 800, 500];
  var deliverPrices = [0, 200];
  var additionalFees = [250,  200, 150];

$(document).ready(function () {
    $('form#order').submit(function (event) {
        event.preventDefault();
        var pizzaType = $("#pizza-type").val();
  
        var pizzaSize = parseInt($('#size').val());
        var pizzaCrust = $("#crust-type").val();
  
        var pizzaTop = $("#toppings-available").val();
  
        var pizzaQuantity = parseInt($('#quantity').val());
  
        var pizzaPoint = parseInt($('#delivery').val());
  
        var price = sizePrice[pizzaSize - 1];
  
        var DeliveryCost = deliverPrices[pizzaPoint - 1];
  
        newOrder = new Order(pizzaType, pizzaSize, pizzaCrust, pizzaTop);
        newCharges = new Charges(price, pizzaQuantity, DeliveryCost);
        if (pizzaPoint == 1){
        alert("You've ordered: " + newOrder.fullOrder() + ". Continue to see your total bill");
        alert("Your total bill is: " + newTotal.finalTotal());
        }else{
            if(pizzaPoint == 2){
                prompt("Please enter delivery location");
                alert("Order recieved. please proceed");
                alert("You've ordered : " + newOrder.fullOrder() + ". Click okay to see total bill");
                alert("Your total bills is : " + newCharges.finalTotal());
            }
        }
    })
})
  
  
  
           
    
