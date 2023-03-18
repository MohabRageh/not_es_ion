import React from 'react'
import { addItem } from '../store/asideSlice/asideSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
export default function ComponentsPicker() {
  const selected=useSelector(state=>state.asidePages.Selected)
  const dispatch=useDispatch()
  return (
    <div className='components_picker'>
      <ul>
        <li>
          <button
            onClick={()=>{selected>=0?dispatch( addItem ( {type:"checkbox",value:""} ) ):console.log()}}
          >Checkbox</button>
        </li>
        <li>
          <button>Header</button>
        </li>
        <li>
          <button>Table</button>
        </li>
      </ul>
    </div>
  )
}
