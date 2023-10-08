import React from 'react'

const Board = (props) => {
  return (
    <div className='p-10 mx-10'>
        <div className='flex justify-between pt-16 pl-16 image-contain' style={{backgroundColor:props.color}}>
            <div className="w-4/12">
                <h1 className='text-5xl font-extrabold mt-4'>{props.heading}</h1><br/>
                <p className='text-2xl font-light mt-2'>
                {props.content}
                </p>
            </div>
            <div className={'hidden md:block pt-24'}>
            <img src={props.imgsrc} className={`${props.pad? 'image':' mr-16'}`} width={props.width} alt="img" />
            </div>
        </div>
    </div>
  )
}

export default Board