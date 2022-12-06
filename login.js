chrome.runtime.sendMessage({ message: 'user_signed_in' }, function (response) {
    if (response.message === 'success' && response.payload) {
        console.log("User signed in");
    }
});
