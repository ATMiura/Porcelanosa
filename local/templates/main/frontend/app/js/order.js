export default class Order {
    orderItem = '[data-order-item]';
    orderItemToggle = '[data-order-toggle]';
    orderPreview = '[data-order-preview]';

    constructor() {
        this.events();
    }

    events() {
        const self = this;

        $(document).on('click', this.orderPreview, function () {
            $(this).parents(self.orderItem).addClass('is-open');
            setTimeout(function () {
                $(this).parents(self.orderItem).addClass('is-show');
            },200)
        });

        $(document).on('click', this.orderItemToggle, function () {
            $(this).parents(self.orderItem).toggleClass('is-open');
            setTimeout(function () {
                $(this).parents(self.orderItem).addClass('is-show');
            },200)
        });
    }
}
