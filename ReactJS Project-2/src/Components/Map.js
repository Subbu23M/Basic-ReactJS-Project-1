import React from 'react'

// Bootstrap4 CSS
import "bootstrap/dist/css/bootstrap.min.css";

// External CSS
import "../Main.scss";

// Store Properties with values in Array of Object

const team = [

    {
        id:1,
        imageUrl:'./Apple.jpg',
        name :'subramanyam',
        qualification:'Bsc.CS',
        info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, a!'

    },

    {
        id:2,
        imageUrl:'./Team.png',
        name :'mounishwar',
        qualification:'Bsc.CS',
        info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, a!'

    },

    {
        id:3,
        imageUrl:'./About.jpg',
        name :'adams',
        qualification:'Msc.Maths',
        info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, a!'

    },

    {
        id:4,
        imageUrl:'./Apple.jpg',
        name :'shiva',
        qualification:'Btech',
        info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, a!'

    },

    {
        id:5,
        imageUrl:'./Logo.jpg',
        name :'sani',
        qualification:'Journalism',
        info:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, a!'

    },

]

console.log(team);

// Parent Component

function Map() {

    return (

        <section className="people my-3 mx-2">

            {/* Use Map: Array Iteration Method */}

            {team.map((mem) => {
                console.log(mem);

                // Assign all the properties to a parametre

                const { imageUrl, name, qualification, info } = mem;

                // Child Component Instance
                return <Members key={mem.id} mem={mem} />;
            })}

        </section>
    );
}

export default Map

// Child Component
const Members = (props) =>{
    console.log(props);

    const {imageUrl,name, qualification, info } = props.mem;

    return(
    
        <div className='text-center'>

            <img src={imageUrl} alt="member" className='img-thumbnail '/> 

            <h4 className='my-1 text-uppercase text-secondary'>
                Name:{name}
            </h4>

            <h3 className='text-danger'>
                Qualification:{qualification}
            </h3>

            <p className='lead text-muted'>
                {info}
            </p>

        </div>

    )

}