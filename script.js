
const img = document.getElementById("poster-image");
const title = document.getElementById("poster-title");
const quote = document.getElementById("poster-quote");
const randomizeBtn = document.getElementById("randomize");
const submitBtn = document.getElementById("submit");
const inputQuote = document.getElementById("poster-form-quote");
const inputTitle = document.getElementById("poster-form-title");
console.log(randomizeBtn);
console.log(img);
console.log(title);
console.log(quote);
console.log(randomizeBtn);


// Array of predefined poster objects
const posters = [
  {
    image: 'https://sp-ao.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_1440/https://www.scouting.org/wp-content/uploads/2018/08/safety-moments-hero-water-bottle-rockets.jpg',
    title: 'Rocket out of fumes',
    quote: 'Lets take technology to another level, Elon Musk 2.0',
  },
  {
    image: 'https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638892282/EducationHub/photos/isaac-newton-kneller-painting.jpg',
    title: 'The toturer/ Nightmare Bringer',
    quote: 'Im the nightmare of students, thy an apple fell on my head not the tree',
  },
  {
    image: 'https://i.etsystatic.com/7545759/r/il/e89ba3/2782998788/il_1588xN.2782998788_3w93.jpg',
    title: 'Elon on High Heels',
    quote: 'Lets smoke together, as a wise man said once sharing is caring',
  },
  // Add more poster objects as needed
];
  
  const selec= document.createElement("section");
    selec.className="poster";

  function generateRandomPoster() {
    //Just to make sure that the function is being invoked
    console.log("Hello world!");
   
        //Giving the html elements their values
        img.setAttribute("src", posters[ Math.floor(Math.random() * posters.length)].image);
        img.setAttribute("Alt", "Motivation Poster");
        title.textContent=posters[ Math.floor(Math.random() * posters.length)].title;
        quote.textContent=posters[ Math.floor(Math.random() * posters.length)].quote;
      //Adding the elements to the section 
       console.log(selec);
        selec.appendChild(img);
        selec.appendChild(quote);
        selec.appendChild(title);
        
      
          

            //appends the poster to the webpage 
            document.getElementsByClassName("poster")[0].appendChild(selec);
  
           console.log("IM working");

  }
  randomizeBtn.addEventListener("click", generateRandomPoster);

  
  
  function generateCustomPoster(event) {
    event.preventDefault();

    title.textContent=inputTitle.value;
    quote.textContent=inputQuote.value;
  
  }
  //Makes the button invoke the function when clicked
  submitBtn.addEventListener("click",generateCustomPoster)
  function updatePoster(title, quote) {

    title.textContent=inputTitle.value;
    quote.textContent=inputQuote.value;
  }

//Invoking the function when the button is clicked
  submitBtn.addEventListener("click",updatePoster)

  