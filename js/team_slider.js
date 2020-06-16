$(function(){

    const delay = 5000
    const index = $('.about-author').length
    let curIndex = 0

    initSlider()
    autoPlay()

    function initSlider(){
        const sizeContainer = 100 * index
        const sizeBoxSingle = 100 / index

        $('.about-author').css('width',sizeBoxSingle+'%')
        $('.scroll-wraper').css('width',sizeContainer+'%')

        for(let i = 0; i < index; i++){
            if(i == 0)
                $('.slider-bullets').append('<span style="background-color:rgb(120,120,120);"></span>')
            else
                $('.slider-bullets').append('<span></span>')
        }

    }

    function autoPlay(){
        setInterval(function(){
            curIndex++
            if(curIndex == index)
                curIndex = 0
            goToSlider(curIndex)
        },delay)
    }

    function goToSlider(curIndex){
        const offsetX = $('.about-author').eq(curIndex).offset().left - $('.scroll-wraper').offset().left

        $('.slider-bullets span').css('background-color','rgb(174,174,174)')
        $('.slider-bullets span').eq(curIndex).css('background-color','rgb(120,120,120)')
        $('.scroll-team').stop().animate({'scrollLeft':offsetX})
    }

    $(window).resize(function(){
        $('.scroll-team').stop().animate({'scrollLeft':0})
    })

})