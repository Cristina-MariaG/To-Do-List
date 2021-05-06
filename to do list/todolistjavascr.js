function  adaugaObiectiv()
{
let obiectiv=document.getElementById('obiectiv').value;
let prioritate=document.getElementById('prioritate').value;
if(obiectiv.length===0)
{
    alert("Complete the object.");
} else if(parseInt(prioritate)===0 ||  prioritate<0 || prioritate>2 || prioritate.length===0)
{
    alert("The value of Priority it's not correct.");
    document.getElementById('prioritate').value='';
    return;
} else
{
    document.getElementById('obiectiv').value='';
    document.getElementById('prioritate').value='';
    let li=document.createElement("li");
    let text=document.createTextNode(obiectiv);
    li.appendChild(text);
    li.classList.add("list-group-item");

    switch (parseInt(prioritate))
    {
        case 1:
            lista=document.getElementById("prioritate_1");
            break;
        case 2:
            lista=document.getElementById("prioritate_2");
            break;
    }

    li.addEventListener("click", function(){
        li.remove();
    });
    lista.appendChild(li);



}

}