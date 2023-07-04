let title=document.querySelectorAll('.item:nth-child(odd)');
let title_even=document.querySelectorAll('.item:nth-child(even)');


// title[0].style.backgroundColor="red";
// title[1].style.backgroundColor="green";
// title[2].style.backgroundColor="blue";
// title[3].style.backgroundColor="pink";
// title[4].style.backgroundColor="orange";

// title.style.backgroundColor="red";


// console.log(title.children[1])

for(let i=0;i<title.length;i++)
{
    title[i].style.backgroundColor="green"
    title[i].style.color="red"
    title_even[i].style.backgroundColor="pink"
    title_even[i].style.color="blue"
    
}

// if(title.value === "Hello")
// {
//     console.log(true)
// }
// else
// {
//     console.log(false)
// }