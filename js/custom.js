$('.mobile-menu-icon').click(function() {
    $('.menu-toggle-btn').toggleClass('open');
    $(this).toggleClass('open');

    if ($('.menu-toggle-btn').hasClass('open') == true) {
        $('.menu-text').text('CLOSE');
        $('#header-menu').css('right', '0');
        $('#menu-container .menu-content').css('top', '0');
        $('#mobile-menu .menu-content').css('top', '0');

        if (navigator.userAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || navigator.userAgent.match(/LG|SAMSUNG|Samsung/) != null) {
            $('html, body').css('overflow-y', 'hidden');

            setTimeout(function() {
                $('.header').css('background-color', '#fff');
            }, 300);
        }
    } else {
        $('.menu-text').text('MENU');
        $('#header-menu').css('right', '-1000px');
        $('#menu-container .menu-content').css('top', '-2000px');
        $('#mobile-menu .menu-content').css('top', '-2000px');

        if (navigator.userAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || navigator.userAgent.match(/LG|SAMSUNG|Samsung/) != null) {
            $('html, body').css('overflow-y', 'scroll');
            setTimeout(function() {
                $('.header').css('background-color', 'transparent');
            }, 100);
        }
    }
});

$('#gototop').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
});

$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#gototop').fadeIn();
    } else {
        $('#gototop').fadeOut();
    }
});

function setClickTab(index) {
    var offset;

    switch (index) {
        case 'Baby':
            offset = $('.baby-container').offset();
            break;
        case 'Toddler':
            offset = $('.toddler-container').offset();
            break;
        case 'Snacks':
            offset = $('.snacks-container').offset();
            break;
        case 'Smoothie':
            offset = $('.smoothie-container').offset();
            break;
        case 'Frozen':
            offset = $('.frozen-container').offset();
            break;
        case 'Family':
            offset = $('.family-container').offset();
            break;
        case 'PEANUTS':
            offset = $('.peanuts-container').offset();
            break;
    }

    $('html, body').animate({
        scrollTop: offset.top
    }, 1500);
}

function onClickShopIcon(element) {
    var status = $(element).closest('.shop-list').find('.shop-list-subitem').attr('style');

    if (status) {
        if (status.search('display: block;') != -1) {
            $(element).closest('.shop-list').find('.shop-list-subitem').slideUp();
            $(element).text('+');
        } else {
            $(element).closest('.shop-list-content').find('.shop-list-subitem').css('display', 'none');
            $(element).closest('.shop-list-content').find('.icon').text('+');
            $(element).closest('.shop-list').find('.shop-list-subitem').slideDown();
            $(element).text('-');
        }
    } else {
        $(element).closest('.shop-list').find('.shop-list-subitem').slideDown();
        $(element).text('-');
    }
}

function onClickProductMore(element, txt1, txt2, txt3, txt4) {
    var status = $(element).closest('.product-container').find('.product-more').attr('style');

    if (status) {
        if (status.search('display: block;') != -1) {
            $(element).closest('.product-container').find('.product-more').slideUp();
            $(element).find('#en').text(txt1);
            $(element).find('#jp').text(txt3);
        } else {
            $(element).closest('.product-container').find('.product-more').slideDown();
            $(element).find('#en').text(txt2);
            $(element).find('#jp').text(txt4);
        }
    } else {
        $(element).closest('.product-container').find('.product-more').slideDown();
        $(element).find('#en').text(txt2);
        $(element).find('#jp').text(txt4);
    }
}

function onClickMenu(element) {
    if ($(element).find('.active').length != 0) {
        $(element).find('img').removeClass('active');
    } else {
        $(element).find('img').addClass('active');
    }

    $(element).parent('li').find('.sub').slideToggle();
}
