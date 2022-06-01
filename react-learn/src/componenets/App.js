import React from 'react'
import ValidationComp, { A} from './ValidationComp'
import FuncDefault from './FuncDefault'
export default function App() {
  return (
    <div>
      <ValidationComp a={10} onClick={()=> {
        console.log('aaa')
      }} c={FuncDefault} d={new A()} sex='男'/> 
    </div>
  )
}
