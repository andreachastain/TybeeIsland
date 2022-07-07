let explore =[
 {
    catagory:"Activity",
    location: "Tybee",
    description: "Beach",
    name:"North Beach",
    address:"North Jetty to 1st Street",
    blurb:"One of the more popular public beach entry points for this section is right across from the Tybee Lighthouse — with restrooms, vending machines, and changing areas. Don’t forget, you must pay to park almost everywhere on the island, so have your credit card handy.",
    blurb2:"Another perk of this beach is that you can see the cargo ships coming in and out of Savannah, and the water here really attracts more dolphins close to shore.",
    website:"",
    additionalInfo:"",
    photolink:""
}
,
 {
    catagory:"Activity",
    location: "Tybee",
    description: "Beach",
    name:"Mid Beach",
    address:"1st Street to 14th Street",
    blurb:"This is where you’ll find most of the locals who want to escape the crowds.",
    blurb2:"Mid Beach” is considered the beach adjacent to 1st St – 14th St.  You’ll hear some folks say that it starts at The Curve. Note that they mean the curve along Hwy 80 (the main street) and not the curve of the island (that’s North Beach).",
    website:"",
    additionalInfo:"",
    photolink:""
},
{
    catagory:"Activity",
    location: "Tybee",
    description: "Beach",
    name:"South Beach",
    address:"14th Street to 18th Street",
    blurb:"At South Beach you’ll find the Tybee Pier and Pavilion, which is really fun to explore. Bring cash for your drinks! (And pack an ID in your towel bag if you want to buy something alcoholic. They’re serious here.) Don’t miss a chance to head up to the pier to see the anglers and grab a great view of the Atlantic Ocean.",
    blurb2:"There is plenty of parking here, as well as restrooms.  This part of the island is also where you’ll find most of the shops and hotels, like Hotel Tybee.  You’ll also find greater crowds on the beach. Still, the beaches are so wide and wonderful, you’ll never feel claustrophobic. We had no issue playing frisbee or riding the boogie boards here.",
    website:"",
    additionalInfo:"",
    photolink:""
},
{
    catagory:"Activity",
    location: "Tybee",
    description: "Beach",
    name:"Back River Beach",
    address:"18th Street to Back River Fishing Pier",
    blurb:"This beach curves around the bottom tip of the island, up into Tybee Creek, where you’ll find the Back River Fishing Pier",
    blurb2:"Every time we’ve been, there were only about 5 other people there. The beaches are wide, the water laps in waves but is calm, and it feels so peaceful. There are a few places to park, and a public restroom at the pier. You can see Little Tybee Island across the river, too!",
    website:"",
    additionalInfo:"During low tide it looks like you can walk to Little Tybee, it’s only about a mile. DON’T DO IT. Many people are hurt each year trying this stunt. DO go visit the uninhabited island – but go by kayak or the like, not on foot!",
    photolink:""
},
{
    catagory:"Activity",
    location: "Tybee",
    description: "history",
    name:"Tybee Lighthouse and Lighthouse Musuem",
    address:"30 Meddin Dr",
    blurb:"Tybee Island Light Station is the oldest and the tallest lighthouse in the state with only 178 steps! You can climb the stairs to the top of the lighthouse for fantastic views of the Savannah River. In fact, sometimes you can see Hilton Head! The light station was first erected on orders of General Oglethorpe, with construction occurring in 1736. The Tybee Island Light Station is one of America’s most intact light stations, having all of its historic support buildings on its three-acre site — and it currently holds its 1916 day mark.",
    blurb2:"Ticket also offers the ability to see an 1899 Military Battery that houses the Tybee Island Museum. Exhibits cover the time of the Euchee Tribe, the history of Fort Screven, Tybee’s Golden Era and more.",
    website:"",
    additionalInfo:"",
    photolink:""
},
{
    catagory:"Activity",
    location: "Tybee",
    description: "history",
    name:"Fort Pulaski National Monument",
    address:"Cockspur Island on the way to Tybee",
    blurb:"Prior to the Civil War, President Madison declared he wanted fortification for the coast. Pulaski was to be Savannah’s protection. Construction was completed under the watchful eye of then West Point graduate and Second Lieutenant Robert E. Lee. ",
    blurb2:"In 1862, during the American Civil War, the Union Army successfully tested rifled cannons in combat, which rendered brick fortifications obsolete..",
    website:"",
    additionalInfo:"",
    photolink:""
}

]


let testBtn = document.querySelector(".TestingBtn");
let emtpyTitle =document.querySelector(".emtpyTitle")


let emtpyImg = document.querySelector(".emtpyImg")
let emtpyText= document.querySelector(".emtpyText")
let largeCard = document.getElementById("largeCard")
let emptyHours = document.querySelector(".emptyHours")
let emptyAddress = document.querySelector(".emptyAddress")

// function displayCard(){
//     for(let i=0;i<explore.length;i++){
//         let genName = 
//     }
// }


testBtn.addEventListener("click",event=>{
    for(let i= 0;i<explore.length;i++){
       console.log(explore[i].name)




    }
    largeCard.style.display = "block"
    largeCard.scrollIntoView();
    console.log(emtpyTitle)
})