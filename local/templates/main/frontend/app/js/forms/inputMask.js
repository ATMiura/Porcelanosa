import IMask from 'imask';

export default class InputMask {
    constructor() {
        this.init();
    }

    init() {
        $('[data-inputmask]').each(function () {
            IMask($(this)[0], {mask: "0 (000) 000-0000"});
        });
    }
}