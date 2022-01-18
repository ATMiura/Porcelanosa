export default class selectMore {
    more = '[data-select-more]';
    moreClose = '[data-select-more-close]';

    constructor() {
        this.events();
    }

    events(){
        $(document).on('click', this.more, function (e){
            e.preventDefault();
            $(this).parents('.select__list').find('.select-more-wrapper').toggleClass('is-show');
        });

        $(document).on('click', this.moreClose, function (e){
            $(this).parents('.select-more-wrapper').removeClass('is-show');
        });
    }
}