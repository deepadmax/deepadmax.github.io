// Create collapsible paragraphs
let coll = document.getElementsByClassName("folder");
let i;

function trigger(elt) {
  elt.classList.toggle("active");
  
  let content = elt.nextElementSibling;
      
  if (content.style.display === "block") {
    content.style.display = "none";
    elt.style.marginBottom = "0rem";
    
  } else {
    content.style.display = "block";
    elt.style.marginBottom = "1rem";
  }
  
  if (content.style.maxHeight){
    content.style.maxHeight = null;
    closeChildren(content);
    
  } else {
    content.style.maxHeight = content.scrollHeight + "rem";
  } 
}

function closeChildren(elt) {
  Array.from(elt.getElementsByClassName("folder")).forEach((_elt) => {
    if (_elt.style.marginBottom !== "0rem") {
      trigger(_elt);
    }
  });
}

for (i = 0; i < coll.length; i++) {
  coll[i].style.marginBottom = "0rem";
  
  coll[i].addEventListener("click", function() {
    trigger(this);
  });
}