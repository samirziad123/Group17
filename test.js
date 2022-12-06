tabs = document.querySelectorAll(".tabs-toggle"),
contents = document.querySelectorAll(".tabs-content");

//on click, activate selected tab
tabs.forEach((tab,index) => {
   tab.addEventListener('click', () => {
      
      contents.forEach((content) => {
         content.classList.remove('active');
      });
      tabs.forEach((tab) => {
         tab.classList.remove('active');
      });

      contents[index].classList.add('active');
      tabs[index].classList.add('active');
   })
});

//on click, activate selected filter
filters_ours = document.querySelectorAll('.filter');

filters_ours.forEach((filter,index) => {

   filter.addEventListener('click', () => {
      filters_ours.forEach(filter => {
         filter.classList.remove('active');
      })

      filters_ours[index].classList.add('active');

   })   
    
})

custom_filters = document.querySelectorAll('.custom-filter');

custom_filters.forEach((filter,index) => {

   filter.addEventListener('click', () => {
      custom_filters.forEach(filter => {
         filter.classList.remove('active');
      })

      custom_filters[index].classList.add('active');

   })   
    
})

window.addEventListener('DOMContentLoaded', (event) => {

   //on button click, add custom filter
   document.querySelector('.new-filter').addEventListener('click', () => {
      
      newli = document.createElement("li")
      newli.textContent = document.getElementById("filter-name").value;
      newli.classList.add('custom-filter')
      list = document.querySelector(".custom-list")
      list.appendChild(newli)
      custom_filters.appendChild(newLi)
   })

   //extraneous test, ignore for now
   document.querySelector('.del-filter').addEventListener('click', () => {
      chrome.storage.local.get([name], function(result){
         console.log(result.value);
      })

   });

   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {type: "filter"}, function(ChosenFilter) {
         filters_ours.forEach((filter, index) => {
            if (filter.id === ChosenFilter) {
               var event = new Event('click');
               console.log("selected")
               filter.dispatchEvent(event)
            }
         })
      })
   });

});

var rValElem = document.getElementById("rVal")
var gValElem = document.getElementById("gVal")
var bValElem = document.getElementById("bVal")

rSlider = document.getElementById("r-slider")
gSlider = document.getElementById("g-slider")
bSlider = document.getElementById("b-slider")

rSlider.oninput = function() {
   rValElem.innerHTML = this.value   
}

gSlider.oninput = function() {
   gValElem.innerHTML = this.value
}

bSlider.oninput = function() {
   bValElem.innerHTML = this.value
}

addFilter = document.querySelector(".new-filter")

addFilter.addEventListener('click', () => {
   RGB = [rValElem.innerHTML, gValElem.innerHTML, bValElem.innerHTML]
   chrome.storage.local.get("RGB", function(data){
   if(data.RGB != undefined){
      chrome.storage.local.remove("RGB", function(){
         console.log("Removed")
      })
      chrome.storage.local.set({ RGB: RGB }, function(data) {
         console.log("Value[0] is set to " + RGB[0]);
      });
   }
   else {
      chrome.storage.local.set({ RGB: RGB }, function(data) {
         console.log("Value[0] is set to " + RGB[0]);
      });
   }
})
})






