// $(document).ready(function(){
	
// });

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("site-header").classList.remove("hide");
  } else {
    document.getElementById("site-header").classList.add("hide");
  }
  prevScrollpos = currentScrollPos;
}
