function highlightParas(containing) {
  if(typeof containing === 'string')
  containing = new RegExp(`\\b${containing}\\b`, 'i');
  const paras = document.getElementsByTagName('p');
  //console.log(paras);
  for(let p of paras) {
    if(!containing.test(p.textContent)) continue;
    p.classList.add('highlight');
  }
}

function removeParaHighlights() {
	const paras = document.querySelectorAll('p.highlight');
	for(let p of paras) {
		p.classList.remove('highlight');
	}
}

function crearElementos(){
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  p1.textContent = "I was created dynamically!";
  p2.textContent = "I was also created dynamically!";

  const parent = document.getElementById('content');
  const firstChild = parent.childNodes[0];
  parent.insertBefore(p1, firstChild);
  parent.appendChild(p2);
}
const crear = document.getElementsByName('crearP'); //crea un NodeList
crear[0].addEventListener('click', evt => {
  evt.preventDefault();
  crearElementos();
});


const highlightActions = document.querySelectorAll('[data-action="highlight"]');
for(let a of highlightActions) {
  a.addEventListener('click', evt => {
    evt.preventDefault();
    highlightParas(a.dataset.containing);
  });
}

const removeHighlightActions = document.querySelectorAll('[data-action="removeHighlights"]');
for(let a of removeHighlightActions) {
  a.addEventListener('click', evt => {
    evt.preventDefault();
    removeParaHighlights();
  });
}
// algunas cosas de la consola
  // document.getElementById('content');
  // const callouts = document.getElementsByClassName('callout');
  // const par = document.getElementsByTagName('p');
  // par;
  // callouts;
  // callout2;
  // var parrafos = [...document.getElementsByTagName('p')];
  // parrafos;
