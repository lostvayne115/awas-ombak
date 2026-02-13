// Smooth scroll for internal links
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
  // Set copyright year dynamically
  var yearEl = document.getElementById('year');
  if(yearEl){
    yearEl.textContent = new Date().getFullYear();
  }
});
