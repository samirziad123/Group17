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
});

rValElem = document.getElementById("rVal")
gValElem = document.getElementById("gVal")
bValElem = document.getElementById("bVal")

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
