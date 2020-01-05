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
    $(".teamwork__item").on('mouseover', function(){
      var teamwork_photo = $(this).children(".teamwork__photo");
      teamwork_photo.children(".teamwork__overlay").removeClass("none");
      var teamwork_info = $(this).children(".teamwork__info");
      teamwork_info.addClass("teamwork__info-active");
      teamwork_info.children(".teamwork__name").addClass("teamwork__name-active ");
    });
    $(".teamwork__item").on('mouseout', function(){
      var teamwork_photo = $(this).children(".teamwork__photo");
      teamwork_photo.children(".teamwork__overlay").addClass("none");
      var teamwork_info = $(this).children(".teamwork__info");
      teamwork_info.removeClass("teamwork__info-active");
      teamwork_info.children(".teamwork__name").removeClass("teamwork__name-active ");
    });

    $(".services__item").on('mouseover', function(){
      var services_name = $(this).find(".services__name--icon");
      services_name.addClass("services__name--icon-active");
      var services_info = $(this).find(".services__info");
      services_info.addClass("services__info-active");
      var services_info_t = $(this).find(".services__info--text");
      services_info_t.addClass("services__info--text-active");

    });
    $(".services__item").on('mouseout', function(){
      var services_name = $(this).find(".services__name--icon");
      services_name.removeClass("services__name--icon-active");
      var services_info = $(this).find(".services__info");
      services_info.removeClass("services__info-active");
      var services_info_t = $(this).find(".services__info--text");
      services_info_t.removeClass("services__info--text-active");
    });
    $(".bestseller__configuration--button").on('mouseover', function(){
      var bestseller_price = $(this).parent(".bestseller__configuration");
      var aa = bestseller_price.parent(".bestseller__item");
      aa.find(".bestseller__price").addClass("bestseller__price-active");
      aa.find(".bestseller__price--text").addClass("bestseller__price--text-active");
      aa.find(".bestseller__price--time").addClass("bestseller__price--text-active");
    });
    $(".bestseller__configuration--button").on('mouseout', function(){
      var bestseller_price = $(this).parent(".bestseller__configuration");
      var bestseller_parent = bestseller_price.parent(".bestseller__item");
      bestseller_parent.find(".bestseller__price").removeClass("bestseller__price-active");
      bestseller_parent.find(".bestseller__price--text").removeClass("bestseller__price--text-active");
      bestseller_parent.find(".bestseller__price--time").removeClass("bestseller__price--text-active");
    });
    $(".blog__more").on('click', function() {
      $(this).addClass('none');
      $('.blog__item').removeClass('none');
    });
    $(".btn-nav").on("click", function() {
      var target = $(this).data("target");
      $(target).toggleClass("nav__list--open");
  });
  });