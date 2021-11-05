$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  console.log(wScroll, $('.testimonial').offset());

  if(wScroll>$('.working-space-container').offset().top-437 && wScroll<$('.testimonial').offset().top-200){
      $('.working-space-container').addClass('paralax')
  }else{
    $('.working-space-container.paralax').removeClass('paralax')
  }

  if(wScroll>$('.testimonial').offset().top-400){
    $('.testimonial figure img').each(function(i){
        setTimeout(function(){
            $('.testimonial figure img').eq(i).addClass('appear')
        },300*i+1);
    })
  }if(wScroll<=$('.testimonial').offset().top-400){
    $('.testimonial figure img.appear').each(function(i){
        setTimeout(function(){
            $('.testimonial figure img.appear').eq(i).removeClass('appear')
        },300*i+1);
    })
  }
});
