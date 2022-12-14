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

//on click, select custom filter
window.addEventListener('click', ()=> {
   custom_filters = document.querySelectorAll('.custom-filter');

   custom_filters.forEach((filter,index) => {

   filter.addEventListener('click', () => {
      custom_filters.forEach(filter => {
         filter.classList.remove('active');
      })

      custom_filters[index].classList.add('active');
      console.log(custom_filters[index].RGB[0])

      chrome.storage.local.get("RGB", function(data){
   
         if(data.RGB != undefined){
         chrome.storage.local.remove("RGB", function(){
            console.log("Removed")
         })
         chrome.storage.local.set({ RGB: custom_filters[index].RGB }, function(data) {
            console.log("Value[0] is set to " + custom_filters[index].RGB[0]);
         });
      }
      else {
         chrome.storage.local.set({ RGB: custom_filters[index].RGB }, function(data) {
            console.log("Value[0] is set to " + custom_filters[index].RGB[0]);
         });
      }
   })

   })   
    
})
})

function validateName(text) {
   regEx = /^[0-9a-zA-z]+$/
   if(text.match(regEx) && text.length > 0){
      return true
   }
   else{
      alert("Filter name is not valid. Please ensure your name includes only letters and numbers and is not empty.")
      return false
   }
}

window.addEventListener('DOMContentLoaded', (event) => {

   //on button click, add custom filter
   document.querySelector('.new-filter').addEventListener('click', () => {
      
      if(validateName(document.getElementById("filter-name").value))
      {
         newli = document.createElement("li")
         newli.textContent = document.getElementById("filter-name").value;
         newli.setAttribute('id', newli.textContent)
         newli.classList.add('custom-filter')
         newli.RGB = [rValElem.innerHTML, gValElem.innerHTML, bValElem.innerHTML]
         list = document.querySelector(".custom-list")
         list.appendChild(newli)
      }
   })

   //on button click, delete currently selected filter
   document.querySelector('.del-filter').addEventListener('click', () => {
      document.querySelector('.custom-filter.active').remove()
   })

   document.querySelector('.del-filter').addEventListener('click', () => {
      chrome.storage.local.get([name], function(result){
         console.log(result.value);
      })

   });

   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {type: "filter"}, function(ChosenFilter) {
         filters_ours.forEach((filter, index) => {
            if (filter.id === ChosenFilter) {
               let event = new Event('click');
               console.log("selected")
               filter.dispatchEvent(event)
            }
         })
      })
   });

});




let rValElem = document.getElementById("rVal")
let gValElem = document.getElementById("gVal")
let bValElem = document.getElementById("bVal")

let rSlider = document.getElementById("r-slider")
let gSlider = document.getElementById("g-slider")
let bSlider = document.getElementById("b-slider")

window.addEventListener('DOMContentLoaded', (event) => {

   rSlider.oninput = function () {
      rValElem.innerHTML = this.value
   }

   gSlider.oninput = function () {
      gValElem.innerHTML = this.value
   }

   bSlider.oninput = function () {
      bValElem.innerHTML = this.value
   }
});





