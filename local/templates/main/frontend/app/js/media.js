export default class Media {
    constructor() {
        this.handler();
        this.events();
    }

    handler() {

        if ($(window).width() <= 1000) {
            $('[data-desktop="card-header"]').find($('[data-move="card__title"]')).appendTo('[data-mobile="card-header"]');
            $('[data-desktop="card-header"]').find('[data-move="card__code"]').appendTo('[data-mobile="card-header"]');
        }
        else {
            $('[data-mobile="card-header"]').find($('[data-move="card__title"]')).appendTo('[data-desktop="card-header"]');
            $('[data-mobile="card-header"]').find('[data-move="card__code"]').appendTo('[data-desktop="card-header"]');
        }

        if ($(window).width() <= 800) {
            $('[data-desktop="catalog"]').find('[data-move="catalog"]').appendTo('[data-mobile-section="catalog"]');
            $('[data-desktop="header-menu"]').find('[data-move="header-menu"]').appendTo('[data-mobile-section="header-nav"]');
            $('[data-desktop="header-left"]').find('[data-move="header-location"]').appendTo('[data-mobile-section="header-nav"]');
            $('[data-desktop="header-left"]').find('[data-move="header-phone"]').appendTo('[data-mobile-section="header-nav"]');
            $('.header__location').find('[data-modal-location="select"]').appendTo('[data-mobile-section="header-nav"]');

            $('.header-top__right').find('[data-header="search"]').appendTo('[data-mobile="header-search"]');
            $('.search__btns').find('.search__submit').prependTo('.search__form');

            $('#sliderReviews .swiper-slide').each(function () {
                $(this).find('.swiper-slide__rating').prependTo($(this).find('.swiper-slide-review__info'));
            });

            $('.personal-switch').prependTo('.personal');
        }
        else {
            $('[data-mobile-section="header-nav"]').find('[data-move="header-menu"]').appendTo('[data-desktop="header-menu"]');
            $('[data-mobile-section="header-nav"]').find('[data-modal-location="select"]').appendTo('.header__location');
            $('[data-mobile-section="header-nav"]').find('[data-move="header-location"]').appendTo('[data-desktop="header-left"]');
            $('[data-mobile-section="header-nav"]').find('[data-move="header-phone"]').appendTo('[data-desktop="header-left"]');

            $('#sliderReviews .swiper-slide').each(function () {
                $(this).find('.swiper-slide__rating').prependTo($(this));
            });

            $('.personal-switch').appendTo('.section-head__title');
        }

        if ($(window).width() <= 650) {
            $('[data-desktop="slider-brand"]').find('[data-move="slider-brand"]').appendTo('[data-mobile="slider-brand"]');
            $('[data-desktop="footer-logo"]').find('[data-move="footer-logo"]').appendTo('[data-mobile="footer-logo"]');
        }
        else {
            $('[data-mobile="slider-brand"]').find('[data-move="slider-brand"]').appendTo('[data-desktop="slider-brand"]');
            $('[data-mobile="footer-logo"]').find('[data-move="footer-logo"]').appendTo('[data-desktop="footer-logo"]');
        }
    }

    events() {
        const self = this;

        if ($(window).width() <= 800) {
            $('[data-move="logo"]').clone().appendTo('[data-search]');
        }

        $(window).on('resize', function () {
            self.handler();
        });
    }
}