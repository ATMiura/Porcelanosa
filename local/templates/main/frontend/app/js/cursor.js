export default class Cursor {
    constructor() {
        this.initCursor();
    }

    initCursor() {
        const updateProperties = (elem, state) => {
            elem.style.setProperty('--x', `${state.x}px`)
            elem.style.setProperty('--y', `${state.y}px`)
            elem.style.setProperty('--width', `${state.width}px`)
            elem.style.setProperty('--height', `${state.height}px`)
            elem.style.setProperty('--opacity', state.opacity)
            elem.style.setProperty('--visibility', state.visibility)
            elem.style.setProperty('--background', state.background)
        };

        document.querySelectorAll('.cursor').forEach(cursor => {
            let onMainSlider, onCollectionSlider

            const createState = e => {
                const defaultState = {
                    x: e.clientX,
                    y: e.clientY,
                    width: 75,
                    height: 75,
                    opacity: '0',
                    visibility: 'hidden',
                    background: ''
                };

                const MainState = {}, CollectionState = {}

                if (onMainSlider != null) {

                    MainState.opacity = 1
                    MainState.visibility = 'visible'
                    MainState.background = '#fff'
                }

                if (onCollectionSlider != null) {

                    CollectionState.opacity = 1
                    CollectionState.visibility = 'visible'
                    CollectionState.background = ''
                }

                return {
                    ...defaultState,
                    ...MainState,
                    ...CollectionState
                }
            };

            document.addEventListener('mousemove', e => {
                const state = createState(e)
                updateProperties(cursor, state)
            });

            document.querySelectorAll('#sliderMain .swiper-container, .slider-card .swiper-slide').forEach(elem => {
                elem.addEventListener('mouseenter', () => {
                    onMainSlider = elem;
                    document.querySelector('.cursor').classList.add('show-text','cursor-black', 'active');
                });
                elem.addEventListener('mouseleave', () => {
                    onMainSlider = undefined;
                    document.querySelector('.cursor').classList.remove('show-text', 'cursor-black', 'active');
                })
            });

            document.querySelectorAll('#sliderCollections .swiper-slide, #sliderNew .swiper-slide, .slider-card__item').forEach(elem => {
                elem.addEventListener('mouseenter', () => {
                    onCollectionSlider = elem;
                    document.querySelector('.cursor').classList.add('cursor-white', 'active');
                })
                elem.addEventListener('mouseleave', () => {
                    onCollectionSlider = undefined;
                    document.querySelector('.cursor').classList.remove('cursor-white', 'active');
                })
            });
        })
    };
}