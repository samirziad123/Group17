const { sign } = require("crypto");

let signed_in = false;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(request);
    if (request.message === 'user_signed_in') {
        sendResponse({
            message: 'success',
            payload: signed_in
        });
    } else if (request.message === 'sign_out') {
        signed_in = false;
        sendResponse({ message: 'success' });
    } else if (request.message === 'sign_in') {
        signed_in = true;
        sendResponse({ message: 'success' });
    }
    console.log("Signed in? " + signed_in);
    return true;
});