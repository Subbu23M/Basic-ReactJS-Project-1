import React from 'react'

// External CSS
import './Map.scss';

// Bootstrap4 CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Store Properties with values in Array of objects

const LapDetails = [

    {
        id:1,
        imageUrl:'./Laptop.jpg',
        title:'laptop for programmers',
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut nemo, beatae labore officia sequi illum! Asperiores aperiam velit tempore maiores!',
        price:`2500$`
    },

    {
        id:2,
        imageUrl:'./2.jpg',
        title:'laptop for students ',
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut nemo, beatae labore officia sequi illum! Asperiores aperiam velit tempore maiores!',
        price:`2200$`
    },

    {
        id:3,
        imageUrl:'./3.jpg',
        title:'laptop for bloggers ',
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut nemo, beatae labore officia sequi illum! Asperiores aperiam velit tempore maiores!',
        price:`2300$`
    },

    {
        id:4,
        imageUrl:'./4.jpg',
        title:'laptop for employees ',
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut nemo, beatae labore officia sequi illum! Asperiores aperiam velit tempore maiores!',
        price:`2000$`
    }

]
console.log(LapDetails);
console.log(LapDetails.length);

// Array Iteration Method
// Map():Returns a new array and performs operation on each and every element.

// Parent Component
function MapPractice() {

    return (

        <article className='laptop'>

            {/* Map() Array Iteration Method on Array of objects  */}

            {/* Arrow function */}

            {LapDetails.map( (lap) => 

                {
                    console.log(lap);

                    // Assign all the properties of Object to parametre
                    const {imageUrl,title,description,price} = lap;

                    return(

                        // Child Component Instance

                        // <Laptop property = {lap}/>

                        // <Laptop key={lap.id} lap={lap}/>

                        // Spread Operator
                        <Laptop key={lap.id} {...lap}/>
                                            
                    )

                })
            }

        </article>

    )
}

export default MapPractice

// Nested Component

// Arrow function
// Child Component

const Laptop = (props) =>{
    console.log(props);

    // const {imageUrl,title,description,price} = props.lap;

    const {imageUrl,title,description,price} = props;

    return(

        <section>

            <img className='img-thumbnail' src={imageUrl} alt="Laptop"/>

            <h3 className='text-center text-capitalize text-info'>
                {title}
            </h3>

            <p className='w-auto text-muted'>
                {description}
            </p>

            <h5 className='text-warning text-center'>
                {price}
            </h5>

        </section>
    )
}