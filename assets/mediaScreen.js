function checkPosition() {
    if (window.matchMedia('(max-width: 580px)').matches) {
      $(".img_w100").addClass(".img_w100_sm").removeClass(".img_w100");
      $(".float_left").addClass(".float_left_sm").removeClass(".float_left");
      $(".title").addClass(".title_sm").removeClass(".title");
      $(".outer_coat").addClass(".outer_coat_sm").removeClass(".outer_coat");
      $(".front_page_category").addClass(".front_page_category_sm").removeClass(".front_page_category");
    } else {
      $(".img_w100_sm").addClass(".img_w100").removeClass(".img_w100_sm");
      $(".float_left_sm").addClass(".float_left").removeClass(".float_left_sm");
      $(".title_sm").addClass(".title").removeClass(".title_sm");
      $(".outer_coat_sm").addClass(".outer_coat").removeClass(".outer_coat_sm");
      $(".front_page_category_sm").addClass(".front_page_category").removeClass(".front_page_category_sm");
    }
}