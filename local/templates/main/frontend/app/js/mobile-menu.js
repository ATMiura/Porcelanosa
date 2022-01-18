export default class MobileMenu {
    burger = '[data-burger="header-nav"]';
    sectionCatalog = '[data-mobile-section="catalog"]';
    sectionMenu = '[data-mobile-section="header-nav"]';
    menu = '[data-mobile-menu]';
    menuList = '[data-mobile-menu-list]';
    menuItem = '[data-mobile-menu-item]';
    subMenuOpen = '[data-mobile-menu-sub-open]';
    buttonClose = '[data-mobile-menu-close]';
    buttonBack = '[data-mobile-menu-back]';

    constructor() {
        this.init();
        this.events();
    }

    init() {

        this.menuHide();
        this.cloneElementsMobileMenu();

        const mobileCatalog = $('[data-header="catalog"]')
            .find($('[data-move="catalog"]'))
            .clone()
            .appendTo('[data-mobile="catalog"]')
            .removeAttr('data-move')
            .attr('data-mobile-menu-list', '');

        const mobileCatalogItem = mobileCatalog
            .find($('.header-catalog-list__item'))
            .attr('data-mobile-menu-item', '');

        const mobileCatalogLink = mobileCatalogItem
            .find($('.header-catalog-list__link'));

        const mobileSubItem = mobileCatalog.find($('.header-sub-catalog__title'));

        mobileCatalogLink.each(function(){
            let $container = $(this).siblings('.header-sub-catalog');
            if ($container.length) {
                const $title = $(this).text();

                $container.attr('data-sum-container', '');

                $(this).after(`
                    <button class="header-catalog-list__next arrow-next" data-mobile-menu-sub-open>
                        <svg class="i-icon arrow-next__icon">
                            <use xlink:href="#icon-arrow-next">
                        </svg>
                    </button>
                `);

                $container.prepend(`
                    <button class="mobile-menu__back" data-mobile-menu-back>
                        <svg class="i-icon">
                            <use xlink:href="#icon-arrow-next">
                        </svg>
                        <span>${$title}</span>
                    </button>
                `);
            }
        });

        mobileSubItem.each(function(){
            let $thirdLevel = $(this).siblings('.header-sub-catalog-list');

            if ($thirdLevel.length) {
                let $this = $(this);
                let $item = $this.closest('.header-sub-catalog__col');
                let $title = $this.text();

                $item.attr('data-mobile-menu-item', '');

                $thirdLevel.addClass('header-sub-catalog-list--third');
                $thirdLevel.prepend(`
                    <li>
                        <button class="mobile-menu__back" data-mobile-menu-back>
                            <svg class="i-icon">
                                <use xlink:href="#icon-arrow-next">
                            </svg>
                            <span>${$title}</span>
                        </button>
                    </li>
                `);

                $(this).append(`
                    <button class="header-catalog-list__next arrow-next" data-mobile-menu-sub-open>
                        <svg class="i-icon arrow-next__icon">
                            <use xlink:href="#icon-arrow-next"></use>
                        </svg>
                    </button>
                `);
            }
        });
    }

    addButtonBack() {
        `
            <button class="mobile-menu__back" data-mobile-menu-back>
                <svg class="i-icon">
                    <use xlink:href="#icon-arrow-next"></use>
                </svg>
            </button>
        `
    }

    cloneElementsMobileMenu() {
        $('[data-move="nav"]').clone().appendTo('[data-mobile="nav"]');
        $('[data-header]').find($('[data-location]')).clone().appendTo('[data-mobile="location"]');
        $('[data-header="phone"]').find($('[data-move="phone"]')).clone().appendTo('[data-mobile="call"]');
        $('[data-header="call"]').find($('[data-move="call"]')).clone().appendTo('[data-mobile="call"]');
        $('[data-header="profile"]').find($('[data-move="login"]')).clone().appendTo('[data-mobile="login"]');
        $('[data-header="profile"]').find($('[data-move="favorites"]')).clone().appendTo('[data-mobile="favorites"]');
    }

    closeMenu() {
        let self = this;

        if ($(this.menu).hasClass('is-active')) {
            $('body').removeClass('is-mobile-menu-open');
            $(this.menu).removeClass('is-active');

            $('[data-mobile-section]').removeClass('is-active');

            setTimeout(function() {
                $(self.menuItem).removeClass('is-active');
                $(self.sectionCatalog).removeClass('open-third open-second');
            }, 300);
        }
    }

    openMenu() {
        let self = this;
        this.menuShow();

        $('[data-mobile-section]').removeClass('is-active');

        if (!$(this.menu).hasClass('is-active')) {

            let headerHeight = $('.header').height();
            let headerTop = $('.header-top').outerHeight();
            let headerStickyHeight = $('.header-sticky').height();
            let scrollY = window.pageYOffset;
            console.log(scrollY, headerTop);

            $(this.menu).addClass('is-active');

            if($('[data-header-sticky]').hasClass('is-fixed')){
                $(this.menu).css({
                    height: `calc(100% - ${headerStickyHeight}px)`,
                    //top: `${headerStickyHeight}px`
                })
            } else {
                $(this.menu).css({
                    height: `calc(100% - (${headerHeight}px - ${scrollY}px))`,
                    top: `${headerHeight}px - ${scrollY}px`
                })
            }

            $('body').addClass('is-mobile-menu-open');
        } else if(!$('[data-burger]').hasClass('is-active')){
            self.closeMenu();
        }
    }

    showSectionCatalog() {
        if (!$(this.sectionCatalog).hasClass('is-active')) {
            $(this.sectionCatalog).addClass('is-active');
        } else {
            $(this.sectionCatalog).removeClass('is-active');
        }
    }

    showSectionMenu() {
        if (!$(this.sectionMenu).hasClass('is-active')) {
            $(this.sectionMenu).addClass('is-active');
        } else {
            $(this.sectionMenu).removeClass('is-active');
        }
    }

    moveSectionLeft($this) {
        let $item = $this.closest($(this.menuItem));
        $item.addClass('is-active');
        this.catalogOpen()
    }

    moveSectionRight($this) {
        let $item = $this.closest($(this.menuItem));
        setTimeout(function() {
            $item.removeClass('is-active');
        }, 300);
        this.catalogClose();
    }

    catalogOpen() {
        if (!$(this.sectionCatalog).hasClass('open-second')) {
            $(this.sectionCatalog).addClass('open-second');
        } else if ($(this.sectionCatalog).hasClass('open-second')) {
            $(this.sectionCatalog).addClass('open-third');
        }
    }

    catalogClose() {
        if ($(this.sectionCatalog).hasClass('open-third')) {
            $(this.sectionCatalog).removeClass('open-third');
        } else if ($(this.sectionCatalog).hasClass('open-second')) {
            $(this.sectionCatalog).removeClass('open-second');
        }
    }

    menuHide() {
        $(this.menu).css({
            "opacity" : "0",
            "visibility" : "hidden"
        });
    }

    menuShow() {
        $(this.menu).css({
            "opacity" : "1",
            "visibility" : "visible"
        });
    }

    media() {
        if ($(window).width() < 1280) {
            this.menuShow();
        }
        else {
            this.menuHide();
        }
    }

    events() {
        let self = this;

        $(document).on('click', this.burger, function() {

            $(this)
                .removeClass('not-active')
                .toggleClass('is-active')
                .siblings()
                .removeClass('is-active')
                .toggleClass('not-active');

            self.openMenu();
            self.showSectionMenu();
        });
        $(document).on('click', this.subMenuOpen, function(e) {
            e.preventDefault();
            self.moveSectionLeft($(this));
        });
        $(document).on('click', this.buttonBack, function(e) {
            e.preventDefault();
            self.moveSectionRight($(this));
        });
        $(document).on('click', '.overlay', function() {
            self.closeMenu();
        });
        $(window).on('resize', () => {this.media();})
    }
}