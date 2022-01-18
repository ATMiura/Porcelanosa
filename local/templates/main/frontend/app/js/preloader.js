export default class Preloader {
    preloader = '[data-preloader]';

    constructor () {
        //this.init();
    }

    init () {
        $(this.preloader).addClass('is-active');
    }

    stop () {
        $(this.preloader).removeClass('is-active');
    }
}