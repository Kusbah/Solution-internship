import FeatherIcon from 'feather-icons-react'
import { useState } from 'react'
const TodosForm = ({addNewTodo, toggleFilter,mode,activeTodo}) => {
  const defaultTitle = mode === 'edit' ? activeTodo.title : ''
  const [editRender,setEditRander] = useState(false)

  const [title,setTitle] = useState(defaultTitle)
  if(mode === 'edit' && !editRender){
    setTitle(activeTodo.title)
    setEditRander(true)
  }
  const handleInputChange = (e)=>{
    setTitle(e.target.value)
  }
  const handleAddNewTodo = () =>{
    setEditRander(false)
    if(!title.trim())
      return
    addNewTodo(title)
    setTitle('')
  }
  return (
    <div className='todos-form'>
        <div className={`todos-form_icon ${mode === 'filter' ? 'active' : ''}`}>
            <FeatherIcon icon='circle' onClick={toggleFilter}></FeatherIcon>
        </div>
        <div className='todos-form_form'>
            <input type='text' placeholder='اضف مهمة جديدة ....' onChange={handleInputChange} value={title}/>
        </div>
        <div className='todos-form-submit'>
            <button className='btn' disabled={!title.trim()} onClick={handleAddNewTodo}>{mode === 'edit' ? 'تعديل':'اضافة'}</button>
        </div>
      
    </div>
  )
}

export default TodosForm
