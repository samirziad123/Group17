//Listeners for colorblind filter buttons
//Injects a javascript file on click event, the js file applies a filter to simulate colorblindness

// stores the currently selected filter so that when the user stops hovering
// over options, the currently selected filter will still be applied to the popup
window.selectedFilter = null;

/**
 * get the selected filter on popup open
 */
window.onload = function() {
  if (!chrome || !chrome.storage || !chrome.storage.local) return;
  chrome.storage.local.get(["key"], function(result) {
    try {
      document.getElementById(result.key).click();
    } catch (e) {
      console.log(e);
    }
  });
};

/**
 * Sets the selected filter in storage
 * @param {String} value the selected input
 */
function setSelected(value) {
  try {
    chrome.storage.local.set({ key: value }, function() {
      document.getElementById(value).checked = true;
    });
  } catch {}
}

document.querySelectorAll('.filter').forEach(radioButton => {
  const filter = "achromatomaly";
  radioButton.addEventListener("click", function() {
    console.log(filter);
    // page-specific filters
    console.log(radioButton.id);
    setSelected(radioButton.id);
    //injectFilter(`filters/${filter}.js`);
    chrome.tabs.executeScript(radioButton.id, { 
      file: '../filters/achromatomaly.js',
    });
    // popup-specific filters
    applyFilter((window.selectedFilter = filter));
  });
});
