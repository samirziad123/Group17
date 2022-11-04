tabs = document.querySelectorAll(".tabs-toggle"),
contents = document.querySelectorAll(".tabs-content");


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

filters = document.querySelectorAll('.filter');

filters.forEach((filter,index) => {

   filter.addEventListener('click', () => {
      filters.forEach(filter => {
         filter.classList.remove('active');
      })

      filters[index].classList.add('active');
   })
     
})
   