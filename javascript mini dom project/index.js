let sbtn=document.getElementById('sbtn');
let ullist=document.getElementById('ullist');


sbtn.addEventListener('click',func)

function func(e) {
    
    console.log("submit button has been clicked");
    let maininput=document.getElementById('maininput').value;
    console.log(maininput);   
    let li=document.createElement('li');
    li.className='list-group-item';
    let delete_button=document.createElement('button');
    delete_button.className='btn btn-danger float-end';
    delete_button.appendChild(document.createTextNode('X'));
    li.appendChild(delete_button);
    li.appendChild(document.createTextNode(maininput));
    ullist.appendChild(li);
}

