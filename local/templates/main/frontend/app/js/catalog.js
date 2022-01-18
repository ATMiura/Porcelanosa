export default class Catalog {
    catalogListItem = '[data-catalog-list-item]';

    constructor() {
        this.events();
    }

    events() {

        $(document).on('mouseenter', this.catalogListItem, function () {
            let thisHeight = $(this).height();
            $(this).css({
                "height": thisHeight
            });
            $(this).addClass('is-hover');
        });

        $(document).on('mouseleave', this.catalogListItem, function () {
            $(this).height('');
            $(this).removeClass('is-hover');
        });

        if ($('.filter-wrapper').length === 0) {
            $('.section-catalog').css('padding-top','0px')
        }
    }
}