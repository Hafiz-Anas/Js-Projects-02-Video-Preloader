//PRELOADER
const prelaoder = document.querySelector('.preloader');

window.addEventListener('load', () => {
  prelaoder.classList.add('hide-preloader');
});

//VIDEO 
const video = document.querySelector('.video-container');
const btn = document.querySelector('.switch-btn');

btn.addEventListener('click', () => {
  if(!btn.classList.contains('slide')) {
    btn.classList.add('slide');
    video.pause();
  } else {
    btn.classList.remove('slide');
    video.play();
  }
}); 