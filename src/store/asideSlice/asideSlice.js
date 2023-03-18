import { createSlice } from "@reduxjs/toolkit";

const initialState={
    Pages:[],
    Selected:-1
}
export const asideSlice=createSlice(
    {
        name:"aside",
        initialState,
        reducers:{
            addPage:(state)=>{state.Pages.push(
                {
                    name:`Page ${state.Pages.length+1}`,
                    components:[]
                }
                )},
            setSelect:(state,action)=>{state.Selected=action.payload},
            addItem:(state,action)=>{state.Pages[state.Selected].components.push(
                {
                    type:action.payload.type,
                    value:action.payload.value,
                    checked:false
                }
            )},
            editItem:(state,action)=>
            {
                const currentComponent=action.payload.index
                const selected=state.Selected
                const newValue=action.payload.nValue
                if(action.payload.itemType=== "text"||action.payload.itemType=== "textarea")
                {
                    state.Pages[selected].components[currentComponent]=
                    {...state.Pages[selected].components[currentComponent],value:newValue}
                }else if(action.payload.itemType==="checkbox"){
                    state.Pages[selected].components[currentComponent]=
                    {...state.Pages[selected].components[currentComponent],checked:!state.Pages[selected].components[currentComponent].checked}
                }
            }
    }
}
)

export const {addPage,setSelect,addItem,editItem} =asideSlice.actions
export default asideSlice.reducer