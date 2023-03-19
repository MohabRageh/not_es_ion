
import { addItem } from '../store/asideSlice/asideSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { FaBars } from 'react-icons/fa';
import { awake } from '../store/asideSlice/asideSlice';
export default function ComponentsPicker() {
  const selected=useSelector(state=>state.asidePages.Selected)
  const isAwake=useSelector(state=>state.asidePages.isAwake)
  const dispatch=useDispatch()
  
  return (
    <div className='components_picker'>
      <ul>
        <li>
          <FaBars className={isAwake?"awake_btn animation1":"awake_btn"} onClick={()=>dispatch(awake())} />
        </li>
        <li>
          <button
            onClick={()=>{selected>=0?dispatch( addItem ( {type:"checkbox",value:""} ) ):console.log()}}
          >Checkbox</button>
        </li>
        <li>
        <button
            onClick={()=>{selected>=0?dispatch( addItem ( {type:"text",value:"drag me to grow => on my bottom right"} ) ):console.log()}}
          >Text</button>
        </li>
        <li>
          <button>Table</button>
        </li>
      </ul>
    </div>
  )
}
