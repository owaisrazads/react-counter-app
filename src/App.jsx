import React, { useState } from 'react'

const App = () => {

//  let num = 0
let [num , setNum] = useState(0)

  

  const addBtn = () => {

    // num = num + 1
    setNum(num + 1)
    console.log(num);
 
  }
  const subBtn = () => {

    // num = num + 1
    if (num > 0) {
      setNum(num - 1) 
    }return
   
 
  }



  return (
    <div className='mt-[25%]'>
      <h2 className='text-center font-bold text-4xl mt-5'>Counter App  </h2>
      <div className='flex justify-center mt-5'>
      <button className='bg-blue-700 w-[80px] h-[40px] text-white rounded-md mr-3' onClick={addBtn}  >ADD  </button>  <h2 className='text-2xl'> { num } </h2> < button className='bg-red-700 w-[80px] h-[40px] text-white rounded-md ml-3' onClick={subBtn}   >SUB  </button>
      </div>
      
    </div>
  )
}

export default App
