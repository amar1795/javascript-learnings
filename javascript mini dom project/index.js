let sbtn=document.getElementById('sbtn');
let ullist=document.getElementById('ullist');

let search =document.getElementById('search');

ullist.addEventListener('click',deletefunction);


sbtn.addEventListener('click',func)
let maininput=document.getElementById('maininput');

function func(e) {
    
    console.log("submit button has been clicked");
    console.log("input value is "+maininput.value);   
    let li=document.createElement('li');
    li.className='list-group-item';
    let delete_button=document.createElement('button');
    delete_button.className='btn btn-danger float-end delete';
    delete_button.appendChild(document.createTextNode('X'));
    li.appendChild(delete_button);
    li.appendChild(document.createTextNode(maininput.value));
    ullist.appendChild(li);
}



function deletefunction(e) {

    if(e.target.classList.contains('delete'))
    {

        console.log("you have clicked on delete")
        if(confirm('are you sure'))
        {
            let parent_element=e.target.parentElement;
            ullist.removeChild(parent_element);
        }
    }
    
}


search.addEventListener('input',searchElement);

function searchElement(e) {
    
    let text=e.target.value.toLowerCase();
    console.log(text);
    let itemlist=ullist.getElementsByTagName('li');

    Array.from(itemlist).forEach(function(e) {

        let licontent=e.textContent;
        if( licontent.toLowerCase().indexOf(text)!=-1)
        {
            e.style.display='block';
        }
        else
        {
            e.style.display='none'
        }
        
    });

}

