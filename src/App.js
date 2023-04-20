import React from 'react'
// import Card from './components/card/Card'
import Counter from './components/counter/Counter'

const App = () => {
  // let animals = ["Dog", "Cat", "Lion", "Rat", "Goat", "Snake", "Leopard", "Jaguar", "Israel", "Tola"];
  // let fruits = ["Pineapple", "Apple", "Banana", "Guava", "Pawapaw", "Watermelon", "Cherry", "Strawberry", "Mango", "African Star Apple"]

  let imageOne = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/50/2471791/1.jpg?3783"
  let imageTwo = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/46/647854/1.jpg?5479"
  let imageThree = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/12/621667/1.jpg?1191"
  let imageFour = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/50/7759812/1.jpg?2110"
  let imageFive = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/12/7759021/1.jpg?3739"

  let titleOne = "Boot"
  let titleTwo = "Brown Boot"
  let titleThree = "Black Boot"
  let titleFour = "Bag"
  let titleFive = "Laptop"

  let descriptionOne = "Get Jennifer Lopez's boots"
  let descriptionTwo = "Buy Elon Musk's boots"
  let descriptionThree = "Get Lisa's favourite black boots"
  let descriptionFour = "Buy Seun's bag"
  let descriptionFive = "Get your Dell brand"



  const julianah =()=>{
    prompt("Enter Your Name")
  }

  const myName =()=>{
   console.log("Julianah")
  }
  return (
    <>
    {/* {
    fruits.map(f=> (
      <ol>i
        <li>{f} </li>
      </ol>
    ))
    } */}
    <div className="d-flex align-items-center justify-content-evenly">
          {/* <Card pix={imageOne}title= {titleOne}description={descriptionOne}/>
          <Card pix={imageTwo}title= {titleTwo}description={descriptionTwo}/>
          <Card pix={imageThree}title= {titleThree}description={descriptionThree}/>
          <Card pix={imageFour}title= {titleFour}description={descriptionFour}/>
          <Card pix={imageFive}title= {titleFive}description={descriptionFive}/> */}

          
          {/* <button onClick ={myName}> button1 </button>
          <button onClick ={julianah}> button2 </button> */}
    </div>

    <Counter/>
    </>
  )
}

export default App