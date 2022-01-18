export default class BxFilter {
    mobileFilter = '[data-mobile-filter]';
    mobileFilterOpen = '[data-mobile-filter-open]';
    mobileFilterClose = '[data-mobile-filter-close]';
    box = '[data-bx-filter-box]';
    row = '[data-bx-filter-row]';
    toggleRow = '[data-bx-filter-row-toggle]';
    toggleInner = '[data-filter-toggle-inner]';
    filterToggler = '[data-filter-toggler]';
    filterList = '[data-filter-toggle-list]';

    constructor() {
        this.filterHide();
        this.media();
        this.events();
    }

    toggleList(toggler) {
        const inner = toggler.closest('[data-filter-toggle-inner]');
        const list = inner.find('[data-filter-toggle-list]');
        if(toggler.hasClass('active')) {
            inner.find('[data-filter-toggler]').removeClass('active');
            list.hide();
        } else {
            toggler.addClass('active');
            $(list[0]).show();
        }
    }

    handlerRow($this) {
        const $row = $this.closest($(this.box)).find($(this.row));

        if (!$row.hasClass('is-active')) {
            $row.addClass('is-active')
                .slideToggle(400);
            $this.text('Скрыть')
        } else {
            $row.removeClass('is-active')
                .slideToggle(400);
            $this.text('Показать все')
        }
    }

    openMobileFilter() {

        this.filterShow();
        if (!$(this.mobileFilter).hasClass('is-active')) {
            $('body').addClass('is-mobile-menu-open');
            $('.overlay').addClass('is-active');
            $(this.mobileFilter).addClass('is-active');
        }
    }

    closeMobileFilter() {
        this.filterHide();
        if ($(this.mobileFilter).hasClass('is-active')) {
            $('body').removeClass('is-mobile-menu-open');
            $('.overlay').removeClass('is-active');
            $(this.mobileFilter).removeClass('is-active');
        }
    }

    media() {
        if ($(window).width() >= 1001) {
            $('[data-desktop="bx-filter"]').removeClass('is-empty');
            $('[data-mobile="bx-filter"]').find($('[data-move="bx-filter"]')).appendTo('[data-desktop="bx-filter"]');
        } else {
            setTimeout(function () {
                let fastLinksHeight = $('.catalog-fast-links').outerHeight();
                let catalogSortingHeight = $('.catalog__sorting').outerHeight();
                let filterTopOffset = fastLinksHeight + catalogSortingHeight;
                //$(this.mobileFilter).css({ "top" : filterTopOffset });
            },500);

            if($('[data-mobile="bx-filter"] [data-move="bx-filter"]').length){

            } else {
                $('[data-mobile="bx-filter"]').html($('[data-desktop="bx-filter"] [data-move="bx-filter"]'));
            }

            if(!$.trim( $('[data-desktop="bx-filter"]').html() ).length){
                $('[data-desktop="bx-filter"]').addClass('is-empty');
            } else {
                $('[data-desktop="bx-filter"]').removeClass('is-empty');
            }
        }
    }

    filterHide() {
        let self = this;

        setTimeout(function () {
            $(self.mobileFilter).css({
                "opacity" : "0",
                "visibility" : "hidden"
            });
        }, 500)
    }

    filterShow() {
        let scrollY = window.pageYOffset;
        let catalogOffset = $('.catalog').offset().top;
        $(this.mobileFilter).css({
            "opacity" : "1",
            "visibility" : "visible",
            top: `calc(${catalogOffset}px - 20px)`,
            height: `calc(100vh - (${catalogOffset}px - ${scrollY}px) + 20px)`,
        });
    }

    events() {
        let self = this;

        $(document).on('click', this.toggleRow, function (e) {
            e.preventDefault();
            self.handlerRow($(this));
        });
        $(document).on('click', this.mobileFilterOpen, function (e) {
            e.preventDefault();
            self.openMobileFilter($(this));
        });
        $(document).on('click', this.mobileFilterClose, function (e) {
            e.preventDefault();
            self.closeMobileFilter($(this));
        });
        $(document).on('click', '#set_filter', function() {
            self.closeMobileFilter();
        });
        $(document).on('click', '.overlay', function() {
            self.closeMobileFilter();
        });
        $(document).on('click', '[data-filter-toggler]', function() {
            self.toggleList($(this));
        });
        $(window).on('resize', () => {this.media()});
    }
}