let totalCost = 0;
let totalRewards = 0;

$(".add-to-cart").click(function() {
    let item = $("input").val();
    if (item === "1") {
        totalCost = totalCost + 5.00;
        totalRewards = totalRewards + 1;
        $(".items-in-cart").append(`<li>[1]</li>`);
    } else if (item === "2") {
       totalCost = totalCost + 2.00;
        totalRewards = totalRewards + 1;   
        $(".items-in-cart").append(`<li>[2]</li>`);
    } else if (item === "3") {
    	totalCost = totalCost + 4.00;
        totalRewards = totalRewards +1;
        $(".items-in-cart").append(`<li>[3]</li>`);
    } else  {
    	alert ("You Must Enter Item Number");
    }    
});

$(".check-out").click(function(){
	$(".total").show();
    
    if(totalCost > 15 || totalRewards > 10) {
        $(".reward").text("You earned free delivery!");
    } 
    
    if (totalCost > 500 || totalRewards > 50) {
        $(".secret-reward").text("You've earned a secret T-shirt & a coupon for $50 off your next order!");
    }  
    
     $(".total-cost").text(`$${totalCost.toFixed(2)}`);
    $(".total-rewards").text(`${totalRewards} points`);
});

$(".reset").click(function(){
	location.reload();
});