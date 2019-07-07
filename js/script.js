$(()=>{
    $('.campus-button').hover(function(){
        $(this).removeClass('btn-outline-light')
        $(this).addClass('btn-outline-danger')
    },
    function(){
        $(this).removeClass('btn-outline-danger')
        $(this).addClass('btn-outline-light')
    })

    // $('.dropdown-submenu a.test').on("mouseenter", function(e){
    //     $(this).next('ul').toggle();
    //     e.stopPropagation();
    //     e.preventDefault();
    // });
    // $('.dropdown-submenu a.test').on("mouseleave",function(e){
    //     $(this).next('ul').toggle()
    // })

    $('.test2').on('mouseenter',function(e){
        $(this).children('div').toggle()
    })
    $('.test2').on('mouseleave',function(e){
        $(this).children('div').toggle()
    })

    $('.test-special').on('mouseenter',function(e){
        $(this).children('ul').toggle()
    })
    $('.test-special').on('mouseleave',function(e){
        $(this).children('ul').toggle()
       
    })


    $('.test').hover(function(e){
        $(this).next('ul').toggle()
    },function(e){
        $(this).next('ul').toggle()
    })

})