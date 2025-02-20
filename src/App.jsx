import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Quiz from './components/quiz'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Quiz country="What is the capital of France" 
           quiz1="Berlin" 
           quiz2="Madrid" 
           answer1="Paris" 
           quiz3="Lisbon" 

           country1="Who developed ReactJS" 
           quiz4="Google" 
           answer2="Facebook" 
           quiz5="Microsoft" 
           quiz6="Apple" 

           country2 ="Which programming language is used for React" 
           quiz7="Python" 
           quiz8="Java" 
           answer3="Javascript" 
           quiz9="C++"/>
    </>
  )
}
export default App
