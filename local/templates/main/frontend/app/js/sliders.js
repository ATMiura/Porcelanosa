import { Swiper, Navigation, Pagination, Autoplay, Lazy, Thumbs } from 'swiper/dist/js/swiper.esm.js'
import 'swiper/dist/css/swiper.min.css'
import {EffectFade} from "swiper/dist/js/swiper.esm";
import slideNext from "swiper/src/components/core/slide/slideNext";
import slidePrev from "swiper/src/components/core/slide/slidePrev";

Swiper.use([Navigation, Pagination, Autoplay, Lazy, Thumbs, EffectFade, slideNext, slidePrev]);

export default class Sliders {
    constructor() {

        this.list = {};

        this.sliderMain = [
            {
                'selector': '#sliderMain .swiper-container',
                'options': {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    slidesPerGroup: 1,
                    lazy: false,
                    speed: 700,
                    loop: true,
                    autoplay: {
                        delay: 4000,
                        disableOnInteraction: false,
                    },
                    pagination: {
                        el: '#sliderMain .swiper-pagination',
                        type: 'custom',
                        clickable: true,
                        formatFractionCurrent: addZero,
                        formatFractionTotal: addZero,
                        renderCustom: function (swiper, current, total) {
                            var customPaginationHtml = "";
                            for(var i = 0; i < total; i++) {
                                //Determine which pager should be activated at this time
                                if(i == (current - 1)) {
                                    customPaginationHtml += '<span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>';
                                } else {
                                    customPaginationHtml += '<span class="swiper-pagination-bullet"></span>';
                                }
                            }

                            return  '<div class="swiper-pagination-fraction">' +
                                        '<span class="swiper-pagination-current"> '+ ('0' + current).slice(-2) +' </span> ' +
                                            '/ ' +
                                        '<span class="swiper-pagination-total"> '+ ('0' + total).slice(-2) +' </span>' +
                                    '</div>' +
                                    '<div class="swiper-pagination-bullets">'+ customPaginationHtml +'</div>';
                        }
                    },
                    navigation: {
                        nextEl: '#sliderMain .swiper-button-next',
                        prevEl: '#sliderMain .swiper-button-prev',
                    },
                    breakpoints: {
                        800: {
                            navigation:false,
                        }
                    }
                }
            }
        ];

        function addZero(num){
            return (num > 9) ? num : '0' + num;
        }

        this.sliderBrands = [
            {
                'selector': '#sliderBrands .swiper-container',
                'options': {
                    slidesPerView: 4,
                    spaceBetween: 60,
                    slidesPerGroup: 1,
                    speed: 700,
                    loop: true,
                    pagination: false,
                    navigation: {
                        nextEl: '#sliderBrands .swiper-button-next',
                        prevEl: '#sliderBrands .swiper-button-prev',
                    },
                    breakpoints: {
                        650: {
                            slidesPerView: 3.3,
                            spaceBetween: 20,
                            autoPlay: true
                        },
                        800: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                            navigation: false,
                        },
                        1800: {
                            spaceBetween: 30,
                        }
                    }
                }
            }
        ];

        this.sliderAdvants = [
            {
                'selector': '#sliderAdvants .swiper-container',
                'options': {
                    slidesPerView: 5,
                    spaceBetween: 30,
                    slidesPerGroup: 1,
                    speed: 700,
                    lazy: false,
                    loop: true,
                    autoPlay: true,
                    pagination: false,
                    navigation: false,
                    breakpoints: {
                        650: {
                            slidesPerView: 1.4,
                            spaceBetween: 15,
                            autoPlay: true
                        },
                        800: {
                            slidesPerView: 2.5,
                        },
                        1000: {
                            slidesPerView: 2.5,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                        1800: {
                            slidesPerView: 4,
                        },
                    }
                }
            }
        ];

        this.sliderCollections = [
            {
                'selector': '#sliderCollections .swiper-container',
                'options': {
                    slidesPerView: 'auto',
                    spaceBetween: 30,
                    slidesPerGroup: 1,
                    centeredSlides: true,
                    speed: 1000,
                    lazy: false,
                    loop: true,
                    pagination: {
                        el: '#sliderCollections .swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '#sliderCollections .swiper-button-next',
                        prevEl: '#sliderCollections .swiper-button-prev',
                    },
                    /*on: {
                        slideChangeTransitionStart: function () {
                            $('#sliderCollections .swiper-slide').removeClass('animate-on');
                        },
                        slideChangeTransitionEnd: function () {
                            $('#sliderCollections .swiper-slide-active').addClass('animate-on');
                        },
                    },*/
                    breakpoints: {
                        800: {
                            slidesPerView: 1.3,
                            spaceBetween: 20,
                            centeredSlides: false,
                        },
                        1000: {
                            slidesPerView: 1.8,
                            spaceBetween: 20,
                            centeredSlides: false,
                            pagination: false,
                            navigation: false
                        },
                    }
                },
                'options1': {
                    slidesPerView: 2,
                    spaceBetween: 30,
                    lazy: false,
                    loop: false,
                    swipeToSlide: false,
                    centeredSlides: true,
                }
            }
        ]

        this.sliderNew = [
            {
                'selector': '#sliderNew .swiper-container',
                'options': {
                    slidesPerView: 4,
                    spaceBetween: 30,
                    slidesPerGroup: 1,
                    speed: 700,
                    lazy: false,
                    loop: true,
                    pagination: {
                        el: '#sliderNew .swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '#sliderNew .swiper-button-next',
                        prevEl: '#sliderNew .swiper-button-prev',
                    },
                    breakpoints: {
                        800: {
                            slidesPerView: 1.8,
                            spaceBetween: 20,
                        },
                        1000: {
                            slidesPerView: 2.5,
                            pagination: false,
                            navigation: false
                        },
                        1200: {
                            slidesPerView: 3.5,
                        },
                    }
                }
            }
        ]

        this.sliderAdditional = [
            {
                'selector': '#sliderAdditional .swiper-container',
                'options': {
                    slidesPerView: 4,
                    spaceBetween: 30,
                    slidesPerGroup: 1,
                    speed: 700,
                    lazy: false,
                    loop: true,
                    pagination: {
                        el: '#sliderAdditional .swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '#sliderAdditional .swiper-button-next',
                        prevEl: '#sliderAdditional .swiper-button-prev',
                    },
                    breakpoints: {
                        650: {
                            slidesPerView: 1.8,
                            spaceBetween: 20,
                            navigation: false,
                        },
                        800: {
                            slidesPerView: 2,
                            spaceBetween: 15
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                    }
                }
            }
        ]

        this.sliderPreviosly = [
            {
                'selector': '#sliderPreviosly .swiper-container',
                'options': {
                    slidesPerView: 4,
                    spaceBetween: 30,
                    slidesPerGroup: 1,
                    speed: 700,
                    lazy: false,
                    loop: true,
                    pagination: {
                        el: '#sliderPreviosly .swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '#sliderPreviosly .swiper-button-next',
                        prevEl: '#sliderPreviosly .swiper-button-prev',
                    },
                    breakpoints: {
                        650: {
                            slidesPerView: 1.8,
                            spaceBetween: 20,
                            navigation: false,
                        },
                        800: {
                            slidesPerView: 2,
                            spaceBetween: 15
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                    }
                }
            }
        ]

        this.sliderProjects = [
            {
                'selector': '#sliderProjects .swiper-container',
                'options': {
                    slidesPerView: 2,
                    spaceBetween: 30,
                    slidesPerGroup: 2,
                    speed: 700,
                    lazy: false,
                    draggable: true,
                    loop: true,
                    pagination: {
                        el: '#sliderProjects .swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '#sliderProjects .swiper-button-next',
                        prevEl: '#sliderProjects .swiper-button-prev',
                    },
                    breakpoints: {
                        650: {
                            slidesPerView: 1.065,
                            slidesPerGroup: 1,
                            spaceBetween: 20,
                        },
                        1000: {
                            slidesPerView: 1.5,
                            slidesPerGroup: 1,
                        },
                    }
                }
            }
        ]

        this.sliderReviews = [
            {
                'selector': '#sliderReviews .swiper-container',
                'options': {
                    slidesPerView: 1.515,
                    spaceBetween: 0,
                    centeredSlides: true,
                    centeredSlidesBounds: true,
                    speed: 0,
                    lazy: false,
                    loop: true,
                    loopedSlides: 3,
                    pagination: false,
                    /*navigation: {
                        nextEl: '#sliderReviews .swiper-button-next',
                        prevEl: '#sliderReviews .swiper-button-prev',
                    },*/
                    on: {
                        slideChangeTransitionStart: function () {
                            $('#sliderReviews .swiper-slide').removeClass('animate-on');
                        },
                        slideChangeTransitionEnd: function () {
                            $('#sliderReviews .swiper-slide-active').addClass('animate-on');
                        },
                    },
                    breakpoints: {
                        800: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                            centeredSlides: false,
                        },
                        1000: {
                            slidesPerView: 1.55,
                            spaceBetween: 30,
                            centeredSlides: false,
                        },
                        1200: {
                            slidesPerView: 1.5,
                            spaceBetween: 30,
                            centeredSlides: false,
                        },
                        1280: {
                            slidesPerView: 1.5,
                            spaceBetween: 30,
                            centeredSlides: false,
                        },
                        1500: {
                            slidesPerView: 1.9,
                        },
                        1650: {
                            slidesPerView: 1.8,
                        },
                        1800: {
                            slidesPerView: 1.7,
                        },
                        1900: {
                            spaceBetween: 0,
                        }
                    }
                }
            }
        ]

        this.sliderEvents = [
            {
                'selector': '#sliderEvents .swiper-container',
                'options': {
                    slidesPerView: 2,
                    spaceBetween: 30,
                    slidesPerGroup: 1,
                    speed: 700,
                    lazy: false,
                    loop: true,
                    pagination: {
                        el: '#sliderEvents .swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '#sliderEvents .swiper-button-next',
                        prevEl: '#sliderEvents .swiper-button-prev',
                    },
                    breakpoints: {
                        650: {
                            slidesPerView: 1.065,
                            spaceBetween: 20,
                        },
                        1000: {
                            slidesPerView: 1.3,
                        },
                        1200: {
                            slidesPerView: 1.5,
                        },
                    }
                }
            }
        ]

        this.sliderDetail = [
            {
                'selector': '#sliderDetail .swiper-container',
                'options': {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    slidesPerGroup: 1,
                    speed: 700,
                    lazy: false,
                    loop: true,
                    pagination: {
                        el: '#sliderDetail .swiper-pagination',
                        clickable: true,
                        type: 'fraction',
                    },
                    navigation: {
                        nextEl: '#sliderDetail .swiper-button-next',
                        prevEl: '#sliderDetail .swiper-button-prev',
                    },
                }
            }
        ]

        /*this.sliderCardThumbs = [
            {
                'selector': '#sliderCard .slider-card-thumbs__container',
                'options': {
                    spaceBetween: 10,
                    slidesPerView: 3,
                    speed: 700,
                    freeMode: true,
                    watchSlidesVisibility: true,
                    watchSlidesProgress: true,
                    breakpoints: {
                        1200: {

                        }
                    }
                }
            }
        ]

        this.sliderCard = [
            {
                'selector': '#sliderCard .slider-card__container',
                'options': {
                    slidesPerView: 1,
                    speed: 700,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    thumbs: {
                        swiper: this.sliderCardThumbs[0],
                    },
                }
            }
        ]*/

        this.init();
        this.events();
    }

    init() {
        const self = this;

        let windowWidth = $(window).width();

        this.sliderMain.forEach(function (slider) {
            if ($(slider.selector).find($('.swiper-slide')).length > 1) {
                new Slider(slider.selector, slider.options);
            } else {
                $(slider.selector).closest('.swiper-slider').addClass('swiper-slider--nav-hide');
            }
        });

        this.sliderBrands.forEach(function (slider) {
            if ($(slider.selector).find($('.swiper-slide')).length > 1) {
                new Slider(slider.selector, slider.options)
            } else {
                $(slider.selector).closest('.swiper-slider').addClass('swiper-slider--nav-hide');
            }
        });

        this.sliderAdvants.forEach(function (slider) {
            if ($(slider.selector).find($('.swiper-slide')).length > 1) {
                new Slider(slider.selector, slider.options)
            } else {
                $(slider.selector).closest('.swiper-slider').addClass('swiper-slider--nav-hide');
            }
        });

        this.sliderCollections.forEach(function (slider) {
            if (windowWidth > 1280) {
                if ($(slider.selector).find($('.swiper-slide')).length > 2) {
                    new Slider(slider.selector, slider.options)
                } else {
                    new Slider(slider.selector, slider.options1)
                    $(slider.selector).closest('.swiper-slider').addClass('swiper-slider--nav-hide');
                }
            } else {
                if ($(slider.selector).find($('.swiper-slide')).length > 1) {
                    new Slider(slider.selector, slider.options)
                } else {
                    $(slider.selector).closest('.swiper-slider').addClass('swiper-slider--nav-hide');
                }
            }

        });

        this.sliderNew.forEach(function (slider) {
            if ($(slider.selector).find($('.swiper-slide')).length > 1) {
                new Slider(slider.selector, slider.options)
            } else {
                $(slider.selector).closest('.swiper-slider').addClass('swiper-slider--nav-hide');
            }
        });

        this.sliderAdditional.forEach(function (slider) {
            if ($(slider.selector).find($('.swiper-slide')).length > 4) {
                self.list [slider.selector] = new Slider(slider.selector, slider.options)
            } else {
                $(slider.selector).closest('.swiper-slider').addClass('swiper-slider--nav-hide');
            }
        });

        this.sliderPreviosly.forEach(function (slider) {
            if ($(slider.selector).find($('.swiper-slide')).length > 4) {
                new Slider(slider.selector, slider.options)
            } else {
                $(slider.selector).closest('.swiper-slider').addClass('swiper-slider--nav-hide');
            }
        });

        this.sliderProjects.forEach(function (slider) {
            if ($(slider.selector).find($('.swiper-slide')).length > 1) {
                new Slider(slider.selector, slider.options)
            } else {
                $(slider.selector).closest('.swiper-slider').addClass('swiper-slider--nav-hide');
            }
        });

        /*this.sliderReviews.forEach(function (slider) {
            if ($(slider.selector).find($('.swiper-slide')).length > 1) {
                new Slider(slider.selector, slider.options)
            } else {
                $(slider.selector).closest('.swiper-slider').addClass('swiper-slider--nav-hide');
            }
        });*/

        this.sliderEvents.forEach(function (slider) {
            if ($(slider.selector).find($('.swiper-slide')).length > 1) {
                new Slider(slider.selector, slider.options)
            } else {
                $(slider.selector).closest('.swiper-slider').addClass('swiper-slider--nav-hide');
            }
        });

        this.sliderDetail.forEach(function (slider) {
            if ($(slider.selector).find($('.swiper-slide')).length > 1) {
                new Slider(slider.selector, slider.options)
            } else {
                $(slider.selector).closest('.swiper-slider').addClass('swiper-slider--nav-hide');
            }
        });

        /*this.sliderCard.forEach(function (slider) {
            if ($(slider.selector).find($('.swiper-slide')).length > 1 && windowWidth <= 1000) {
                new Slider(slider.selector, slider.options)
            } else {
                $(slider.selector).closest('.swiper-slider').addClass('swiper-slider--nav-hide');
            }
        });

        this.sliderCardThumbs.forEach(function (slider) {
            $('#sliderCard .slider-card__container .swiper-slide').clone().appendTo('.slider-card-thumbs__wrapper');
            if ($(slider.selector).find($('.swiper-slide')).length > 1 && windowWidth <= 1000) {
                new Slider(slider.selector, slider.options)
            } else {
                $(slider.selector).closest('.swiper-slider').addClass('swiper-slider--nav-hide');
            }
        });*/
    }

    initMobile() {
        let windowWidth = $(window).width();

        if (windowWidth <= 1000) {
            $('#sliderCard .slider-card__container .swiper-slide').clone().appendTo('.slider-card-thumbs__wrapper');

            const galleryThumbs = new Swiper('#sliderCard .slider-card-thumbs__container', {
                spaceBetween: 10,
                slidesPerView: 3,
                speed: 700,
                freeMode: true,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
                lazy: false,
            });
            const galleryTop = new Swiper('#sliderCard .slider-card__container', {
                slidesPerView: 1,
                speed: 700,
                lazy: false,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                thumbs: {
                    swiper: galleryThumbs,
                },
            });
        } else {

        }
    }

    events() {
        let self = this;
        let windowWidth = $(window).width();

        $(window).on('resize', function () {
            self.initMobile();
        });

        /* клики по стрелкам для анимации слайдера отзывов */
        const sliderReviews = new Swiper('#sliderReviews .swiper-container', {
            slidesPerView: 1.515,
            spaceBetween: 0,
            centeredSlides: true,
            centeredSlidesBounds: true,
            speed: 700,
            lazy: false,
            loop: true,
            loopedSlides: 3,
            pagination: false,
            /*navigation: {
                nextEl: '#sliderReviews .swiper-button-next',
                prevEl: '#sliderReviews .swiper-button-prev',
            },*/
            on: {
                slideChangeTransitionStart: function () {
                    $('#sliderReviews .swiper-slide-active').removeClass('animate-off');
                    $('#sliderReviews .swiper-slide-active').addClass('animate-on');
                },
                slideChangeTransitionEnd: function () {
                    //$('#sliderReviews .swiper-slide-active').addClass('animate-on');
                },
            },
            breakpoints: {
                800: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    centeredSlides: false,
                },
                1000: {
                    slidesPerView: 1.55,
                    spaceBetween: 30,
                    centeredSlides: false,
                },
                1200: {
                    slidesPerView: 1.5,
                    spaceBetween: 30,
                    centeredSlides: false,
                },
                1280: {
                    slidesPerView: 1.5,
                    spaceBetween: 30,
                    centeredSlides: false,
                },
                1500: {
                    slidesPerView: 1.9,
                },
                1650: {
                    slidesPerView: 1.8,
                },
                1800: {
                    slidesPerView: 1.7,
                },
                1900: {
                    spaceBetween: 0,
                }
            }
        });
        $(document).on('click', '#sliderReviews .swiper-button-next', function () {
            $('#sliderReviews .swiper-slide-active').removeClass('animate-on');
            $('#sliderReviews .swiper-slide-active').addClass('animate-off');
            setTimeout(function () {
                sliderReviews.slideNext();
            }, 1700);
        });
        $(document).on('click', '#sliderReviews .swiper-button-prev', function () {
            $('#sliderReviews .swiper-slide-active').removeClass('animate-on');
            $('#sliderReviews .swiper-slide-active').addClass('animate-off');
            setTimeout(function () {
                sliderReviews.slidePrev();
            }, 1700);
        });

        var sliders = $('.slider-card__container:not(.fullscreen) .slider-card__item');

        $(document).on('click', '.slider-card__container:not(.fullscreen) .slider-card__item', function(event) {
            let $this = $(this);
            //let $image = _this.find('.slider-card__image').data('src');

            $('body').addClass('overflow-hidden');

            $('.slider-card__item').each(function () {
                let $image = $(this).find('.slider-card__image');
                let $source = $(this).find('source');

                $image.attr('data-old',$image.attr('src'));
                $image.attr('src',$image.attr('data-src'));

                $source.attr('data-old',$image.attr('srcset'));
                $source.attr('srcset',$image.attr('data-src'));
            });

            $this.parents('.slider-card__container').addClass('fullscreen');

            $('.fullscreen').scrollTop($this.position().top - 10);
        });

        $(document).on('click', '.close-button', function () {
            $('.slider-card__item').each(function () {
                let $image = $(this).find('.slider-card__image');
                let $source = $(this).find('source');

                $image.attr('src',$image.attr('data-old'));
                $source.attr('srcset',$image.attr('data-old'));
            });

            setTimeout(function() {
                $('.slider-card__container').removeClass('fullscreen');
                $('body').removeClass('overflow-hidden');

                if(windowWidth < 1000) {
                    $('#sliderCard .slider-card__container').update();
                    $('#sliderCard .slider-card-thumbs__container').update();
                }

            }, 200);
        });
    }
}

export class Slider {
    constructor(selector, options) {
        new Swiper(selector, options);
    }
}
