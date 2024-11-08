// first thing we do is check if the page is fully rendered
document.addEventListener('DOMContentLoaded', (loaded) =>{
    // make sure our connection is working
    console.log('Js is working');
    //declare variables
    let a = 200;
    let b = 100;
    let c = a + b;
    //const cant be changed
    const value1 = 500;
    const value2 = 600;
    let total = value1 + value2;
    //use these variables to output to HTML
    document.getElementById("ex1").innerHTML = "<h4>JavaScript Variables</h4>" +
    "<p>Let: The value of c is: " + c + "</p>" +
    "<p>Cont: The value of total is:" + total + "</p>";
    // Style our text
    document.getElementById("ex1").style.color = "f8f8f8";
    document.getElementById("ex1").style.padding = "0% 10%";
    //Global header
    document.getElementById("lesson-global-header").innerHTML =
        "<div id='logo-container'>" +
            "<a href='#'>" +
                "<img src='./img/logo.png' alt='header logo'>" +
            "</a>" +
        "</div>" +
        "<nav><menu>" +
            "<li><a href='#'>Item 1</a></li>" +
            "<li><a href='#'>Item 2</a></li>" +
            "<li><a href='#'>Item 3</a></li>" +
        "</menu></nav>";
    document.getElementById("lesson-global-header").style.cssText = "display: flex; height:125px; background-color: #f8f8f8; align-items: center;";
   //LAB 3 STARTS HERE 
    console.log('This is not a welcome message.')
    //Notes: 2. is a section element
    document.getElementById('LAB3').innerHTML = "<section>"+
        "<h6>test</h6>"+
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>"+
        "<img src='./img/logo.png' alt='logo again'>"+
    "</section>";
    document.getElementById('LAB3').style.color = "#ff0000";
})