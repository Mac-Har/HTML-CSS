//Check if page is fully loaded
document.addEventListener('DOMContentLoaded', (loaded) =>{
    console.log('test');
    //Header
    document.getElementById("gheader").innerHTML = "<a href='./index.html'>"+
    "<img src='./img/logo.png' alt='logo of a train by freepik' class='logo'>"+
    "</a>"+
    "<h1>TRAINS R US</h1>"+
    "<a href='./shop.html' class='navlink'>"+
    "<h2>Our Models</h2>"+
    "</a>"+
    "<a href='./about.html' class='navlink'>"+
    "<h2>About us</h2>"+
    "</a>"+
    "<a href='./contact.html' class='navlink'>"+
    "<h2>Contact Us</h2>"+
    "</a>";

    //Footer
    document.getElementById("gfooter").innerHTML = "<a href='https://www.flaticon.com/free-icons/railway' title='railway icons'>Railway icons created by Freepik - Flaticon</a>"+
    "<a href='https://www.steamlocomotive.com/'>Images and information by https://www.steamlocomotive.com/</a>";
})