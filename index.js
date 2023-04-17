const aboutbutton = document.getElementById('button-about');
const homebutton = document.getElementById('button-home');
const projectsbutton =document.getElementById('button-projects');
const middle = document.querySelector('.middle');
const about = document.querySelector('.about');
const projects = document.querySelector('.projects');



//home on
homebutton.addEventListener('click', () => {
  middle.style.display = 'block';
  about.style.display = 'none';
  projects.style.display = 'none';
});
//about on
aboutbutton.addEventListener('click', () => {
  middle.style.display = 'none';
  about.style.display = 'block';
  projects.style.display = 'none';
});

//projects on
projectsbutton.addEventListener('click', () => {
  middle.style.display = 'none';
  about.style.display = 'none';
  projects.style.display = 'block';
});
