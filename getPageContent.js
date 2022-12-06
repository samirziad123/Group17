function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.getElementsByClassName(selector)) {
            return resolve(document.getElementsByClassName(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.getElementsByClassName(selector)) {
                resolve(document.getElementsByClassName(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

waitForElm('cvd-type-text').then((elm) => {
    let result = document.getElementsByClassName('cvd-type-text')[0].innerText;
    result = result.substring(result.indexOf(' ') + 1);
    if (result == "DEUTAN") {
        var suggestion = confirm("The test found you to lean towards a deutan type color perception deficiency. Would you like" +
            " to switch the current applied filter to the selection that supports Deuteranomaly?");

        if (suggestion == true) {
            chrome.runtime.onMessage.addListener(
                function (message, sender, sendResponse) {
                    switch (message.type) {
                        case "filter":
                            sendResponse("deuteranomaly");
                            break;
                        default:
                            console.error("Unrecognised message: ", message);
                    }
                }
            );
        }
    } else if (result == "PROTAN") {
        var suggestion = confirm("The test found you to lean towards a protan type color perception deficiency. Would you like" +
            " to switch the current applied filter to the selection that supports Protonopia?");

        if (suggestion == true) {
            chrome.runtime.onMessage.addListener(
                function (message, sender, sendResponse) {
                    switch (message.type) {
                        case "filter":
                            sendResponse("protanopia");
                            break;
                        default:
                            console.error("Unrecognised message: ", message);
                    }
                }
            );
        }
    } else if (result == "TRITAN") {
        var suggestion = confirm("The test found you to lean towards a tritan type color perception deficiency. Would you like" +
            " to switch the current applied filter to the selection that supports Tritanopia?");

        if (suggestion == true) {
            chrome.runtime.onMessage.addListener(
                function (message, sender, sendResponse) {
                    switch (message.type) {
                        case "filter":
                            sendResponse("tritanopia");
                            break;
                        default:
                            console.error("Unrecognised message: ", message);
                    }
                }
            );
        }
    }
});


