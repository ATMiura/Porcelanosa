import { createPopper } from '@popperjs/core';

export default class Popovers {
    constructor() {
        this.slider = document.querySelector("#sliderDetail");
        this.events();
    }

    events() {
        let self = this;

        if(this.slider) {
            this.slider.addEventListener('click', function(e) {
                const button = $(e.target).closest('[data-id]');
                if(button.length > 0) {
                    document.querySelector("[data-card]").setAttribute('data-card', button[0].getAttribute('data-id'));
                    const tooltip = document.querySelector("[data-card='" + button[0].getAttribute('data-id') + "']");
                    const popInstance = self.init(button[0], tooltip);

                    $(document).on('click', function(e) {
                        const isBtn = $(e.target).closest('[data-id]');
                        const isTooltip = $(e.target).closest('[data-card]');
                        const isCloseButton = $(e.target).closest('[data-popover-close]');
                        if(isTooltip.length == 0 && isBtn.length == 0 && isCloseButton.length == 0) {
                            self.closeAll();
                        }
                    });

                    $(document).on('click', '[data-popover-close]', function(e) {
                        self.closeAll();
                    });
                }
            })
        }
    }

    closeAll() {
        $('[data-id]').removeClass('active');
        $('[data-card]').removeClass('active');
    }

    open(button, tooltip) {
        $(button).addClass("active");
        $(tooltip).addClass("active");
    }

    init(button, tooltip) {

        button.classList.add("active");
        tooltip.classList.add("active");

        return createPopper(button, tooltip, {
            placement: 'right-start',
            modifiers: [
                {
                    name: "preventOverflow",
                    options: {
                        altAxis: false,
                        boundary: tooltip.parentElement,
                        altBoundary: true,
                        padding: 8,
                    },
                },
                {
                    name: "offset",
                    options: {
                        offset: [18, -21],
                    },
                },
            ],
        });
    }

    destroy(button, tooltip, popInstance) {
        button.classList.remove("active");
        tooltip.classList.remove("active");
        popInstance.destroy();
    }
}