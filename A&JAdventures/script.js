let countdown = document.getElementById("countdown")

// Set the date we're counting down to
let countDownDate = new Date("Sep 20, 2022 08:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();
    
  // Find the distance between now and the count down date
  let distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="countdown"
  document.getElementById("countdown").innerHTML = "Trip Countdown" +" " +days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Enjoy your trip";
  }
}, 1000);





let beachSection = document.querySelector(".beach")
let beachBtn = document.querySelector(".beachBtn")
let savannahSection = document.querySelector(".savannah")
let savannahBtn = document.querySelector(".savannahBtn")
// let hide= document.querySelectorAll(".hide")
// console.log(hide)



let vrboSection = document.getElementById("vrbo")
let vrboBtn = document.querySelector(".vrboBtn")
let tybeeEatSection = document.querySelector(".tybeeEats")
let tbyeeEatBtn = document.querySelector(".tbyeEatsBtn")


beachBtn.addEventListener("click",function(){
  savannahSection.style.display ="none";
  vrboSection.style.display="none";
  tybeeEatSection.style.display="none";
  largeCard.style.display = "none"
  
  beachSection.style.display="block";
  beachSection.scrollIntoView();
})

console.log(beachBtn)



savannahBtn.addEventListener("click",function(){
  beachSection.style.display="none"
  vrboSection.style.display="none"
  savannahSection.style.display="block"
  tybeeEatSection.style.display="none"
  savannahSection.scrollIntoView();
})





vrboBtn.addEventListener("click",function(){
  beachSection.style.display="none"
  savannahSection.style.display="none"
  tybeeEatSection.style.display="none"
  // hide.style.display="none"
  vrboSection.style.display="block"

  vrboSection.scrollIntoView();
})

console.log(vrboSection)

tbyeeEatBtn.addEventListener("click",function(){
  beachSection.style.display="none"
  savannahSection.style.display="none"
  vrboSection.style.display="none"
  tybeeEatSection.style.display="block"

  tybeeEatSection.scrollIntoView();
})

console.log(vrboSection)

// let emptyMenu = document.querySelector(".emptyMenu").href
// let crabShackText = document.querySelector(".crabShackText").innerHTML
let crabShackMap = document.querySelector(".crabShackMap")
console.log(crabShackMap)
// emptyMenu.innerHTML= crabShackMenu

// ***Btns and EMPTY ITEM
let crabShackBtn = document.querySelector(".crabShackBtn")
let cocoBtn = document.querySelector(".cocoBtn")
let ajBtn = document.querySelector(".ajBtn")
let pdBtn = document.querySelector(".pdBtn")




let emtpyImg = document.querySelector(".emtpyImg")
let emtpyText= document.querySelector(".emtpyText")
let emtpyTitle = document.querySelector(".emtpyTitle")
let largeCard = document.getElementById("largeCard")
let crabShackMenu = "https://www.thecrabshack.com/menu"
let emptyHours = document.querySelector(".emptyHours")
let emptyAddress = document.querySelector(".emptyAddress")

console.log(pdBtn)

crabShackBtn.addEventListener("click",event=>{
  let crabShackText ="The Crab Shack’s dockside locale perfectly sets the scene for a peaceful evening of seafood and spirits. Overlooking Chimney Creek, a tributary of Lazaretto Creek and the Atlantic Ocean, the restaurant’s vibes are distinctly coastal. The salty water, the swaying marsh grass, and the live oak trees that grow up through the floorboards all make for one picturesque place.<br>Captain Crab’s Sampler Platter, and it’s absolutely jaw-dropping. Boiled shrimp, snow crab, Jonah and Rock Crab, mussels, crawfish, corn, potatoes and sausage fill out the enormous plate. Even the most seasoned seafood lovers will not be able to resist commenting on the meal’s size!<br>Children love feeding the baby gators within the restaurant’s enclosure (servers and hosts have bags of approved alligator chow on hand), and visitors of all ages enjoy the exotic birds and “dock cats” –– seafood-loving felines who reside in sweet, little homes on the premises called the “Cat Shack.”"
  let crabShackImg = document.querySelector(".crabShackImg").src
  let crabShackTitle = document.querySelector(".crabShackTitle").innerHTML
  let crabShackHours = "12Pm -8PM Su-Th / 12PM - 9PM Fr-Sa"
  let crabShackAddress = "40 Estill Hammock Rd Tybee Island, GA 31328"
  
  emtpyImg.src = crabShackImg
  emtpyText.innerHTML = crabShackText
  emtpyTitle.innerHTML = crabShackTitle
  emptyHours.innerHTML = crabShackHours
  emptyAddress.innerHTML = crabShackAddress

  largeCard.style.display = "block"
  largeCard.scrollIntoView();
})



cocoBtn.addEventListener("click",event=>{
  let cocoText ="Nestled in the marsh behind Tybee Island, on the shores of Lazaretto Creek, CoCo’s Sunset Grille is one of the very few restaurants located at an operating marina and it’s own shrimping vessel, The Agnes Marie.  With perfect views of the river and marina, from our large patio you can watch the majestic Agnes Marie returning with the day’s catch as the sun sinks slowly over the marshes. And with a short trip from the docks to our kitchen, seafood simply doesn’t get any fresher than this. Just add an ice cold beer, or one of our unique tropical drinks, great music, and a few of your best friends, and you’ve got a recipe for Tybee living the way it’s meant to be."
  let cocoImg = document.querySelector(".cocoImg").src
  let cocoTitle = document.querySelector(".cocoTitle").innerHTML
  let cocoHours = "12pm -9pm Wed- Sun"
  let cocoAddress = "1A Old US Highway 80  Tybee Island, GA 31328"
  

  emtpyImg.src = cocoImg
  emtpyText.innerHTML = cocoText
  emtpyTitle.innerHTML = cocoTitle
  emptyHours.innerHTML = cocoHours
  emptyAddress.innerHTML = cocoAddress

  largeCard.style.display = "block"
  largeCard.scrollIntoView();
})




ajBtn.addEventListener("click",event=>{
  let ajText ="A-J’s Dockside Restaurant is well-known for its spectacular sunset views and their seafood dishes that will make your stomach growl with anticipation. Their deviled crab dinner is perfectly-blended with buttery, spicy bread crumbs creating a succulent crab cake served in a real crab shell. Our one-word description: yummy!"
  let ajImg = document.querySelector(".ajImg").src
  let ajTitle = document.querySelector(".ajTitle").innerHTML
  let ajHours = "5pm -9pm Thu-Sun"
  let ajAddress = "1315 Chatham Ave, Tybee Island, GA 31328"
  

  emtpyImg.src = ajImg;
  emtpyText.innerHTML = ajText;
  emtpyTitle.innerHTML = ajTitle;
  emptyHours.innerHTML = ajHours;
  emptyAddress.innerHTML = ajAddress;

  largeCard.style.display = "block";
  largeCard.scrollIntoView();
 
})

pdBtn.addEventListener("click",event=>{
  let pdCreekText ="Nestled Under The Palms Of Turner’S Creek, Paula Deen’S Creek House Offers A Wide Variety Of Southern Classics And Seafood Favorites With A Coastal, Savannah Flair.Serving Up Traditional Seafood Dishes And Southern Favorites Including Chargrilled Oysters, Shrimp ‘N Grits And Mouthwatering Steaks. Creek House Maintains A Relaxing, Family-Oriented Atmosphere For Lunch And Dinner.<br>Guests Can Enjoy A Stunning, Waterfront View And Warm Southern Hospitality Day Or Night. Mix The Same Great Recipes Paula Deen Has Been Cooking Up Here In The Hostess City For Almost 30 Years With New Deen Brother’S Bbq Plates, And You’Re Getting One Of The Most Authentic Dining Experiences In The South."
  let pdCreekImg = document.querySelector(".pdCreekImg").src
  let pdCreekTitle = document.querySelector(".pdCreekTitle").innerHTML
  let pdCreekHours = "11am -8pm Su-Th / 11am - 9pm Fr-Sa"
  let pdCreekAddress = "104 Bryan Woods Road  Savannah, GA 31410 "
 

  emtpyImg.src = pdCreekImg
  emtpyText.innerHTML = pdCreekText
  emtpyTitle.innerHTML = pdCreekTitle
  emptyHours.innerHTML = pdCreekHours
  emptyAddress.innerHTML = pdCreekAddress

  largeCard.style.display = "block"
  largeCard.scrollIntoView();
})

