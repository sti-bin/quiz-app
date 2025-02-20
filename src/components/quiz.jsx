import React from 'react'
import './Quiz.css'
import { useState } from 'react'
const Quiz = (props) => {


    return (
        <>
          <div className='styles flex flex-col items-center justify-start h-100px pt-5px'>
          <div className='child shadow-lg'>
          <h3 className='text-sm font-medium m-5px'>{props.country}?</h3>
            <p className='quiz text-start'>{props.quiz1}</p>        
            <p className='quiz text-start'>{props.quiz2}</p>    
            <p className='answer text-start'>{props.answer1}</p>
            <p className='quiz text-start'>{props.quiz3}</p>
          </div>
        </div>

        <div className='styles flex flex-col items-center justify-start h-100px pt-5px'>
          <div className='child shadow-lg'>
          <h3 className='text-sm font-medium m-5px'>{props.country1}?</h3>
            <p className='quiz text-start'>{props.quiz4}</p>        
            <p className='answer text-start'>{props.answer2}</p>
            <p className='quiz text-start'>{props.quiz5}</p>
            <p className='quiz text-start'>{props.quiz6}</p>
          </div>
        </div>

        <div className='styles flex flex-col items-center justify-start h-100px pt-5px '>
          <div className='child shadow-lg'>
          <h3 className='text-sm font-medium m-5px'>{props.country2}?</h3>
            <p className='quiz text-start'>{props.quiz7}</p>        
            <p className='quiz text-start'>{props.quiz8}</p>
            <p className='answer text-start'>{props.answer3}</p>
            <p className='quiz text-start'>{props.quiz9}</p>
          </div>
        </div>

        </>

      )
}

export default Quiz
