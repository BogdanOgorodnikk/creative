$(document).ready(function(){
    $(".banner__slider").owlCarousel({
      items: 1,
      nav: true,
      navText: ["",""],
      loop: true
    });
    $(".accordeon__box").on('click', function(){
        $(this).next(".accordeon__describe").toggle(300);
        var acc__ame = $(this).children(".accordeon__name");
        acc__ame.children(".accordeon__headline").toggleClass('accordeon__active')
        var acc__icon = $(this).children(".accordeon__status");
        acc__icon.children(".accordeon__icon").toggleClass('none');
        acc__icon.children(".accordeon__icon--second").toggleClass('none')
    });
    $(".portfolio__item").on('mouseover', function(){
      $(this).children(".portfolio__item--overlay").removeClass("none");
    });
    $(".portfolio__item").on('mouseout', function(){
      $(this).children(".portfolio__item--overlay").addClass("none");
    });
    $('.portfolio__menu--item h3').on('click', function() {
      var get_id = this.id;
      var get_current = $('.portfolio__box .' + get_id);
  
      $('.portfolio__item').not(get_current).hide(500);
      get_current.show(500);
    });
    $('#showall').on('click', function() {
      $('.portfolio__item').show(500);
    });
    $(".product__box").on('mouseover', function(){
      $(this).addClass("product__box-active");
      var product_icon = $(this).children(".product__icon")
      product_icon.children(".product__icon--photo").addClass("product__icon--photo-active");
      var product_item = $(this).children(".product__item")
      product_item.children(".product__item--text").addClass("product__item--text-active");
    });
    $(".product__box").on('mouseout', function(){
      $(this).removeClass("product__box-active");
      var product_icon = $(this).children(".product__icon")
      product_icon.children(".product__icon--photo").removeClass("product__icon--photo-active");
      var product_item = $(this).children(".product__item")
      product_item.children(".product__item--text").removeClass("product__item--text-active");
    });
    $(".clients__slider").owlCarousel({
      items: 1,
      loop: true
    });
  });