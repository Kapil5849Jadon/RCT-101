// import React from 'react'

const Hello = ()=>{
    return "Hello"
}

// passing the argument

const Os = ()=>{
    return (
        <>
        <div>
           <h1>Mobile Operating System</h1>
           <ul>
               <li>Android</li>
               <li>Blackberry</li>
               <li>iPhone</li>
               <li>Windows Phone</li>
            </ul> 
           <h1>Mobile Manufacturers</h1>
           <ul>
               <li style={{listStyle:"square inside"}}>Samsung</li>
               <li style={{listStyle:"square inside"}}>HTC</li>
               <li style={{listStyle:"disc inside"}}>Micromax</li>
               <li style={{listStyle:"circle inside"}}>Apple</li>
            </ul> 

            
            
        </div>
        
        </>
        
    )
}
export default Os;
