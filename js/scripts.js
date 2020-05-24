function Pizza(toppings,size,crust,quantity,type){
    this.toppings = toppings;
    this.size = size;
    this.crust = crust;
    this.quantity = quantity;
    this.type = type;
}


$(document).ready(function(){
    $("form#order").submit(function(event) {
        event.preventDefault();
        var pizzaType= $('select#pizza-type').val();
        var crustType = $('select#crust-type').val();
        var pizzaSize = $('select#size').val();
        var quantity = $('input#quantity').val();
        var pizzaToppings = [];

        $.each(("input[name='flavours']:checked"), function(){
            pizzaToppings.push($(this).val());

        });
        var userChoice = new Pizza(pizzaType,crustType,pizzaSize,quantity,pizzaToppings);

        Pizza.prototype.myChoice = function(){
            return "You have chosen " + this.type + this.crust + this.size + pizzaToppings.join(" , ") + this.quantity + "!"
        }
         $('select#pizza-type').val("");
         $('select#crust-type').val("");
         $('select#size').val("");
         $('input#quantity').val("");
         $("input[name='flavours']").val("")

         $('#check').last().click(function(){
             $('#summary').append(userChoice.myChoice())
         });
    });
});
    
        
           
    
