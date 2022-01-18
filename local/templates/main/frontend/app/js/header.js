export default class Header {
    header = '[data-header]';
    sticky = '[data-header-sticky]';
    burger = '[data-burger="catalog"]';
    catalog = '[data-header-catalog]';
    subCatalogItem = '[data-catalog-item]';
    subCatalogItemLink = '[data-catalog-item-link]';
    subCatalogGroup = '[data-catalog-group]';
    search = '[data-control-search]';
    mobileSearch = '[data-mobile-search]';
    buttonBack = '[data-mobile-menu-back]';
    window = $(window);

    constructor() {
        this.init();
        this.event();
        this.media();
    }

    init() {

        if ($(window).scrollTop() > 67) {
            this.headerFixed();
        }
    }

    headerFixed() {
        const $heightTop = $('.header-top').outerHeight();
        const $heightSticky = $('.header-sticky').outerHeight();

        if (this.window.width() <= 1000) {
            //return false;
        }
        if (this.window.scrollTop() > $heightTop) {
            $('.content').css({
                'padding-top': $heightSticky+'px'
            });
            $(this.sticky).addClass('is-fixed');
        } else {
            $(this.sticky).removeClass('is-fixed');
            $('.content').css({
                'padding-top': '0px'
            });
        }
    }

    catalogOpen() {
        if ($(window).width() > 800) {
            if (!$(this.burger).hasClass('is-catalog-show')) {
                $(this.burger).addClass('is-catalog-show');
                $(this.catalog).addClass('is-show');
            } else {
                $(this.burger).removeClass('is-catalog-show');
                $(this.catalog).removeClass('is-show');
            }
        } else {
            App.MobileMenu.openMenu();
            App.MobileMenu.showSectionCatalog();
        }
    }

    subCatalog($this) {
        let subCatalogItem = $this.parent();
        let subCatalogItemId = subCatalogItem.attr('data-id');
        //let subCatalogItemIndex = subCatalogItem.index();

        console.log(subCatalogItemId);

        $(this.subCatalogItem).removeClass('active');
        subCatalogItem.addClass('active');

        $(this.subCatalogGroup).removeClass('active');

        $('[data-group-id="'+subCatalogItemId+'"]').addClass('active');

        $('.header-sub-catalog').addClass('is-active');
    }

    headerSearch() {
        if ($(window).width() >= 800) {
            $('.header-top').toggleClass('search-is-active');
            $('.header__search').toggleClass('is-active');
        } else {
            $(this.mobileSearch).toggleClass('is-active');
            $('body').toggleClass('is-mobile-menu-open');
        }
    }

    media() {
        if ($(window).width() <= 800) {
            $(this.subCatalogGroup).each(function(){
                $(this).append(`
                    <button class="mobile-menu__back" data-mobile-menu-back>
                        <svg class="i-icon arrow-back__icon">
                            <use xlink:href="#i-arrow-back"></use>
                        </svg>
                        <span>Назад</span>
                    </button>
                `);
            });
        } else {
            $(this.buttonBack).remove();
        }
    }

    closeSectionMobileGroup() {
        $('.header-sub-catalog').removeClass('is-active');
    }

    event() {
        const self = this;

        $(window).on('scroll', function() {
            self.headerFixed();
        });

        $(document).on('click', this.burger, function(e) {
            e.preventDefault();

            $(this)
                .removeClass('not-active')
                .toggleClass('is-active')
                .siblings()
                .removeClass('is-active')
                .toggleClass('not-active');

            self.catalogOpen();
        });

        $(document).on('mouseover', this.subCatalogItemLink, function (e) {
            if (!$(this).parent().hasClass('has-child')) {
                $(self.subCatalogItem).removeClass('active');
                $(self.subCatalogGroup).removeClass('active');
            } else {
                e.preventDefault();
                self.subCatalog($(this));
            }
        });

        $(document).on('click', this.subCatalogItemLink, function (e) {
            if (!$(this).parent().hasClass('has-child')) {
                $(self.subCatalogItem).removeClass('active');
                $(self.subCatalogGroup).removeClass('active');
            } else if($(window).width() <= 800){
                e.preventDefault();
                self.subCatalog($(this));
            }
        });

        $(document).on('click', this.search, function (e) {
            e.preventDefault();
            self.headerSearch($(this));
        });

        $(document).on('click', function (e) {
            if($(e.target).closest('[data-burger], .header-catalog, .mobile-menu, .mobile-search').length === 0){
                $(self.burger).removeClass('is-catalog-show is-active');
                $(self.catalog).removeClass('is-show');
            }
        });

        $(document).on('click', this.buttonBack, function(e) {
            e.preventDefault();
            self.closeSectionMobileGroup($(this));
        });
    }
}