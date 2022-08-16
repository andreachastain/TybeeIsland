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

// let newUpdateMessage = window.alert("Hello, I have been updated. Make sure to check out the added restaurants")


// let exploreSection = document.querySelector(".beach")
let beachBtn = document.querySelector(".xpBeach")
let savannahSection = document.querySelector(".savannah")
let savannahBtn = document.querySelector(".savannahBtn")
let stingBtn = document.querySelector(".stingBtn")
let nbBGBtn = document.querySelector(".nbBGBtn")
let p16Btn = document.querySelector(".p16Btn")
let sWolfTyBtn = document.querySelector(".sWolfTyBtn")
let bubGumBtn = document.querySelector(".bubGumBtn")
let fanniesBtn= document.querySelector(".fanniesBtn")
let exploreBtn = document.querySelector(".exploreBtn")
let exploreSection = document.querySelector(".explore")
let beachFeaturette = document.querySelector(".beachFeaturette")
let xpToursBtn = document.querySelector(".xpTours")
let toursFeaturette = document.querySelector(".toursFeaturette")
let xpRentBtn = document.querySelector(".xpRent")
let xpRentSection = document.querySelector(".xpRentSection")



// let hide= document.querySelectorAll(".hide")
console.log(beachFeaturette)



let vrboSection = document.getElementById("vrbo")
let vrboBtn = document.querySelector(".vrboBtn")
let tybeeEatSection = document.querySelector(".tybeeEats")
let tbyeeEatBtn = document.querySelector(".tbyeEatsBtn")



// console.log(beachBtn)



savannahBtn.addEventListener("click",function(){
  exploreSection.style.display="none"
  vrboSection.style.display="none"
  savannahSection.style.display="block"
  tybeeEatSection.style.display="none"
  largeCard.style.display = "none"
  savannahSection.scrollIntoView();
})





vrboBtn.addEventListener("click",function(){
  exploreSection.style.display="none"
  savannahSection.style.display="none"
  tybeeEatSection.style.display="none"
  // hide.style.display="none"
  vrboSection.style.display="block"

  vrboSection.scrollIntoView();
})

console.log(vrboSection)

tbyeeEatBtn.addEventListener("click",function(){
  exploreSection.style.display=""
  savannahSection.style.display="none"
  vrboSection.style.display="none"
  tybeeEatSection.style.display="block"
  largeCard.style.display = "none"
  beachFeaturette.style.display= "none"
  tybeeEatSection.scrollIntoView();
})

console.log(vrboSection)


exploreBtn.addEventListener("click",function(){
  savannahSection.style.display ="none";
  vrboSection.style.display="none";
  tybeeEatSection.style.display="none";
  largeCard.style.display = "none"
  
  
  exploreSection.style.display="block";
  exploreSection.scrollIntoView();
})





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
let dBeachBarKitchBtn = document.querySelector(".dBeachBarKitchBtn")
let sIFbBtn=document.querySelector(".sIFbBtn")









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

stingBtn.addEventListener("click",event=>{
  let stngRayText ="Owners “Big Ray” and “Little Ray” know a thing or two about fresh seafood, their menu still boasts fresh catches and exceptional fare. Among the most popular dishes are fish tacos, seared Ahi Tuna with seaweed salad and the larger-than-life Tybee Fisherman’s platter."
  let stngRayImg = document.querySelector(".stngRayImg").src="https://assets.website-files.com/5e2ce82cd2e0674b6cacdecb/5e82c021cf9bc28ac64691d2_1200%20by%20800-p-800.png"
  let stngRayTitle = document.querySelector(".stngRayTitle").innerHTML
  let stngRayHours = "11am -10pm"
  let stngRayAddress = "Sting Ray's 1403 Butler Ave, Tybee Island, GA 31328"
 

  emtpyImg.src = stngRayImg
  emtpyText.innerHTML = stngRayText
  emtpyTitle.innerHTML = stngRayTitle
  emptyHours.innerHTML = stngRayHours
  emptyAddress.innerHTML = stngRayAddress

  largeCard.style.display = "block"
  largeCard.scrollIntoView();
})



nbBGBtn.addEventListener("click",event=>{
  let nbBarGrlText ="Nestled between the light house and the beach, the North Beach Bar and Grill offers an amazing lunch and dinner menu. Eclectic fusion with a Caribbean flair, our menu features local, sustainable seafood and the freshest ingredients. While our chefs create gourmet dishes rivaling the best restaurants in town, we also serve hot dogs, crab cake sandwiches, fish tacos, and wings in our quaint beach shack by the sea."
  let nbBarGrlImg = document.querySelector(".nbBarGrlImg").src="https://tybeeislandmainstreet.org/wp-content/uploads/2020/11/IMG_3565-1024x768.jpeg"
  let nbBarGrlTitle = document.querySelector(".nbBarGrlTitle").innerHTML
  let nbBarGrlHours = "12pm -8pm"
  let nbBarGrlAddress = "33 Meddin Drive, Tybee Island, GA 31328"
 

  emtpyImg.src = nbBarGrlImg
  emtpyText.innerHTML = nbBarGrlText
  emtpyTitle.innerHTML = nbBarGrlTitle
  emptyHours.innerHTML = nbBarGrlHours
  emptyAddress.innerHTML = nbBarGrlAddress

  largeCard.style.display = "block"
  largeCard.scrollIntoView();
})


sIFbBtn.addEventListener("click",event=>{
  let sIFbText ="Closed between 4-4:30 daily."
  let sIFbImg = document.querySelector(".sIFbImg").src
  let sIFbTitle = document.querySelector(".sIFbTitle").innerHTML
  let sIFbHours = "12pm -10pm"
  let sIFbAddress = "101 Lovell Ave, Tybee Island, GA 31328"
 

  emtpyImg.src = sIFbImg
  emtpyText.innerHTML = sIFbText
  emtpyTitle.innerHTML = sIFbTitle
  emptyHours.innerHTML = sIFbHours
  emptyAddress.innerHTML = sIFbAddress

  largeCard.style.display = "block"
  largeCard.scrollIntoView();
})



dBeachBarKitchBtn.addEventListener("click",event=>{
  let dBeachBarKitchText ="Pull up a seat on the deck for dinner with a view or brush off the sand after a day on the beach and cool down indoors with a cocktail. Located in the Beachside Colony Resort, The Deck Beach Bar and Kitchen is the only oceanfront restaurant on Tybee Island."
  let dBeachBarKitchImg = document.querySelector(".dBeachBarKitchImg").src
  let dBeachBarKitchTitle = document.querySelector(".dBeachBarKitchTitle").innerHTML
  let dBeachBarKitchHours = "11am - 9pm"
  let dBeachBarKitchAddress = "404 Butler Ave, Tybee Island, GA 31328"
 

  emtpyImg.src = dBeachBarKitchImg
  emtpyText.innerHTML = dBeachBarKitchText
  emtpyTitle.innerHTML = dBeachBarKitchTitle
  emptyHours.innerHTML = dBeachBarKitchHours
  emptyAddress.innerHTML = dBeachBarKitchAddress

  largeCard.style.display = "block"
  largeCard.scrollIntoView();
})




p16Btn.addEventListener("click",event=>{
  let p16Text ="Our rooftop deck overlooks Tybrisa Street, and the view is breathtaking. Pier 16 seafood restaurant offers a fun casual dining experience, complete with two outdoor decks, and a rooftop bar. The beachy vibes and relaxing atmosphere doesn’t stop there, we also have Cornhole and Giant Jenga for family friendly entertainment."
  let p16Img = document.querySelector(".p16Img").src
  let p16Title = document.querySelector(".p16Title").innerHTML
  let p16Hours = "11am -9pm"
  let p16Address = "1601 Inlet Ave, Tybee Island, Georgia 31328"
 

  emtpyImg.src = p16Img
  emtpyText.innerHTML = p16Text
  emtpyTitle.innerHTML = p16Title
  emptyHours.innerHTML = p16Hours
  emptyAddress.innerHTML = p16Address

  largeCard.style.display = "block"
  largeCard.scrollIntoView();
})


sWolfTyBtn.addEventListener("click",event=>{
  let sWolfTyText ="This seems like a weird place. Menu changes every two weeks and they don't have a phone. They have an interesting vibe."
  let sWolfTyImg = document.querySelector(".sWolfTyImg").src="https://i0.wp.com/scoutsavannah.com/wp-content/uploads/2020/09/SeaWolf.jpg?resize=800%2C600&ssl=1"
  let sWolfTyTitle = document.querySelector(".sWolfTyTitle").innerHTML
  let sWolfTyHours = "4pm-12am :Kitchen closes at 10pm"
  let sWolfTyAddress = "106 S. Campbell Street, Tybee Island, GA 31328"
 

  emtpyImg.src = sWolfTyImg
  emtpyText.innerHTML = sWolfTyText
  emtpyTitle.innerHTML = sWolfTyTitle
  emptyHours.innerHTML = sWolfTyHours
  emptyAddress.innerHTML = sWolfTyAddress

  largeCard.style.display = "block"
  largeCard.scrollIntoView();
})



bubGumBtn.addEventListener("click",event=>{
  let bubGumText ="Bubba Gumbo's interior is charming and historic. The building, built in the 1940's, reflects the hip sensibilities of Caitlin's taste. All the while also paying tribute to old Tybee's storied past. The indoor-outdoor dining area offers the choice to observe wildlife through the lens of our marsh bar or hang out in the atmospheric dining room."
  let bubGumImg = document.querySelector(".bubGumImg").src="https://img-aws.ehowcdn.com/700x/cdn.onlyinyourstate.com/wp-content/uploads/2017/06/o-30-700x525-1-700x525.jpg"
  let bubGumTitle = document.querySelector(".bubGumTitle").innerHTML
  let bubGumHours = "3pm-9pm M-Th / 12-9 F-Su"
  let bubGumAddress = "1 Old Tybee Rd at Tybee Island Marin"
  // $(".bubGumImg").attr("src", "https://img-aws.ehowcdn.com/700x/cdn.onlyinyourstate.com/wp-content/uploads/2017/06/o-30-700x525-1-700x525.jpg")
 

  emtpyImg.src = bubGumImg
  emtpyText.innerHTML = bubGumText
  emtpyTitle.innerHTML = bubGumTitle
  emptyHours.innerHTML = bubGumHours
  emptyAddress.innerHTML = bubGumAddress

  largeCard.style.display = "block"
  largeCard.scrollIntoView();
})

fanniesBtn.addEventListener("click",event=>{
  let fanniesText ="It has a fun atmosphere and the staff is friendly! Serving Lunch and Dinner 7 days a week and on the weekends live music on the second floor."
  let fanniesImg = document.querySelector(".fanniesImg").src
  let fanniesTitle = document.querySelector(".fanniesTitle").innerHTML
  let fanniesHours = "11am-9pm Wed / 10pm Fri-Sun"
  let fanniesAddress = "1613 Strand Ave, Tybee Island, GA 31328"
 

  emtpyImg.src = fanniesImg
  emtpyText.innerHTML = fanniesText
  emtpyTitle.innerHTML = fanniesTitle
  emptyHours.innerHTML = fanniesHours
  emptyAddress.innerHTML = fanniesAddress

  largeCard.style.display = "block"
  largeCard.scrollIntoView();
})


beachBtn.addEventListener("click",event=>{
  beachFeaturette.style.display = "block";
  toursFeaturette.style.display = ""
  console.log("Click'd beaches")
  beachFeaturette.scrollIntoView();
  xpRentSection.style.display =""

})

// exploreBtn.addEventListener("click",function(){
//   savannahSection.style.display ="none";
//   vrboSection.style.display="none";
//   tybeeEatSection.style.display="none";
//   largeCard.style.display = "none"
  
//   exploreSection.style.display="block";
//   exploreSection.scrollIntoView();
// })

xpToursBtn.addEventListener("click",event=>{
  beachFeaturette.style.display = ""
  toursFeaturette.style.display = "block"
  xpRentSection.style.display =""
  toursFeaturette.scrollIntoView();
  console.log(toursFeaturette)
 
})

xpRentBtn.addEventListener("click",event=>{
  console.log(`i am a button for xp rent`)
  savannahSection.style.display ="none";
  vrboSection.style.display="none";
  tybeeEatSection.style.display="none";
  largeCard.style.display = "none"
 toursFeaturette.style.display="";

  xpRentSection.style.display ="block"
  exploreSection.scrollIntoView();
})

$(".xpRent").click(function(){
  $(".beachFeaturette ,.toursFeaturette").hide()
})

$(".savannahBtn, .vrboBtn, .tbyeEatsBtn").click(function(){
  $(".beachFeaturette ,.toursFeaturette,.xpRentSection").hide()
})

// $(".tybeeEats").click(function(){
//   $this.fadeIn(4000)})
// 

// $(".nav-img").hide()




