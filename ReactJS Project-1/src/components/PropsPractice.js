import React from 'react'

// External CSS
import './Main.scss'

// Bootstrap4 CSS
import "bootstrap/dist/css/bootstrap.min.css";

// About Props in React JS.

function PropsPractice() {
    return (
        <div>

            <Child/>
            
        </div>
    )
}

export default PropsPractice

// Objects
const firstObject = {
    imageUrl : './Laptop.jpg',
    title:'laptop for programmers',
    price:`2500$`
}

const secondObject = {
    imageUrl : './2.jpg',
    title:'laptop for students',
    price:`2200$`
}

const thirdObject = {
    imageUrl : './3.jpg',
    title:'laptop for bloggers',
    price:`2000$`
}

const fourthObject = {
    imageUrl : './4.jpg',
    title:'laptop for trainers',
    price:`2100$`
}

// Arrow function
const Child = () => {
    return(

        <div className='plants'>

            {/* Child Component Instances we passed properties with values */}

            {/* row-1 */}
            <Plant image = {firstObject.imageUrl} title = {firstObject.title} price = {firstObject.price}>

                <div className="button btn btn-outline-secondary btn-md text-capitalize">
                    press here 
                </div> 

            </Plant>

            <Plant image = {secondObject.imageUrl} title = {secondObject.title} price = {secondObject.price} />
            <Plant image = {thirdObject.imageUrl} title = {thirdObject.title} price = {thirdObject.price} />
            <Plant image = {fourthObject.imageUrl} title={fourthObject.title} price = {fourthObject.price} /> 
            
            {/* row-2 */}
            <Plant image = {secondObject.imageUrl} title = {secondObject.title} price = {secondObject.price} />

            <Plant image = {thirdObject.imageUrl} title = {thirdObject.title} price = {thirdObject.price} >

                <div className="button btn btn-outline-secondary btn-md text-capitalize">
                    press here 
                </div> 

            </Plant> 

            <Plant image = {fourthObject.imageUrl} title={fourthObject.title} price = {fourthObject.price} />
            <Plant image = {firstObject.imageUrl} title = {firstObject.title} price = {firstObject.price} />

        </div>

    )
}

// Nested Components

// Arrow function
const Plant = (props) =>{

    console.log(props);

    const {image,title,price} = props

    return(

        <div className='text-center'>

            <img src={image} className='img-thumbnail' alt="Laptop"/>

            <figcaption className='figure-caption font-weight-bold text-capitalize text-info'>{title}</figcaption>

            <h4 className='text-warning'>{price}</h4>

            {props.children}

        </div>

    )
}