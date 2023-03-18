import React from 'react'
import { useSelector } from "react-redux/es/exports";
import { editItem } from '../store/asideSlice/asideSlice';
import { useDispatch } from 'react-redux/es/exports';
export default function Main() {
  const dispatch=useDispatch()
  const selected=useSelector(state=>state.asidePages.Selected)
  const pages=useSelector(state=>state.asidePages.Pages)
  const handleChange=(event)=>{
      const type=event.target.type
      const indexx=Number(event.target.name)
      dispatch(editItem({index:indexx,nValue:event.target.value,itemType:type}))  
      
      
      
  }
  return (
    <main>
        {
          selected>=0?(
            pages[selected].components.map(
              (component,index)=>
              {const ind=index
                console.log(pages[selected].components[0])
                return component.type==="checkbox"?
                <li key={ind}>
                  <div>
                    <input type='checkbox' name={ind} checked={pages[selected].components.length?pages[selected].components[ind].checked:""} onChange={handleChange}/> 
                    <input type="text" className={pages[selected].components[ind].checked?"line_through":""} value={pages[selected].components.length?pages[selected].components[ind].value:""} name={ind} onChange={handleChange}/>
                  </div>
                </li>
                :""
              }
            )
            )
          :""
        }
    </main>
  )
}
