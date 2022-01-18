export default class Filter {
    filter = '[data-filter]';
    toggleBtn = '[data-filter-toggler]';
    filterBlock = '[data-bx-filter-box]';
    overlay = '[data-mobile-overlay]';
    openBtn = '[data-filter-open]';
    closeBtn = '[data-filter-close]';
    searchBtn = '[data-filter-search]'

    constructor() {
        this.events();
    }

    events() {
        let self = this;
        $('[data-filter-toggler]').on('click', function () {
            self.toggle(this.closest('[data-bx-filter-box]'));
        });

        $('[data-mobile-overlay]').on('click', function () {
            self.closeMobileFilter();
        });

        $('[data-filter-close]').on('click', function () {
            self.closeMobileFilter();
        });

        $('[data-filter-open]').on('click', function () {
            if($(this).hasClass('active')) {
                self.closeMobileFilter();
            } else {
                self.openMobileFilter();
            }
        });

        $('[data-filter] form').on('change', function () {
            $('[data-filter-search]').addClass('active');
        });
    }

    toggle(item) {
        $(item).toggleClass('open');
    }

    openMobileFilter() {
        $('[data-mobile-overlay]').addClass('active');
        $('[data-filter]').addClass('open');
        document.body.style.overflow = 'hidden';
    }

    closeMobileFilter() {
        $('[data-mobile-overlay]').removeClass('active');
        $('[data-filter]').removeClass('open');
        document.body.style.overflow = 'auto';
    }
}