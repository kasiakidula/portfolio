$(document).ready(function(){                                
                $('.menu-toggler').on('click', function() {
                    $(this).toggleClass('open');
                    $('.nav-list').toggleClass('open');
                    $('.nav-link').toggleClass('open');
                });

                $('nav .nav-list').on('click', function() {
                    $('.menu-toggler').removeClass('open');
                    $('.nav-list').removeClass('open');
                    $('.nav-link').removeClass('open');
                });
                
                $('nav a[href*="#"]').on('click', function() {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: $($.attr(this, 'href')).offset().top - 54
                    }, 800);
                });

                $('#up').on('click', function() {
                    $('html, body').animate({
                        scrollTop: 0
                    }, 1000);
                });
                
                AOS.init({
                    easing: 'ease',
                    duration: 1800,
                    once: true
                });
            });

