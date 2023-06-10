import React from 'react'
import workImg from '../assets/workImg.jpeg'
import realEstate from '../assets/realestate.jpg'
import project1 from '../assets/project1.png'
import project3 from '../assets/project3.png'

const Work = () => {
  return (
    <div name="projects" className=' w-full md:h-screen text-gray-300 bg-[#0a192f]'>

        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

            <div className='pb-8'>
                
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 '> Projects </p>
                <p className='py-6'>// Check out some of my recent projects </p>
                
                
            </div>


            <div 
            className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                <div style={{backgroundImage:`url(${project1})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div '>

                    <div className='opacity-0 group-hover:opacity-100'>
                        
                            <span className='text-2xl font-bold text-white tracking-wider'> chrome extention </span>

                            <div className='pt-8 text-center'> 
                         
                            <a href='https://github.com/pranavk-23/leads-tracker'>
                                
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>code</button>
                            </a>
                            </div>

                        
                    </div>

                    
                    
                    </div>


                    <div style={{backgroundImage:`url(${workImg})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div '>

                    <div className='opacity-0 group-hover:opacity-100'>
                        
                            <span className='text-2xl font-bold text-white tracking-wider'> Web application </span>

                            <div className='pt-8 text-center'> 
                         
                            <a href='https://github.com/pranavk-23/Password-generator'>
                                
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>code</button>
                            </a>
                            </div>

                        
                    </div>

                    
                    
                    </div>


                    <div style={{backgroundImage:`url(${project3})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div '>

                    <div className='opacity-0 group-hover:opacity-100'>
                        
                            <span className='text-2xl font-bold text-white tracking-wider'> React Js application </span>

                            <div className='pt-8 text-center'> 
                         
                            <a href='https://github.com/pranavk-23/Meme-generator'>
                                
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>code</button>
                            </a>
                            </div>

                        
                    </div>

                    
                    
                    </div>


            </div>
            

        </div>


    </div>
  )
}

export default Work