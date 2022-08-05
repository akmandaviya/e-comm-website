const wrapper = document.querySelector(".sliderWrapper")
// console.log(wrapper)

const menuItems = document.querySelectorAll(".menuItem")


const products = [
    {
      id: 1,
      title: "Air Force",
      price: 1499,
      colors: [
        {
          code: "black",
          img: "./assests/air.png",
        },
        {
          code: "darkblue",
          img: "./assests/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 3499,
      colors: [
        {
          code: "lightgray",
          img: "./assests/jordan.png",
        },
        {
          code: "green",
          img: "./assests/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 2499,
      colors: [
        {
          code: "lightgray",
          img: "./assests/blazer.png",
        },
        {
          code: "green",
          img: "./assests/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 1099,
      colors: [
        {
          code: "black",
          img: "./assests/crater.png",
        },
        {
          code: "lightgray",
          img: "./assests/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 1999,
      colors: [
        {
          code: "gray",
          img: "./assests/hippie.png",
        },
        {
          code: "black",
          img: "./assests/hippie2.png",
        },
      ],
    },
  ];
  
  let choosenProduct = products[0]

  const currProductImg = document.querySelector(".productImg");
  const currProductTitle = document.querySelector(".productTitle");
  const currProductPrice = document.querySelector(".productPrice");
  const currProductColors = document.querySelectorAll(".color");
  const currProductSizes = document.querySelectorAll(".size");

//moving the slider on x axis, starting the position from 0 on x-axis
menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // console.log("click event fired" +" "+index) 0 1 2 3 4 

    //changing the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`

    //changing the choosen product
    choosenProduct = products[index]

    //changing text of current product
    currProductTitle.textContent = choosenProduct.title;
    currProductPrice.textContent = choosenProduct.price + "/-";
    currProductImg.src = choosenProduct.colors[0].img

     //asssiging new colors
    currProductColors.forEach((color,index) => {
       color.style.backgroundColor = choosenProduct.colors[index].code;
    })

  })
})

currProductColors.forEach((color,index) => {
  color.addEventListener("click", () => {
     currProductImg.src = choosenProduct.colors[index].img
  })
})

currProductSizes.forEach((size,index) => {
   size.addEventListener("click", () => {
      currProductSizes.forEach((size) => {
        size.style.backgroundColor ="white";
        size.style.color="black";
      })
     size.style.backgroundColor ="black";
     size.style.color ="white";
   })
})


const productButton = document.querySelector(".productButton")
const payment = document.querySelector(".payment")
const close = document.querySelector(".close")

productButton.addEventListener("click", () => {
    payment.style.display="flex"
})

close.addEventListener("click", () => {
    payment.style.display="none"
})



const paymentDetails =document.querySelector(".payInput"); 
function check () {
if(paymentDetails.value !== "") {
   alert("Yay!! your order has been placed");
   payment.style.display ="none"; 

}
else if  (paymentDetails.value === "") {
  alert("Payment Details cannot be empty");
}
}
