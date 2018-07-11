//============================
$(document).ready(function(){
	front_image();
//   ajaxCall();
});  

function front_image(){
  if ($("#one-of-a-kind-for-home").length !== 0) {
    $('#side_bar_t').append(
        $('<div class="sidebar_right_box medium-up--four-sixths">'+
          '<img class="sidebar_right" src="https://cdn.shopify.com/s/files/1/0688/5329/files/656_Life_front.jpg?16673769578496182080">' + 
        '</div>'));
      $('nav').removeClass('medium-up--one-fifth').addClass('medium-up--two-sixths');
      $('main').removeClass('medium-up--four-fifths').addClass('medium-up--one-whole'); 
   }
}

function redDeals(){
  var str = "DEALS";
  var inc = str.includes('DEALS');
  if (inc ===  true){

//   	$('.site-nav__link').addClass('colorRed');
  }
}

// function ajaxCall(){
//   axios({
//     method:"GET",
//     url: "https://www-oneofakindforhome-com.myshopify.com/admin/products.json"
//   })
//   .then(function(res){console.log(res)});
// };
