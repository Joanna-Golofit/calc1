const buttons = [...document.querySelectorAll(".button")];
const display = document.querySelector("#display");
console.log(buttons);

buttons.map(button => {
  button.addEventListener("click", (e) => {
    // console.log("clicked");
    // console.log("e", e);
    // console.log("e.target", e.target);
    // console.log("e.target.innerHTML", e.target.innerHTML);
    // console.log("e.target.className", e.target.className);
    // console.log("e.target.NodeName", e.target.nodeName);
    // console.log("e.type", e.type);
    // console.log("e.target.outerHTML", e.target.outerHTML);
    // console.log("e.path", e.path);
    // display.innerHTML += e.target.innerHTML;

     switch (e.target.innerHTML) {
       case "C":
         display.innerHTML = "";
         break;
       case "=":
         try {
           display.innerHTML = eval(display.innerHTML);
         } catch {
           display.innerHTML = "Error!";
         }
         break;
       case "←":
         if (display.innerHTML) {
           display.innerHTML = display.innerHTML.slice(0, -1);
         }
         break;
       default:
         display.innerHTML += e.target.innerHTML;
     }
  });
});