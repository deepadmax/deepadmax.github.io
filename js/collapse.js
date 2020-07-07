// Create collapsible paragraphs
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].style.marginBottom = "0vh";
  
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    
    var content = this.nextElementSibling;
        
    if (content.style.display === "block") {
      content.style.display = "none";
      this.style.marginBottom = "0vh";
    
    } else {
      content.style.display = "block";
      this.style.marginBottom = "1.6vh";
    }
    
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
  console.log("function added to " + coll[i]);
}