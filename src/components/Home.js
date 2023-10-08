"use client"
import React from 'react';
import Header from './Header';
import Form from './Form';
import Board from './Board';

const Tick = () => <svg className="h-5 w-5 text-purple-500 inline-block"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <polyline points="20 6 9 17 4 12" /></svg>

const Home = () => {
  return (
    <div className="bg-white">
        <Header/>
        <div className='my-10 p-3'></div>
        <div className="bg-[url('/bg.PNG')] bg-cover p-5 md:p-20" >
            <h1 className='text-4xl md:text-6xl font-extrabold md:text-center'> Experience the Future of <br className='hidden md:block' />Search with OSO</h1>
            <p className='my-6 text-2xl md:text-3xl font-light md:text-center'>Find what your looking for faster by letting OSO do the research for you.</p>
            <Form/>
            <div className='grid grid-cols-7 mt-8 text-center'>
                <div></div>
                <div></div>
                <div className='text-sm'>
                    <span><Tick/></span><span className='ml-1'>Fully Uncensored</span></div>
                <div className='text-sm'>
                    <span><Tick/></span><span className='ml-1'>7-data Free Trial</span>    
                </div>
                <div className='text-sm'>
                <span><Tick/></span><span className='ml-1'>Customized Plug-ins</span>
                </div>
                <div></div>
                <div></div>
            </div>
            <div className='md:flex md:items-center md:justify-center hidden md:block pt-8'>
            {/* <button className="playbutton">play</button> */}
            <video width="90%" controls style={{borderRadius:20}} onPlaying={()=>console.log("Video playing")}>
                <source src="/search.mp4" type="video/mp4"/>
                <source src="/search.ogg" type="video/ogg"/>
                Your browser does not support the video tag.
            </video>
            </div>
            <h1 className='text-2xl md:text-4xl font-bold md:text-center mt-20'> Many people already feel the magic </h1>
            <div className='grid grid-cols-2 mt-20 text-center mb-20'>
                <div className='px-4 comment-border mx-6'>
                    <div className='mt-4'>
                        It&apos;s next level from chatGPT bc you can pull <br/> data about real time trends, sentiment and analytics. <br/> Content creators are going to make a lot of <br/>money with OSO.
                    </div>
                    <div className='mt-4'>
                        <span><img src='/user.PNG' className='' style={{display:'inline-block', borderRadius:'100%'}} width={30} alt="img" /></span>
                        <span className='mt-6 text-gray-400 mx-4'>Mark. Josh</span>
                    </div>
                </div>
                <div className='px-4 comment-border mx-6'>
                    <div className='mt-4'>
                        It&apos;s next level from chatGPT bc you can pull <br/> data about real time trends, sentiment and analytics. <br/> Content creators are going to make a lot of <br/>money with OSO.
                    </div>
                    <div className='mt-4'>
                        <span><img src='/user.PNG' className='' style={{display:'inline-block', borderRadius:'100%'}} width={30} alt="img" /></span>
                        <span className='mt-6 text-gray-400 mx-4'>Mark. Josh</span>
                    </div>
                </div>
            </div>
            <Form/>
            <h1 className='text-2xl md:text-4xl font-bold md:text-center mt-20'> Advantages of OSO Search  </h1>
            <p className='my-6 text-sm md:text-2xl font-light text-gray-400 md:text-center'>
                OSO reads through thousands of websites in seconds, so you don’t have to waste time jumping <br/> between multiple sites, and delivers you a comprehensive answer.
            </p>
            <Board 
                color={"#97D5CC"} 
                heading={'Up to Date'} 
                content={"Unlike AI chatbots with fixed knowledge limits, OSO Search guarantees you access to the latest and most pertinent information."} 
                imgsrc={'/imgOne.PNG'}
                width={600}
                pad={true}
            />
            <Board 
                color={"#57efef"} 
                heading={'Uncensored'} 
                content={"OSO believes in free speech and unrestricted access to knowledge, ensuring your receive in-depth and unfiltered answers."} 
                imgsrc={'/imgTwo.png'}
                width={320}
                pad={false}
            />
            <Board 
                color={"#00D8FF"} 
                heading={'Secure'} 
                content={"With OSO, there’s no need to venture into potentially harmful sites since the searching is done for you."} 
                imgsrc={'/imgThree.png'}
                width={320}
                pad={false}
            />
        </div>
        <Form/>
        <h1 className='text-2xl md:text-4xl font-bold md:text-center mt-20'> Ferquently Asked Questions </h1>
        <div className='py-20'>
            <p className='bg-gray-200 mx-40 p-8 text-2xl rounded mb-6'>Benefits of OSO?</p>
            <p className='bg-gray-200 mx-40 p-8 text-2xl rounded mb-6'>Why should I choose OSO?</p>
            <p className='bg-gray-200 mx-40 p-8 text-2xl rounded mb-6'>How Does OSO&apos;s AI Differ From Others?</p>
            <p className='bg-gray-200 mx-40 p-8 text-2xl rounded mb-6'>What is pricing?</p>
            <p className='bg-gray-200 mx-40 p-8 text-2xl rounded mb-6'>On which platforms can I access OSO?</p>
        </div>
        <div>
        </div>
        <div className='bg-black text-white px-40 py-20 flex justify-between'>
            <div>

                <img src='/black-logo.PNG' style={{display:'inline-block'}} alt="img" />
                <span className='pt-8'>Experience the power of Ai</span> 
            </div>
            <div>
                <p className='font-thin'>Stay updated on the latest news and features.</p>
                <input className='mt-2' style={{width:'100%', padding:20, backgroundColor:'black', border:'1px solid grey', borderRadius:10}} placeholder='Enter Email' />
                <img src='/socials.PNG' className='mt-4'  />
            </div>
        </div>
    </div>
  )
}

export default Home