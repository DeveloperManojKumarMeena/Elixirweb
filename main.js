var homedata = [
    {
        photo : "images/header-1",
        Heading : "Growth Partners",
        Perograph : "Connect with top consultants hand-picked by<br> Elixir consulting and finance."
    },
    {
        photo : "images/header-6",
        Heading : "Helping Leaders",
        Perograph : "We look forward to help you in taking your<br> company to new height."
    },
    {
        photo : "images/header-5",
        Heading : "Expert Consultants",
        Perograph : "Over 10 years of experience in helping clients<br> finding comprehensive solutions."
    },
];

var home = document.querySelector("#main");
var headline = document.querySelector('#headline');
var headlineDis = document.querySelector('#headlineDis');


var i = 1;
setInterval(function(){
    
  
    
    home.style.backgroundImage = `url('${homedata[i].photo}.jpg')`;
    headline.innerHTML= homedata[i].Heading;
    headlineDis.innerHTML=homedata[i].Perograph;


    headline.style.animation = "none";
    headlineDis.style.animation = "none";
    void headline.offsetWidth;
    void headlineDis.offsetWidth;
    headline.style.animation = "slideup 0.5s ease-in-out";
    headlineDis.style.animation = "slideup 0.5s ease-in-out";
    
   if(i<homedata.length-1){
    
    i++;
   }else
   {
    i=0;
   }
    
},4000);
