export default class Counter {
    constructor() {
        this.events();
    }

    events() {
        $('.counter__input').on('keydown keyup change', function(e){
            if ($(this).val() > 100
                && e.keyCode !== 46 // keycode for delete
                && e.keyCode !== 8 // keycode for backspace
            ) {
                e.preventDefault();
                $(this).val(100);
            }
        });

    }
}

