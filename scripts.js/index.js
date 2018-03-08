let header = document.getElementsByTagName('nav')[0];
console.log(header);
console.log(header.classList.contains('nav'));


let addActive = function(){
  const scrollPosition = window.scrollY;
  console.log(window.scrollY);

  if(!header.classList.contains('active') && scrollPosition > 65){
    header.classList.add('active');
  } else if (scrollPosition < 65) {
    header.classList.remove('active');
  }
}

window.addEventListener('scroll', addActive);
