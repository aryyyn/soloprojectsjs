let addbutton = document.getElementById('add');
let container = document.getElementById('containerr');
let inputfield = document.getElementById('inp'); 
let deletebutton = document.getElementById('delete');

addbutton.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.innerHTML = inputfield.value;
    container.appendChild(paragraph);
});

deletebutton.addEventListener('click',function() {
    container.removeChild(container.firstElementChild);
});