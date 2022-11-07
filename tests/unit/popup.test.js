test('Check that the popup title is rendered properly', () => {
    require('./../../popup.js');
    expect(document.getElementById("title").innerHTML).toBe('Color Corrector');
});

test('Check that the button is working properly', () => {
    require('./../../popup.js');
    expect(document.getElementById("message")).toBeNull();
    document.getElementById("button").click();
    expect(document.getElementById("message").innerHTML).toBe('It has been clicked');
});