var myList = document.getElementsByTagName("li");
var index ;

for(index = 0; index<myList.length;index++)
{
    var aSpanTag = document.createElement("SPAN");
    var someText = document.createTextNode("\u00D7");
    aSpanTag.className = 'close';
    aSpanTag.appendChild(someText);
    myList[index].appendChild(aSpanTag);
    
}

var closeButton = document.getElementsByClassName("close");
for(var i = 0;i<closeButton.length;i++)
    {
        closeButton[i].addEventListener('click',function()
        {
            var  theDiv = this.parentElement;
            theDiv.style.display = "none";

        });
    }
   
function createNewElement()
{
    var li = document.createElement('li');
    var theInputValue = document.getElementById('the-input').value;
    var textNode = document.createTextNode(theInputValue);

    li.appendChild(textNode);
    
    if(theInputValue === '')
    {
        alert("This field cannot be empty");
    }
    else
    {
        document.getElementById('the-ul').appendChild(li);
        
    }

    document.getElementById("the-input").value="";

    var theSpanTag =  document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    theSpanTag.className = 'close';
    theSpanTag.appendChild(txt);
    li.appendChild(theSpanTag);
    
    for(var i = 0;i<closeButton.length;i++)
    {
        closeButton[i].addEventListener('click',function()
        {
            var  theDiv = this.parentElement;
            theDiv.style.display = "none";

        });
    }
}

var ulList = document.querySelector('ul');
ulList.addEventListener('click',function(event){
    if(event.target.tagName==="LI")
    {
        event.target.classList.toggle('checked');
    }

});