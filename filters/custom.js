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


filterID.innerHTML = '<svg id="colorblind-filters" style="display: none"> <defs> <filter id="custom"> <feColorMatrix type="matrix" values="1, 0, 0, 0, 0  0, 1, 0, 0, 0  0, 0, 1, 0, 0  0, 0, 0, 1, 0" in="SourceGraphic" /> </filter> </defs> </svg>';
stylingID.innerHTML = 'html{-webkit-filter:url(#custom);-moz-filter:(#custom);-ms-filter:(#custom);-o-filter:(#custom);filter:(#custom);}'
setTimeout(function() {
    window.scrollBy(1, 1);
    window.scrollBy(-1, -1);
}, 1);


function applyCustom(){
    chrome.storage.local.get(["RGB"], function(data) {
        
        if(typeof data.RGB == "undefined") {
            console.log("data.RGB is undefined")
        }
        else{
            console.log("Value currently is " + data.RGB[0]);
            
            rScaled = data.RGB[0] / 255.0
            gScaled = data.RGB[1] / 255.0
            bScaled = data.RGB[2] / 255.0
        
            rBalanced = 1 - rScaled
            gBalanced = 1 - gScaled
            bBalanced = 1 - bScaled
        
            changed = document.querySelector('feColorMatrix')
        
            newFilter = `${rScaled} ${rBalanced} 0 0 0  0 ${gScaled} ${gBalanced} 0 0  0 ${bBalanced} ${bScaled} 0 0  0 0 0 1 0`
        
            console.log(newFilter)
        
        
            changed.setAttribute(
                'values', newFilter
            );
        }
        
    });

}

applyCustom()