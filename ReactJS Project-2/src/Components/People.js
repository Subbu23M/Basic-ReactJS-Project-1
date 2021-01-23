import React from 'react'

// External CSS
import "../Main.scss";

function People() {
    return (
        <div>

            {/* Child Component Instance */}
            <Peopl/>

        </div>
    )
}

export default People

// About functional components

// Parent Component
const Peopl = () =>{
    return(

        <article className='tea'>

            {/* Child Component Instance */}

                <Content para = 

                {

                    {
                        id:1,
                        imageUrl : './About.jpg',
                        name : `jesicca`,
                        qualification:`web developer`,
                        info:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, praesentium?`
                    }
                } 
                />

                <Content para = 

                {

                    {
                        id:2,
                        imageUrl : './Team.png',
                        name : `gary simon`,
                        qualification:`ui designer`,
                        info:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, praesentium?`
                    }
                } 
                />

                <Content para = 

                {

                    {
                        id:3,
                        imageUrl : './Logo.jpg',
                        name : `neeraj patel`,
                        qualification:`freelancer`,
                        info:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, praesentium?`
                    }
                } 
                />

        </article>
    )
}

//  We store hard coded html tags in [Child Component]
const Content = (props) =>{

    console.log(props);

    return(

        <div>

            <section className='my-2 mx-2'>

                
                    <img src={props.para.imageUrl} alt="image" className='img-thumbnail'/>

                    <h3 className='text-center text-secondary text-capitalize'>
                        {props.para.name}
                    </h3>

                    <h5 className='text-uppercase text-dark text-center'>
                        {props.para.qualification}
                    </h5>

                    <p className='text-muted lead'>
                        {props.para.info}
                    </p>

                
            </section>

        </div>
    )

}