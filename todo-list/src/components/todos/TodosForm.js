import FeatherIcon from 'feather-icons-react'
import { useState } from 'react'
const TodosForm = ({addNewTodo, toggleFilter,mode}) => {
  const [title,setTitle] = useState('')

  const handleInputChange = (e)=>{
    setTitle(e.target.value)
  }
  const handleAddNewTodo = () =>{
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
            <button className='btn' disabled={!title.trim()} onClick={handleAddNewTodo}>اضافة</button>
        </div>
      
    </div>
  )
}

export default TodosForm
