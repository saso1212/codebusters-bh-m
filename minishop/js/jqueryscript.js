$(document).ready(() => {
    

    let clickCount = 0;
    let addToCard=$('#AddToCart');
   
    addToCard.on('click',function(){

        close();
        debugger;
        clickCount++;
        let title = productTitle.innerText;
        let totalPrice;
        let quantity;
        if (count == 0) {
            quantity = 1;
            totalPrice = parseFloat(productPrice.innerText);
        }
        else {
            quantity = count;
            totalPrice = result;
        }
        let shopObj={
            title:title,
            totalPrice:totalPrice,
            quantity:quantity
        }
    let itemsArray= localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
    itemsArray.push(shopObj);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    
    let priceBox=$('.box2');
    priceBox.html("");
    let totalPriceForAll=0;
    debugger;
    $.each(itemsArray,function( key,element){
       
       debugger;
        let priceItems=`
        <h3 class="purchaseTitle">${element.title} </h3>
        <h4 class="description"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, laboriosam.</h3>
        <p  style="padding:8px; font-size:17px;" ><span class="price"><b>Price: ${element.totalPrice} $</b></span> <span class="quantity"><b>Quanitity:${element.quantity}</b></span> </p>`
      
        priceBox.append(priceItems);
        totalPriceForAll+=parseFloat((element.totalPrice).toFixed(2));
        
    })
    $('#total-price').html("");
    let total=` <p style="padding-left:10px; font-size:20px;"><b>Total Price: <span id="totoal-price"> ${totalPriceForAll.toFixed(2)} $ </b></span></p>`
    $('#total-price').append(total);
    $('.btn-back').css('display','none');
  
})
$('#purche').on('click',function(){
    localStorage.clear();
    $(".container-right").hide("slide", {direction: "right"}, 1000);
        
})
$('.btn-back').on('click',function(){
    $(this).css('display','none');
    $(".container-right").show("slide", {direction: "right"},1000);
})

$(".container-right").hide();
    $("#AddToCart").on("click", () => {
        $(".container-right").show("slide", {direction: "right"}, 1000);
    });
    $("#btnClose").on("click", () => {
        $(".container-right").hide("slide", {direction: "right"}, 1000,()=>{
            $('.btn-back').css('display','block');
        });
    });

 
});