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
};

waitForElm('bdf-e bdf-e-72p49yn no-thanks-section bdf-w bdf-w-text-editor').then((elm) => {
    let link = document.getElementsByClassName('bdf-e bdf-e-72p49yn no-thanks-section bdf-w bdf-w-text-editor')[0].getElementsByTagName('a')[0];
    link.click();
});