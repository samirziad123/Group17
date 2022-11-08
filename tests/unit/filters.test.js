test('Check that selection of protanopia filter is applied upon click', () => {
    require('./../../test.js');
    filters_ours.forEach((filter, index) => {
        if (filter.id === "protanopia") {
            filter.dispatchEvent("click")
        }
    })
    window.addEventListener('DOMContentLoaded', (event) => {
        expect(document.getElementById("filterID471924").innerHTML).toBe('<svg id="colorblind-filters" style="display: none"> <defs> <filter id="protanopia" color-interpolation-filters="linearRGB"> <feColorMatrix type="matrix" values="0.10889,0.89111,-0.00000,0,0 0.10889,0.89111,0.00000,0,0 0.00447,-0.00447,1.00000,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> </defs> </svg>');
    });
});

test('Check that selection of tritanopia filter is applied upon click', () => {
    require('./../../test.js');
    filters_ours.forEach((filter, index) => {
        if (filter.id === "tritanopia") {
            filter.dispatchEvent("click")
        }
    })
    window.addEventListener('DOMContentLoaded', (event) => {
        expect(document.getElementById("filterID471924").innerHTML).toBe(filterID.innerHTML = '<svg id="colorblind-filters" style="display: none"> <defs> <filter id="tritanopia" color-interpolation-filters="linearRGB"> <feColorMatrix type="matrix" values="1.00000,0.15236,-0.15236,0,0 0.00000,0.86717,0.13283,0,0 -0.00000,0.86717,0.13283,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> </defs> </svg>');
    });
});

test('Check that selection of deuteranomaly filter is applied upon click', () => {
    require('./../../test.js');
    filters_ours.forEach((filter, index) => {
        if (filter.id === "deuteranomaly") {
            filter.dispatchEvent("click")
        }
    })
    window.addEventListener('DOMContentLoaded', (event) => {
        expect(document.getElementById("filterID471924").innerHTML).toBe('<svg id="colorblind-filters" style="display: none"> <defs> <filter id="deuteranomaly" color-interpolation-filters="linearRGB"> <feColorMatrix type="matrix" values="0.57418,0.42582,-0.00000,0,0 0.17418,0.82582,-0.00000,0,0 -0.01318,0.01318,1.00000,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> </defs> </svg>');
    });
});

test('Check that selection of deuteranopia filter is applied upon click', () => {
    require('./../../test.js');
    filters_ours.forEach((filter, index) => {
        if (filter.id === "deuteranopia") {
            filter.dispatchEvent("click")
        }
    })
    window.addEventListener('DOMContentLoaded', (event) => {
        expect(document.getElementById("filterID471924").innerHTML).toBe('<svg id="colorblind-filters" style="display: none"> <defs> <filter id="deuteranopia" color-interpolation-filters="linearRGB"> <feColorMatrix type="matrix" values="0.29031,0.70969,-0.00000,0,0 0.29031,0.70969,-0.00000,0,0 -0.02197,0.02197,1.00000,0,0 0,0,0,1,0" in="SourceGraphic" /> </filter> </defs> </svg>');
    });
});
