import React from 'react'
import { useSelector } from "react-redux/es/exports";
import { FaPlus } from 'react-icons/fa';
import { addPage,setSelect } from '../store/asideSlice/asideSlice';
import { useDispatch } from "react-redux/es/hooks/useDispatch";

export default function Aside() {
    const isAwake=useSelector(state=>state.asidePages.isAwake)
    const pages=useSelector(state=>state.asidePages.Pages)
    const selected=useSelector(state=>state.asidePages.Selected)
    const dispatch=useDispatch()
  return (
    <>
    {<aside className={isAwake?"width300":""}>
        <ul>
            {
                pages.length===0?<li>none</li>:
                pages.map(
                    (page,index)=>{
                        const ind=index 
                        return <li key={index} className={selected===ind?"selected":"a"}
                        onClick={()=>{console.log(selected);dispatch(setSelect(ind))}}
                        >{page.name}</li>
                    }
                )
            }
        </ul>
        <FaPlus onClick={()=>dispatch(addPage())}/>
    </aside>}
    </>
  )
}
