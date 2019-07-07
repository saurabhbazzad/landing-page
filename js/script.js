$(()=>{

    $('#slide-push').hide()


    $('.campus-button').hover(function(){
        $(this).removeClass('btn-outline-light')
        $(this).addClass('btn-outline-danger')
    },
    function(){
        $(this).removeClass('btn-outline-danger')
        $(this).addClass('btn-outline-light')
    })

    $('.test2').on('mouseenter',function(e){
        $(this).children('div').show()
    })
    $('.test2').on('mouseleave',function(e){
        $(this).children('div').hide()
    })

    //For nested dropdown

    // $('.dropdown-submenu a.test').on("mouseenter", function(e){
    //     $(this).next('ul').show();
    //     e.stopPropagation();
    //     e.preventDefault();
    // });
    // $('.dropdown-submenu a.test').on("mouseleave",function(e){
    //     $(this).next('ul').hide()
    // })

    

    $('.test-special').on('mouseenter',function(e){
        $(this).children('ul').show()
    })
    $('.test-special').on('mouseleave',function(e){
        $(this).children('ul').hide()
    })


    $('.test').hover(function(e){
        $(this).next('ul').show()
    },function(e){
        $(this).next('ul').hide()
    })


    $('.testing-2').on('mouseenter',function(e){
        $(this).parent().parent().show()
        $(this).show()
        let something=$(this).parent().parent()
        console.log(something)
        console.log('fjvedfvfnl')
    })
    $('.testing-2').on('mouseleave',function(e){
        $(this).parent().parent().show()
        $(this).hide()
        let something=$(this).parent().parent()
        console.log(something)
        console.log('ngjnknvf')
    })



    $('#hamburger').on('click',function(e){
        $('#slide-push').toggle()
    })


    function w3_open() {
        document.getElementById("mySidebar").style.display = "block";
    }
      
    function w3_close() {
        document.getElementById("mySidebar").style.display = "none";
    }

    $('#hamburger').on('click',function(){
        w3_open()
    })
    $('#close-btn-slide-push-menu').on('click',function(){
        w3_close()
    })
})