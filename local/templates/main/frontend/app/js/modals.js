import '@fancyapps/fancybox'
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css'

export default class Modals {

    modals = [
        {
            selector: '[data-modal-open]',
            options: {
                type: 'inline',
                baseClass: "fancybox-modal"
            }
        }
    ];

    constructor() {
        this.events();
        this.init();
    }

    init() {
        $('[data-fancybox]').fancybox({
            buttons: [
                'close'
            ],
            toolbar: true,
            arrows: false,
            thumbs: false,
            infobar: false,
            loop: true,
            btnTpl: {
                close:
                    '<button data-fancybox-close class="fancybox-button fancybox-close-small">' +
                    '<svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                    '<path fill-rule="evenodd" clip-rule="evenodd" d="M64.9999 66L-7.55191e-05 0.999999L0.707031 0.292892L65.707 65.2929L64.9999 66Z" fill="#403838"/>' +
                    '<path fill-rule="evenodd" clip-rule="evenodd" d="M1.00008 66L66.0001 0.999999L65.293 0.292892L0.29297 65.2929L1.00008 66Z" fill="#403838"/>' +
                    '</svg>' +
                    "</button>",

                /*arrowLeft:
                    '<button data-fancybox-prev class="fancybox-arrow fancybox-arrow--prev">' +
                    '<svg viewBox="0 0 62 28" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                    '<path d="M62 14.123L1.5 14.123M16.1716 27L1.09103 13.8631M16.1716 1.10901L1.09103 14.2459" stroke=""/>' +
                    '</svg>' +
                    "</button>",

                arrowRight:
                    '<button data-fancybox-next class="fancybox-arrow fancybox-arrow--next">' +
                    '<svg viewBox="0 0 62 28" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                    '<path d="M0 13.877L60.5 13.877M45.8284 1L60.909 14.1369M45.8284 26.891L60.909 13.7541"/>' +
                    '</svg>' +
                    "</button>",*/
            },
            beforeShow:  function(instance) {

               /*instance.$refs.infobar.text('').append('<span data-fancybox-index></span> из <span data-fancybox-count></span> ')
                if (Object.keys(instance.slides).length < 2) {
                    $('.fancybox-container').addClass('nav-hide');
                }
                else {
                    $('.fancybox-container').removeClass('nav-hide');
                }*/
            },
            afterShow : function(instance) {
                $('[data-fancybox-close]').appendTo('.fancybox-slide--video .fancybox-content');
            }
        });

        $('[data-fancybox-second]').fancybox({
            buttons: [
                'close'
            ],
            baseClass: "fancybox-modal-second",
            btnTpl: {
                close:
                    '<button data-fancybox-close class="fancybox-button fancybox-close-small">' +
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">' +
                    '<path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/>' +
                    '</svg>' +
                    "</button>",
            }
        });

        /*$.fancybox.defaults.thumbs.autoStart = true;
        $().fancybox({
            selector : '#sliderCard .swiper-slide:not(.swiper-slide-duplicate)',
            backFocus : false,
            buttons: [
                "close"
            ],
            toolbar: false,
            arrows: false,
            thumbs: false,
            infobar: false,
            loop: true,
        });*/
    }

    openModal(href, type) {
        $.fancybox.close();
        $.fancybox.open({
            src  : href,
            type : type || 'inline',
            opts : {
                baseClass: "fancybox-modal",
                buttons: [],
            }
        });
    }

    events() {
        let self = this;

        $(document).on('click', '[data-modal-open]', function(e){
            e.preventDefault();
            self.openModal($(this).attr('href'));
        });

        /*$(document).on('click', '#sliderCard .swiper-slide-duplicate', function(e) {
            var $slides = $(this)
                .parent()
                .children('.swiper-slide:not(.swiper-slide-duplicate)');

            $slides
                .eq( ( $(this).attr("data-swiper-slide-index") || 0) % $slides.length )
                .trigger("click.fb-start", { $trigger: $(this) });

            return false;
        });*/
    }
}