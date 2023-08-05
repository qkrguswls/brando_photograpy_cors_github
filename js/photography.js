(function($, window){
    window.onload = function() {
        setTimeout(function(){
            scrollTo(0,0);
        },100);
    }
    
    // Header Mobile Button
    $('.mobile-btn').on({
        click(e){
            e.preventDefault();
            $(this).toggleClass('on');
            $('.nav-menu').slideToggle(300);
        }
    });
    
    let sec1ScrTop = $('#section1').offset().top;
    let sec2ScrTop = $('#section2').offset().top; 
    let sec3ScrTop = $('#section3').offset().top; 
    let sec4ScrTop = $('#section4').offset().top; 
    let sec5ScrTop = $('#section5').offset().top; 
    let sec6ScrTop = $('#section6').offset().top; 
    let sec7ScrTop = $('#section7').offset().top; 
    let sec8ScrTop = $('#section8').offset().top; 
    let sec9ScrTop = $('#section9').offset().top; 
    let sec10ScrTop = $('#section10').offset().top; 
    let sec11ScrTop = $('#section11').offset().top; 
    let sec12ScrTop = $('#section12').offset().top; 
    let sec13ScrTop = $('#section13').offset().top; 
    let sec14ScrTop = $('#section14').offset().top; 
    let sec15ScrTop = $('#section15').offset().top; 
    let footerScrTop = $('#footer').offset().top; 
    let scrNew = 0;
    let scrOld = scrNew;

    $(window).scroll(function(){
        // Nav
        // ABOUT
        if ($(window).scrollTop() > sec5ScrTop - 100 && $(window).scrollTop() < sec6ScrTop - 100) {
            $('.nav-btn').eq(0).addClass('on');
        } else {
            $('.nav-btn').eq(0).removeClass('on');
        }
        // SERVICES
        if ($(window).scrollTop() >= sec6ScrTop - 100 && $(window).scrollTop() < sec8ScrTop - 100) {
            $('.nav-btn').eq(1).addClass('on');
        } else {
            $('.nav-btn').eq(1).removeClass('on');
        }
        // PORTFOLIO
        if ($(window).scrollTop() >= sec8ScrTop - 100 && $(window).scrollTop() < sec9ScrTop - 100) {
            $('.nav-btn').eq(2).addClass('on');
        } else {
            $('.nav-btn').eq(2).removeClass('on');
        }
        // AWORDS
        if ($(window).scrollTop() >= sec9ScrTop - 100 && $(window).scrollTop() < sec10ScrTop) {
            $('.nav-btn').eq(3).addClass('on');
        } else {
            $('.nav-btn').eq(3).removeClass('on');
        }
        // BLOG
        if ($(window).scrollTop() > sec10ScrTop - 100 && $(window).scrollTop() < sec15ScrTop - 200) {
            $('.nav-btn').eq(4).addClass('on');
        } else {
            $('.nav-btn').eq(4).removeClass('on');
        }
        // CONTACT
        if ($(window).scrollTop() >= sec15ScrTop - 160) {
            $('.nav-btn').eq(5).addClass('on');
        } else {
            $('.nav-btn').eq(5).removeClass('on');
        }
        // !-- Nav END --!

        // Header Scroll
        scrNew = $(window).scrollTop();

        if ($(window).scrollTop() === 0) { 
            $('#header').removeClass('up');
            $('#header').removeClass('down');
        } else {
            console.log('scrNew - scrOld : ' + (scrNew - scrOld));
            if ((scrNew - scrOld) > 0) {
                $('#header').addClass('down');
                $('#header').removeClass('up');
            }
            if ((scrNew - scrOld) < 0) {
                $('#header').removeClass('down');
                $('#header').addClass('up');
            }
        }
        scrOld = scrNew;
        // !-- Header Scroll END --!
    });


    $(window).scroll(function(){
        // Section Scroll
        if ($(window).scrollTop() === 0) {
            $('#section2').removeClass('on');
            $('#section3').removeClass('on');
            $('#section4').removeClass('on');
            $('#section5').removeClass('on');
            $('#section6').removeClass('on');
            $('#section7').removeClass('on');
            $('#section8').removeClass('on');
            $('#section9').removeClass('on');
            $('#section10').removeClass('on');
            $('#section11').removeClass('on');
            $('#section12').removeClass('on');
            $('#section13').removeClass('on');
            $('#section14').removeClass('on');
        }

        if ($(window).scrollTop() >= sec2ScrTop - 500) {
            $('#section2').addClass('on');
        }
        if ($(window).scrollTop() >= sec3ScrTop - 500) {
            $('#section3').addClass('on');
        }
        if ($(window).scrollTop() >= sec4ScrTop - 500) {
            $('#section4').addClass('on');
        }
        if ($(window).scrollTop() >= sec5ScrTop - 500) {
            $('#section5').addClass('on');
        }
        if ($(window).scrollTop() >= sec6ScrTop - 500) {
            $('#section6').addClass('on');
        }
        if ($(window).scrollTop() >= sec7ScrTop - 500) {
            $('#section7').addClass('on');
        }
        if ($(window).scrollTop() >= sec8ScrTop - 500) {
            $('#section8').addClass('on');
        }
        if ($(window).scrollTop() >= sec9ScrTop - 500) {
            $('#section9').addClass('on');
        }
        if ($(window).scrollTop() >= sec10ScrTop - 500) {
            $('#section10').addClass('on');
        }
        if ($(window).scrollTop() >= sec11ScrTop - 500) {
            $('#section11').addClass('on');
        }
        if ($(window).scrollTop() >= sec12ScrTop - 500) {
            $('#section12').addClass('on');
        }
        if ($(window).scrollTop() >= sec13ScrTop - 500) {
            $('#section13').addClass('on');
        }
        if ($(window).scrollTop() >= sec14ScrTop - 500) {
            $('#section14').addClass('on');
        }
        // !-- Section Scroll END --!
    });

    // section8
    // gallery-btn
    const galleryBtn = $('#section8 .gallery-btn');
    let btnIndex = 0;

    galleryBtn.each(function(index){
        $(this).click(function(e){
            e.preventDefault();
            btnIndex = index;
            responseGallery();

            galleryBtn.removeClass('on');
            $(this).addClass('on');
        });
    });

    // 반응형
    const imgWidth = 800;
    const imgHeight1 = 797;
    const imgHeight2 = 1200;
    const heightRate1 = imgHeight1/imgWidth;
    const heightRate2 = imgHeight2/imgWidth;
    const gallery = $('.gallery');
    let winW = $(window).innerWidth();
    let galleryWidth = 1180;
    let rows = 4;
    let cols = 3;
    let imgW = $('.gallery img').innerWidth(); 
    let imgH1 = imgW*heightRate1;
    let imgH2 = imgW*heightRate2;
    let ulH = ((imgH1 * 2) + (imgH2 * 2)) - (40 * (rows - 1));

    $(window).resize(function(){
        responseGallery();
    });
    
    function responseGallery() {
        winW = $(window).innerWidth();

        if (winW > 1170) {
            cols = 3;
        } else if (winW > 600) {
            cols = 2;
        } else {
            cols = 1;
        }

        if (winW <= 1170) {
            galleryWidth = winW + 40;
        } else {
            galleryWidth = 1180;
        }
        imgW = (galleryWidth / cols) - 40;
        
        imgH1 = imgW*heightRate1;
        imgH2 = imgW*heightRate2;
        
        // gallery
        $('.gallery img').css({width: imgW});
        $('.list').removeClass('on');

        if (btnIndex === 0) { //ALL
            $('.list').removeClass('on');

            if (cols === 3) {
                $('.list1').stop().show().animate({top: (imgH1 + 40) * 0, left: 0}, 300);
                $('.list2').stop().show().animate({top: (imgH2 + 40) * 0, left: (imgW * 1) + (40 * 1)}, 300);
                $('.list3').stop().show().animate({top: (imgH1 + 40) * 0, left: (imgW * 2) + (40 * 2)}, 300);

                $('.list4').stop().show().animate({top: (imgH1 + 40), left: (imgW * 0) + (40 * 0)}, 300);
                $('.list5').stop().show().animate({top: (imgH2 + 40), left: (imgW * 1) + (40 * 1)}, 300);
                $('.list6').stop().show().animate({top: (imgH1 + 40), left: (imgW * 2) + (40 * 2)}, 300);

                $('.list7').stop().show().animate({top: (imgH1 + 40 + imgH2 + 40), left: (imgW * 0) + (40 * 0)}, 300);
                $('.list8').stop().show().animate({top: (imgH2 + 40 + imgH1 + 40), left: (imgW * 1) + (40 * 1)}, 300);
                $('.list9').stop().show().animate({top: (imgH1 + 40 + imgH2 + 40), left: (imgW * 2) + (40 * 2)}, 300);

                $('.list10').stop().show().animate({top: (imgH1 + 40 + imgH2 + 40 + imgH1 + 40), left: (imgW * 0) + (40 * 0)}, 300);
                $('.list11').stop().show().animate({top: (imgH2 + 40 + imgH1 + 40 + imgH2 + 40), left: (imgW * 1) + (40 * 1)}, 300);
                $('.list12').stop().show().animate({top: (imgH1 + 40 + imgH2 + 40 + imgH1 + 40), left: (imgW * 2) + (40 * 2)}, 300);

                rows = 4; 
                ulH = ((imgH1 * 2) + (imgH2 * 2)) + (40 * (rows - 1));
            } else if (cols === 2) {
                $('.list1').stop().show().animate({top: (imgH1 + 40) * 0, left: 0}, 300); 
                $('.list2').stop().show().animate({top: (imgH2 + 40) * 0, left: (imgW * 1) + (40 * 1)}, 300);
                
                $('.list3').stop().show().animate({top: (imgH1 + 40) * 1, left: (imgW * 0) + (40 * 0)}, 300);
                $('.list4').stop().show().animate({top: (imgH2 + 40) * 1, left: (imgW * 1) + (40 * 1)}, 300);
                
                $('.list6').stop().show().animate({top: (imgH1 + 40) * 2, left: (imgW * 0) + (40 * 0)}, 300);
                $('.list5').stop().show().animate({top: (imgH2 + 40) * 2, left: (imgW * 1) + (40 * 1)}, 300);

                $('.list7').stop().show().animate({top: ((imgH1 + 40) * 2) + ((imgH2 + 40) * 1), left: (imgW * 0) + (40 * 0)}, 300);
                $('.list8').stop().show().animate({top: ((imgH2 + 40) * 2) + ((imgH1 + 40) * 1), left: (imgW * 1) + (40 * 1)}, 300);
                
                $('.list9').stop().show().animate({top: ((imgH1 + 40) * 3) + ((imgH2 + 40) * 1), left: (imgW * 0) + (40 * 0)}, 300);
                $('.list10').stop().show().animate({top: ((imgH2 + 40) * 3) + ((imgH1 + 40) * 1), left: (imgW * 1) + (40 * 1)}, 300);
                
                $('.list12').stop().show().animate({top: ((imgH1 + 40) * 4) + ((imgH2 + 40) * 1), left: (imgW * 0) + (40 * 0)}, 300);
                $('.list11').stop().show().animate({top: ((imgH2 + 40) * 4) + ((imgH1 + 40) * 1), left: (imgW * 1) + (40 * 1)}, 300);

                rows = 6; 
                ulH = ((imgH1 * 2) + (imgH2 * 4)) + (40 * (rows - 1));
            } else {
                $('.list1').stop().show().animate({top: ((imgH1 + 40) * 0) + ((imgH2 + 40) * 0), left: 0}, 300); 
                $('.list2').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 0), left: 0}, 300);             
                $('.list3').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 1), left: 0}, 300);
                $('.list4').stop().show().animate({top: ((imgH1 + 40) * 2) + ((imgH2 + 40) * 1), left: 0}, 300);
                $('.list6').stop().show().animate({top: ((imgH1 + 40) * 2) + ((imgH2 + 40) * 2), left: 0}, 300);
                $('.list5').stop().show().animate({top: ((imgH1 + 40) * 2) + ((imgH2 + 40) * 3), left: 0}, 300);
                $('.list7').stop().show().animate({top: ((imgH1 + 40) * 3) + ((imgH2 + 40) * 3), left: 0}, 300);
                $('.list8').stop().show().animate({top: ((imgH1 + 40) * 4) + ((imgH2 + 40) * 3), left: 0}, 300);               
                $('.list9').stop().show().animate({top: ((imgH1 + 40) * 4) + ((imgH2 + 40) * 4), left: 0}, 300);
                $('.list10').stop().show().animate({top: ((imgH1 + 40) * 5) + ((imgH2 + 40) * 4), left: 0}, 300);                
                $('.list12').stop().show().animate({top: ((imgH1 + 40) * 5) + ((imgH2 + 40) * 5), left: 0}, 300);
                $('.list11').stop().show().animate({top: ((imgH1 + 40) * 5) + ((imgH2 + 40) * 6), left: 0}, 300);

                rows = 12; 
                ulH = ((imgH1 * 6) + (imgH2 * 6)) + (40 * (rows - 1));
            }

            $('.list').addClass('on');
            $('.gallery ul').stop().animate({height: ulH}, 300);
        } else if (btnIndex === 1) { //NATURE
            $('.list').removeClass('on');
            $('.list1').hide();
            $('.list3').hide();
            $('.list7').hide();
        
            switch(cols) {
                case 3:
                    $('.list2').stop().show().animate({top: 0, left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list4').stop().show().animate({top: 0, left: (imgW * 1) + (40 * 1)}, 300);
                    $('.list6').stop().show().animate({top: 0, left: (imgW * 2) + (40 * 2)}, 300);
                
                    $('.list5').stop().show().animate({top: (imgH2 + 40), left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list8').stop().show().animate({top: (imgH2 + 40), left: (imgW * 1) + (40 * 1)}, 300);
                    $('.list9').stop().show().animate({top: (imgH2 + 40), left: (imgW * 2) + (40 * 2)}, 300);

                    $('.list10').stop().show().animate({top: (imgH2 + 40 + imgH1 + 40), left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list11').stop().show().animate({top: (imgH2 + 40 + imgH2 + 40), left: (imgW * 1) + (40 * 1)}, 300);
                    $('.list12').stop().show().animate({top: (imgH2 + 40 + imgH1 + 40), left: (imgW * 2) + (40 * 2)}, 300);

                    rows = 3; 
                    ulH = (imgH1 * 1) +(imgH2 * 2) + (40 * (rows - 1));
                    break;
                case 2:
                    $('.list2').stop().show().animate({top: (imgH2 + 40) * 0, left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list4').stop().show().animate({top: (imgH2 + 40) * 0, left: (imgW * 1) + (40 * 1)}, 300);
                    
                    $('.list5').stop().show().animate({top: (imgH2 + 40) * 1, left: (imgW * 0) + (40 * 0)}, 300);           
                    $('.list6').stop().show().animate({top: (imgH2 + 40) * 1, left: (imgW * 1) + (40 * 1)}, 300);
                    
                    $('.list8').stop().show().animate({top: ((imgH2 + 40) * 1) + ((imgH1 + 40) * 1), left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list9').stop().show().animate({top: ((imgH2 + 40) * 2) + ((imgH1 + 40) * 0), left: (imgW * 1) + (40 * 1)}, 300);
                    
                    $('.list10').stop().show().animate({top: ((imgH2 + 40) * 2) + ((imgH1 + 40) * 1), left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list11').stop().show().animate({top: ((imgH2 + 40) * 2) + ((imgH1 + 40) * 1), left: (imgW * 1) + (40 * 1)}, 300);
                    
                    $('.list12').stop().show().animate({top: ((imgH2 + 40) * 2) + ((imgH1 + 40) * 2), left: (imgW * 1) + (40 * 1)}, 300);

                    rows = 5; 
                    ulH = (imgH1 * 2) + (imgH2 * 3) + (40 * (rows - 1));
                    break;
                default:
                    $('.list2').stop().show().animate({top: (imgH2 + 40) * 0, left: 0}, 300);
                    $('.list4').stop().show().animate({top: (imgH2 + 40) * 1, left: 0}, 300);                   
                    $('.list6').stop().show().animate({top: (imgH2 + 40) * 2, left: 0}, 300);           
                    $('.list5').stop().show().animate({top: (imgH2 + 40) * 3, left: 0}, 300);                    
                    $('.list8').stop().show().animate({top: ((imgH2 + 40) * 3) + ((imgH1 + 40) * 1), left: 0}, 300);
                    $('.list9').stop().show().animate({top: ((imgH2 + 40) * 4) + ((imgH1 + 40) * 1), left: 0}, 300);                    
                    $('.list10').stop().show().animate({top: ((imgH2 + 40) * 4) + ((imgH1 + 40) * 2), left: 0}, 300);
                    $('.list11').stop().show().animate({top: ((imgH2 + 40) * 5) + ((imgH1 + 40) * 2), left: 0}, 300);                 
                    $('.list12').stop().show().animate({top: ((imgH2 + 40) * 5) + ((imgH1 + 40) * 3), left: 0}, 300);

                    rows = 9; 
                    ulH = (imgH1 * 3) + (imgH2 * 6) + (40 * (rows - 1));
            }

            $('.list').addClass('on');
            $('.gallery ul').stop().animate({height: ulH}, 300);
        } else if (btnIndex === 2) { //OBJECT
            $('.list').removeClass('on');
            $('.list1').hide();
            $('.list4').hide();
            $('.list5').hide();
            $('.list10').hide();
            $('.list11').hide();

            switch(cols) {
                case 3:
                    $('.list2').stop().show().animate({top: 0, left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list3').stop().show().animate({top: 0, left: (imgW * 1) + (40 * 1)}, 300);
                    $('.list6').stop().show().animate({top: 0, left: (imgW * 2) + (40 * 2)}, 300);
                    
                    $('.list8').stop().show().animate({top: (imgH2 + 40), left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list7').stop().show().animate({top: (imgH1 + 40), left: (imgW * 1) + (40 * 1)}, 300);
                    $('.list9').stop().show().animate({top: (imgH2 + 40), left: (imgW * 2) + (40 * 2)}, 300);

                    $('.list12').stop().show().animate({top: (imgH1 + 40 + imgH1 + 40), left: (imgW * 1) + (40 * 1)}, 300);

                    rows = 3; 
                    ulH = ((imgH1 * 2) + (imgH2 * 1)) + (40 * (rows - 1));
                    break;
                case 2:
                    $('.list2').stop().show().animate({top: ((imgH1 + 40) * 0) + ((imgH2 + 40) * 0), left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list3').stop().show().animate({top: ((imgH1 + 40) * 0) + ((imgH2 + 40) * 0), left: (imgW * 1) + (40 * 1)}, 300);
                    
                    $('.list6').stop().show().animate({top: ((imgH1 + 40) * 0) + ((imgH2 + 40) * 1), left: (imgW * 0) + (40 * 0)}, 300);                   
                    $('.list8').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 0), left: (imgW * 1) + (40 * 1)}, 300);
                    
                    $('.list7').stop().show().animate({top: ((imgH1 + 40) * 0) + ((imgH2 + 40) * 2), left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list9').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 1), left: (imgW * 1) + (40 * 1)}, 300);

                    $('.list12').stop().show().animate({top: ((imgH1 + 40) * 2) + ((imgH2 + 40) * 1), left: (imgW * 1) + (40 * 1)}, 300);

                    rows = 4; 
                    ulH = (imgH1 * 2) + (imgH2 * 2) + (40 * (rows - 1));
                    break;
                default:
                    $('.list2').stop().show().animate({top: ((imgH1 + 40) * 0) + ((imgH2 + 40) * 0), left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list3').stop().show().animate({top: ((imgH1 + 40) * 0) + ((imgH2 + 40) * 1), left: (imgW * 0) + (40 * 0)}, 300);                   
                    $('.list6').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 1), left: (imgW * 0) + (40 * 0)}, 300);                   
                    $('.list8').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 2), left: (imgW * 0) + (40 * 0)}, 300);                   
                    $('.list7').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 3), left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list9').stop().show().animate({top: ((imgH1 + 40) * 2) + ((imgH2 + 40) * 3), left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list12').stop().show().animate({top: ((imgH1 + 40) * 3) + ((imgH2 + 40) * 3), left: (imgW * 0) + (40 * 0)}, 300);

                    rows = 7; 
                    ulH = (imgH1 * 3) + (imgH2 * 4) + (40 * (rows - 1));
            }

            $('.list').addClass('on');
            $('.gallery ul').stop().animate({height: ulH}, 300);
        } else if (btnIndex === 3) { //PEOPLE
            $('.list').removeClass('on');
            $('.list2').hide();
            $('.list4').hide();
            $('.list6').hide();
            $('.list7').hide();
            $('.list9').hide();
        
            switch(cols) {
                case 3:
                    $('.list1').stop().show().animate({top: 0, left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list3').stop().show().animate({top: 0, left: (imgW * 1) + (40 * 1)}, 300);
                    $('.list5').stop().show().animate({top: 0, left: (imgW * 2) + (40 * 2)}, 300);
                    
                    $('.list8').stop().show().animate({top: (imgH1 + 40), left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list10').stop().show().animate({top: (imgH1 + 40), left: (imgW * 1) + (40 * 1)}, 300);
                    $('.list12').stop().show().animate({top: (imgH1 + 40), left: (imgW * 2) + (40 * 2)}, 300);

                    $('.list11').stop().show().animate({top: (imgH1 + 40 + imgH2 + 40), left: (imgW * 0) + (40 * 0)}, 300);

                    rows = 3; 
                    ulH = ((imgH1 * 2) + (imgH2 * 1)) + (40 * (rows - 1));
                    break;
                case 2:
                    $('.list1').stop().show().animate({top: ((imgH1 + 40) * 0) + ((imgH2 + 40) * 0), left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list3').stop().show().animate({top: ((imgH1 + 40) * 0) + ((imgH2 + 40) * 0), left: (imgW * 1) + (40 * 1)}, 300);
                   
                    $('.list5').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 0), left: (imgW * 0) + (40 * 0)}, 300);     
                    $('.list8').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 0), left: (imgW * 1) + (40 * 1)}, 300);
                    
                    $('.list10').stop().show().animate({top: ((imgH1 + 40) * 2) + ((imgH2 + 40) * 0), left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list12').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 1), left: (imgW * 1) + (40 * 1)}, 300);
                    
                    $('.list11').stop().show().animate({top: ((imgH1 + 40) * 2) + ((imgH2 + 40) * 1), left: (imgW * 0) + (40 * 0)}, 300);

                    rows = 4; 
                    ulH = ((imgH1 * 3) + (imgH2 * 1)) + (40 * (rows - 1));
                    break;
                default:
                    $('.list1').stop().show().animate({top: ((imgH1 + 40) * 0) + ((imgH2 + 40) * 0), left: 0}, 300);
                    $('.list3').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 0), left: 0}, 300);       
                    $('.list5').stop().show().animate({top: ((imgH1 + 40) * 2) + ((imgH2 + 40) * 0), left: 0}, 300);     
                    $('.list8').stop().show().animate({top: ((imgH1 + 40) * 3) + ((imgH2 + 40) * 0), left: 0}, 300);                   
                    $('.list10').stop().show().animate({top: ((imgH1 + 40) * 3) + ((imgH2 + 40) * 1), left: 0}, 300);
                    $('.list12').stop().show().animate({top: ((imgH1 + 40) * 3) + ((imgH2 + 40) * 2), left: 0}, 300);                
                    $('.list11').stop().show().animate({top: ((imgH1 + 40) * 3) + ((imgH2 + 40) * 3), left: 0}, 300);

                    rows = 7; 
                    ulH = ((imgH1 * 4) + (imgH2 * 3)) + (40 * (rows - 1));
            }

            $('.list').addClass('on');
            $('.gallery ul').stop().animate({height: ulH}, 300);
        } else if (btnIndex === 4) { //OBJECT
            $('.list').removeClass('on');
            $('.list2').hide();
            $('.list3').hide();
            $('.list6').hide();
            $('.list9').hide();
        
            switch(cols) {
                case 3:
                    $('.list1') .stop().show().animate({top: 0, left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list4') .stop().show().animate({top: 0, left: (imgW * 1) + (40 * 1)}, 300);
                    $('.list5') .stop().show().animate({top: 0, left: (imgW * 2) + (40 * 2)}, 300);
                    
                    $('.list7') .stop().show().animate({top: (imgH1 + 40), left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list10').stop().show().animate({top: (imgH2 + 40), left: (imgW * 1) + (40 * 1)}, 300);
                    $('.list8') .stop().show().animate({top: (imgH1 + 40), left: (imgW * 2) + (40 * 2)}, 300);

                    $('.list12').stop().show().animate({top: (imgH1 + 40 + imgH1 + 40), left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list11').stop().show().animate({top: (imgH1 + 40 + imgH2 + 40), left: (imgW * 2) + (40 * 2)}, 300);

                    rows = 3; 
                    ulH = ((imgH1 * 2) + (imgH2 * 1)) + (40 * (rows - 1));
                    break;
                case 2:
                    $('.list1').stop().show().animate({top: ((imgH1 + 40) * 0) + ((imgH2 + 40) * 0), left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list4').stop().show().animate({top: ((imgH1 + 40) * 0) + ((imgH2 + 40) * 0), left: (imgW * 1) + (40 * 1)}, 300);
                    
                    $('.list5').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 0), left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list7').stop().show().animate({top: ((imgH1 + 40) * 0) + ((imgH2 + 40) * 1), left: (imgW * 1) + (40 * 1)}, 300);
                    
                    $('.list10').stop().show().animate({top: ((imgH1 + 40) * 2) + ((imgH2 + 40) * 0), left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list8').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 1), left: (imgW * 1) + (40 * 1)}, 300);
                    
                    $('.list12').stop().show().animate({top: ((imgH1 + 40) * 2) + ((imgH2 + 40) * 1), left: (imgW * 0) + (40 * 0)}, 300);
                    $('.list11').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 2), left: (imgW * 1) + (40 * 1)}, 300);

                    rows = 4; 
                    ulH = ((imgH1 * 2) + (imgH2 * 2)) + (40 * (rows - 1));
                    break;
                default:
                    $('.list1').stop().show().animate({top: ((imgH1 + 40) * 0) + ((imgH2 + 40) * 0), left: 0}, 300);
                    $('.list4').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 0), left: 0}, 300);                   
                    $('.list5').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 1), left: 0}, 300);
                    $('.list7').stop().show().animate({top: ((imgH1 + 40) * 2) + ((imgH2 + 40) * 1), left: 0}, 300);                 
                    $('.list10').stop().show().animate({top: ((imgH1 + 40) * 3) + ((imgH2 + 40) * 1), left: 0}, 300);
                    $('.list8').stop().show().animate({top: ((imgH1 + 40) * 3) + ((imgH2 + 40) * 2), left: 0}, 300);                
                    $('.list12').stop().show().animate({top: ((imgH1 + 40) * 3) + ((imgH2 + 40) * 3), left: 0}, 300);
                    $('.list11').stop().show().animate({top: ((imgH1 + 40) * 3) + ((imgH2 + 40) * 4), left: 0}, 300);

                    rows = 8; 
                    ulH = ((imgH1 * 4) + (imgH2 * 4)) + (40 * (rows - 1));
            }

            $('.list').addClass('on');
            $('.gallery ul').stop().animate({height: ulH}, 300);
        }
    }
    responseGallery();

    // galleryModal
    let cnt = 13;
    let imgSrc = '';

    $('#section8 .img-box').on({
        click: function(e){
            e.preventDefault();
            $('#galleryModal').stop().fadeIn(300);
            imgSrc = $(this).find('img').attr('src');
            $('.gallery-modal-img').attr('src', imgSrc);
            $('html').addClass('on');
            cnt = $(this).find('img').data('num');
        }
    });
    $('#galleryModal .close-btn').on({
        click: function(e){
            e.preventDefault();
            $('#galleryModal').stop().fadeOut(300);
            $('html').removeClass('on');
        }
    });
    $('#galleryModal .img-btn').on({
        click: function(e){
            e.preventDefault();
            e.stopPropagation();
            nextImageSlide();
        }
    });
    $('#galleryModal .container').on({
        click: function(e){
            e.preventDefault();
            $('#galleryModal').stop().fadeOut(300);
            $('html').removeClass('on');
        }
    });

    function modalImage(){
        imgSrc = `./img/photography-img${cnt}.jpg`;
        $('.gallery-modal-img').stop().fadeOut(0).fadeIn(600).attr('src', imgSrc);
    }
    function nextImageSlide(){
        cnt++;
        if (cnt > 24) {
            cnt = 13;
        }
        modalImage();
    }
    function prevImageSlide(){
        cnt--;
        if (cnt < 13) {
            cnt = 24;
        }
        modalImage();
    }

    $('.next-btn').on({
        click(e){
            e.stopPropagation();
            nextImageSlide();
        }
    });
    $('.prev-btn').on({
        click(e){
            e.stopPropagation();
            prevImageSlide();
        }
    });
    // !-- section8 END --!

    // section15
    $('.send-btn').on({
        click(e){
            e.preventDefault();
            const irum = $('#userName').val();
            const email = $('#userEmail').val();
            const message = $('#userMessage').val();
            const toDay = `${new Date().getFullYear()+1}-${new Date().getMonth()}-${new Date().getDate()}`;
            const formData = {
                이름: irum,
                이메일: email,
                메시지: message,
                날짜: toDay
            };
            $.ajax({
                url: 'https://qkrguswls309.dothome.co.kr/brando_photograpy_cors/form_mail_ajax_insert.php',
                type: 'POST',
                data: formData,
                success(result){
                    console.log(result.includes('성공'));
                    console.log(`AJAX 성공 ${result}`);
                    setTimeout(()=>{
                        if (result.includes('성공') === true){
                            $('.error-message').removeClass('on');
                            $('.success-message').addClass('on');
                            // 초기화
                            $('#userName').val('');
                            $('#userEmail').val('');
                            $('#userMessage').val('');
                        } else {
                            $('.success-message').removeClass('on');
                            $('.error-message').addClass('on');
                            alert("다시 확인하고 시도해주세요.");
                        }
                    }, 1000);
                },
                error(error){
                    console.log(`AJAX 실패 ${error}`);
                }
            });
        }
    });
    // !-- section15 END --!

    // footer
    $('.row1 a').on({
        click(e){
            e.preventDefault();
        }
    });
})(jQuery, window);