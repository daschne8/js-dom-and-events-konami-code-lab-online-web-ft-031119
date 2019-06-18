const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


function init() {
  let index = 0
  document.addEventListener('click',function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which);
    logIt(key)
    if (key === code[index]) {
      index++;

      if (index === code.length) {
        alert("Hurray!");

        index = 0;
      }
    } else {
      index = 0;
    }
  })
}
function logIt(key){
  let element = document.createElement('div');
  element.innerHTML = key;
  element.style.backgroundColor = '#f9f9f9';
  document.body.appendChild(element);
}
