function addObject()
{
    let obj=document.getElementById('obiect').value;
    let zi=document.getElementById('ziua').value;
    if (obj.length==0)
    {
        alert('Invalid odject.');
    } else if ( zi=="select")
    {
        alert("Select the day.")
    }
    else{
        document.getElementById('obiect').value='';
        document.getElementById('ziua').value='select';
        let li=document.createElement('li');
        let text=document.createTextNode(obj);
        li.appendChild(text);
        li.classList.add("list-group-item");
        switch (zi)
        {
                case "lundi":
                lista=document.getElementById('lundi');
                break;
                case "mardi":
                lista=document.getElementById('mardi');
                break;
                case "mercredi":
                lista=document.getElementById('mercredi');
                break;
                case "jeudi":
                lista=document.getElementById('jeudi');
                break;
                case "vendredi":
                lista=document.getElementById('vendredi');
                break;


        }
         
            li.addEventListener("click", function () {
                li.remove();
            });

            lista.appendChild(li);

    }
}