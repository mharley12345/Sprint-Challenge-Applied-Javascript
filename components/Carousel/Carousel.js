/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
function carouselComponent(){
  const carouselContainer = document.querySelector("body > div.carousel-container")
  
   const carousel=document.createElement('div')
   carousel.classList.add('carousel')
   const leftButton = document.createElement('div')
   leftButton.classList.add('carousel','left-button')
   const mtn = document.createElement('img')
   mtn.src="./assets/carousel/mountains.jpeg"
   const comp = document.createElement('img')
  comp.src='./assets/carousel/computer.jpeg'
   const trees = document.createElement('img')
  trees.src='./assets/carousel/trees.jpeg'
   const turnTable = document.createElement('img')
   turnTable.src='./assets/carousel/turntable.jpeg'
   const rightButton = document.createElement('div')
   rightButton.classList.add('carousel','right-button')
   carouselContainer.appendChild(carousel)
  carousel.appendChild(leftButton)
  carousel.appendChild(mtn)
  carousel.appendChild(comp)
  carousel.appendChild(trees)
  carousel.appendChild(turnTable)
  carousel.appendChild(rightButton)
  const image = document.getElementsByTagName('img')
  comp.classList.add('width-100')
  trees.classList.add('width-100')
  turnTable.classList.add('width-100')
  mtn.classList.add('width-100')
  rightButton.addEventListener('click',()=>{
    mtn.style.display="block"
    trees.style.display="block"
    comp.style.display="none"
    turnTable.style.display='none'

  })
  leftButton.addEventListener('click',()=>{
     comp.style.display="block"
     turnTable.style.display='block'
     mtn.style.display="none"
     trees.style.display="none"
  })
               
  return carouselComponent,leftButton,rightButton,turnTable,comp,trees,mtn
  }
  carouselComponent()

  