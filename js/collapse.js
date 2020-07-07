// Create collapsible paragraphs
var coll = document.getElementsByClassName("collapsible");
var i;

console.log("imported collapse!");

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    
    var content = this.nextElementSibling;
    
    console.log(content);
    
    if (content.style.display === "none") {
      content.style.display = "content";
      console.log("opened");
    }
    else {
      content.style.display = "none";
      console.log("closed");
    }
  });
  console.log("function added to " + coll[i]);
}