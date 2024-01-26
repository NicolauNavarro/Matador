const informationContent = document.querySelector('.information-content');
const loadPage = document.querySelector('.load-page');
window.addEventListener('load', () => {
  loadPage.style.transition= '1.8s ease';
  loadPage.style.opacity= '0';
  loadPage.addEventListener('transitionend', () => {
    loadPage.style.display= 'none';
    informationContent.style.height= undefined;
  });
});


const video = document.querySelector('video');
const videoBtn = document.querySelector('#playBtn');
const closeVid = document.querySelector('#close-video');
const content = document.querySelector('.content');


videoBtn.addEventListener('click', () => {
  video.style.top= '0';
  video.addEventListener('transitionend', () => {
    closeVid.style.top= '40px';
    video.play()
    content.style.display= 'none';
  });
});


video.addEventListener('ended', () => {
  video.pause();
  video.style.top= '100vh';
  closeVid.style.top= '-100%';
  content.style.display= 'block';
  video.addEventListener('transitionend', () => {
    video.pause()
    closeVid.style.top= '-100%';
    content.style.display= 'block';
  });
});


window.addEventListener('mousemove', () => {
  closeVid.style.opacity= '70%';
  setTimeout(function() {
  closeVid.style.opacity= '0%';
  }, 5000);
});


closeVid.addEventListener('click', () => {
  video.pause();
  video.currentTime = 0;
  video.style.top= '100vh';
  closeVid.style.top= '-100%';
  content.style.display= 'block';
  video.addEventListener('transitionend', () => {
    video.pause()
    closeVid.style.top= '-100%';
    video.currentTime = 0;
    content.style.display= 'block';
  });
});



const searcher = document.querySelector('#searcher');
const searchIcon = document.querySelector('#searchIcon');
const searcherMenu = document.querySelector('.searcher-menu');
const moveSercher = document.querySelectorAll('.move-search-nav');

const searchProjection = document.querySelector('#searchProjection');

let active = 1;



searchIcon.addEventListener('click', () => {
  if(active === 1){
    searcherMenu.style.gap= '10px';
    searcher.style.width= '120px';
    searcher.style.border= '2px solid white';
    searcher.style.padding= '2px 7px';
    searcher.style.outline= '1px solid #999999';
    moveSercher.forEach((moveItem) => {
      moveItem.style.transform = 'translateY(0px)';
    })
    searcher.addEventListener('transitionend', () => {
      searcher.style.border= '2px solid white';
      searcher.style.outline= '1px solid #999999';
    });
    active = 0;
  } else {
    searcher.style.width= '0px';
    searcher.style.padding= '0px';
    searcherMenu.style.gap= '0px';
    moveSercher.forEach((moveItem) => {
      moveItem.style.transform = 'translateY(-201px)';
    })
    searcher.addEventListener('transitionend', () => {
      searcher.style.border= '0px';
      searcher.style.outline= '0px';
    });
    active = 1;
  }
});

const result = document.querySelectorAll('.result');

  searcher.addEventListener('keyup', () => {
    let displayValue = searcher.value;
    searchProjection.innerHTML= displayValue;
    if(displayValue === ""){
      searchProjection.innerHTML= 'Search in store';
      searchProjection.style.color= '#666666';
      result.forEach((coincident) => {
        coincident.style.transform = 'translateX(100vw)';
      });
    }else{
      result.forEach((coincident) => {
        coincident.style.transform = 'translateX(0px)';
      });
      searchProjection.style.color= '#aaaaaa';
    }
  });

