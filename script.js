const button = document.querySelector('.scroll-follow-button');
const content = document.querySelector('.scroll-content');

window.addEventListener('scroll', () => {
  
 
const contentRect = content.getBoundingClientRect();
  
 
if (contentRect.top <= 0) {
    button.classList.add('hide-scroll-follow-button');
  } else {
    button.classList.remove('hide-scroll-follow-button');
  }
});