// custom

if (document.getElementById("styleID612481")) {
    stylingID = document.getElementById("styleID612481").remove();
    filterID = document.getElementById("filterID471924").remove();
}
stylingID = document.createElement('style');
stylingID.id = "styleID612481";
document.body.appendChild(stylingID);

filterID = document.createElement('div');
filterID.id = "filterID471924";
filterID.setAttribute('style', 'height: 0; padding: 0; margin: 0; line-height: 0;');
document.body.appendChild(filterID);


filterID.innerHTML = '<svg id="colorblind-filters" style="display: none"> <defs> <filter id="custom"> <feColorMatrix type="matrix" values="1, 1, 1, 0, 0  0, 0, 0, 0, 0  0, 0, 0, 0, 0  0, 0, 0, 1, 0" in="SourceGraphic" /> </filter> </defs> </svg>';
stylingID.innerHTML = 'html{-webkit-filter:url(#custom);-moz-filter:(#custom);-ms-filter:(#custom);-o-filter:(#custom);filter:(#custom);}'
setTimeout(function() {
    window.scrollBy(1, 1);
    window.scrollBy(-1, -1);
}, 1);


rScaled = 200 / 255.0
gScaled = 100 / 255.0
bScaled = 50 / 255.0

changed = document.querySelector('feColorMatrix')

newFilter = rScaled + ' 0.215 0 0 0  0 ' + gScaled + ' 0.607 0 0  0 0.804 ' + bScaled + ' 0 0  0 0 0 1 0'



changed.setAttribute(
    'values', newFilter
);
