document.getElementById('formulario'). addEventListener('submit', function(event){
    event.preventDefault();

    let evento = document.getElementById('tarea');
    let aux = evento.value.trim();

    if (aux){
        let ul = document.getElementById('listaTarea');
        
        let li = document.createElement('li');

        let checkbox = document.createElement('input');
        checkbox.type = "checkbox";

        let span = document.createElement('span');

        span.textContent = aux;

        span.classList.add('spanContenido');

        let buttonDelete = document.createElement("button");

        buttonDelete.classList.add('button','button-eliminar');

        let buttonEdit = document.createElement("button");
        buttonEdit.classList.add('button','button-editar');

        buttonDelete.addEventListener('click', function(){
            ul.removeChild(li);
        });

        buttonEdit.addEventListener('click', function(){
            let auxbutton = prompt("Editar tarea", span.textContent);

            if (auxbutton !== null && auxbutton.trim() !=="") {
                span.textContent = auxbutton.trim();
            }

        });

        checkbox.addEventListener('click', function(event){
            if (checkbox.checked){
                span.style.color = "grey";
                span.style.textDecoration = "line-through";
            } else{
                span.style.color = "black";
                span.style.textDecoration = "none"; 
            }
        });

        if (document.querySelector('.content').style.background == "black") {
            span.style.color = "white";
        }

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(buttonDelete);
        li.appendChild(buttonEdit);

        ul.appendChild(li);


        evento.value = "";

    }

});

document.getElementById('tarea').addEventListener('focus', function(event){
    document.querySelector('.content').style.background = "black";

    let ul = document.getElementById('listaTarea');
    let lista = ul.getElementsByTagName('li');
    let span = ul.getElementsByTagName('span');
    let checkbox = ul.getElementsByTagName('input');

    for( let i = 0; span.length; i++){
        if (checkbox[i].checked) {
            span[i].style.color = "gray";
        } else{
            span[i].style.color = "white"
        }
    }

});

document.getElementById('tarea').addEventListener('blur', function(event){
    document.querySelector('.content').style.background = "white";
    
    
    let ul = document.getElementById('listaTarea');
    let lista = ul.getElementsByTagName('li');
    let span = ul.getElementsByTagName('span');
    let checkbox = ul.getElementsByTagName('input');

    for( let i = 0; span.length; i++){
        if (checkbox[i].checked) {
            span[i].style.color = "gray";
        } else{
            span[i].style.color = "black"
        }
    }
});