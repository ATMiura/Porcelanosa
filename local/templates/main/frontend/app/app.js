if(window.location.hash) window.setTimeout(() => { window.scrollTo(0, 0); }, 1);

function requireAll(r) {
    r.keys().forEach(r);
}

requireAll(require.context('./icons', true, /\.svg$/));

// Load plugins
import 'jquery'
import IMask from 'imask'

import svg4everybody from 'svg4everybody'
window.svg4everybody = svg4everybody;

import objectFitImages from 'object-fit-images'
window.objectFitImages = objectFitImages;

import imagesLoaded from 'imagesloaded'
window.imagesLoaded = imagesLoaded;

// load modules
import Utils from'./js/utils/utils'
import SvgUse from'./js/svgUse'
import Forms from'./js/forms/forms'
import Modals from'./js/modals'
import MapObject from'./js/map-object'
import Sliders from'./js/sliders'
import Search from'./js/search'
import Debounce from'./js/debounce'
import Header from "./js/header";
import Location from "./js/location";
import Sorting from "./js/sorting";
import Filter from "./js/filter";
import Catalog from "./js/catalog";
// import MapObject from'./js/map'
// import MapObject from'./js/scrollbar'
import Video from'./js/video'
import Tabs from './js/tabs'
import Media from './js/media'
import WowAnimation from "./js/Wow";
import selectMore from "./js/select-more";
import MobileMenu from "./js/mobile-menu";
import BxFilter from "./js/bx-fitler";
import Popover from "./js/Popover";
import Counter from "./js/counter";
import Cursor from './js/cursor'
import Order from "./js/order";
import Preloader from "./js/preloader";
import InputMask from "./js/forms/inputMask";

// Load styles
import './styles/app.js';
import { Swiper, Navigation, Pagination, Autoplay, Lazy, Thumbs } from 'swiper/dist/js/swiper.esm.js';

// Run components

window.App = {
    nameProject: 'porcelanosa',
    debug: false,
    lang: 'ru'
};
window.Swiper = Swiper;

if (window.SITE_LANG) {
    App.lang = window.SITE_LANG;
}

if (App.debug) {
    console.log('Debug: ' + App.debug);
    console.log('Lang: ' + App.lang);
}

document.addEventListener('DOMContentLoaded', function() {
    objectFitImages();

    if('ontouchstart' in window || navigator.maxTouchPoints) $(document.body).addClass("touch");

    App.Debounce = new Debounce();
    App.Utils = new Utils();
    App.SvgUse = new SvgUse();
    App.Forms = new Forms();
    App.Modals = new Modals();
    App.MapObject = new MapObject();
    App.Sliders = new Sliders();
    App.Search = new Search();
    App.Debounce = new Debounce();
    App.Header = new Header();
    App.Location = new Location();
    App.Sorting = new Sorting();
    App.Filter = new Filter();
    App.Catalog = new Catalog();
    // App.Map = new Map();
    App.Video = new Video();
    // App.Scrollbar = new Scrollbar();
    App.Tabs = new Tabs();
    App.Media = new Media();
    App.selectMore = new selectMore();
    App.MobileMenu = new MobileMenu();
    App.BxFilter = new BxFilter();
    App.Popover = new Popover();
    App.Counter = new Counter();
    App.Order = new Order();
    App.Wow = new WowAnimation();
    App.Preloader = new Preloader();
    App.InputMask = new InputMask();
    App.Cursor = new Cursor();

    $('[data-inputmask]').each(function () {
        IMask($(this)[0], {mask: "0 (000) 000-00-00"});
    });

    // prevent copying

    $('.no-select').on('selectstart', false);

    $(".no-select img").on('mousedown', false);
});

/*
BX.addCustomEvent("onFrameDataReceived", function (json) {
    console.log('asdasdasaddCustomEvent');

    App.Sliders = new Sliders();
});*/
