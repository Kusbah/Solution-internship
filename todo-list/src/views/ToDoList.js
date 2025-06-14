import React, { useState } from 'react'
import Todos from '../components/todos/Todos'
import TodosForm from '../components/todos/TodosForm'

// const initialData = [
//     {id:1,title:"شراء مستلزمات", done:false},
//     {id:2,title:"شراء منتجات", done:true},
//     {id:3,title:"مشاهدة كورس ", done:false},
//     {id:4,title:"كتابة كود", done:true},
// ]
const initialData = localStorage.getItem('todos')? JSON.parse (localStorage.getItem('todos')) : []
const ToDoList = () => {
    const [todos,setTodos] = useState(initialData)
  //modes : add, filter, edit
    const [mode, setMode] = useState('add')

    const [activeTodo, setActiveTodo] = useState(null)

    const setTolocal = () => {
      localStorage.setItem('todos',JSON.stringify(todos))
    }

    const toggleTodo = (id) => { 

      const newData = todos.map(td => {
        if (td.id === id) {
          td.done = !td.done
              
        }
          return td
        })
        setTodos(newData)
    }
    
    const deleteTodo = id =>{
      setTodos ((data)=>{
        const newData = data.filter(td =>td.id !== id)
        return newData
      })
    }

    const addNewTodo = (title)=>{
      if(mode !== 'edit'){
      const newTodo = {
        id: new Date().getTime(),
        title,
        done:false
      }
      setTodos(data => {
        return[
          newTodo,
          ...data
        ]
      })
    }else{
      const newTodos = todos.map(t =>{
        if(t.id === activeTodo.id){
          t.title = title
        }
        return t
      })
      setTodos(newTodos)
      setMode('add')
    }

    }
    let currentTodos = [...todos]

    const toggleFilter = () =>{
      if(mode === 'edit'){
        return
      }
      if (mode === 'filter'){
        setMode('add')
      }else {
        setMode('filter')
      }
    }
    const editTodo = (todo) =>{
      setMode('edit')
      setActiveTodo(todo)
    }

    

    if(mode === 'filter'){
      currentTodos = todos.filter(t=>!t.done)
    }
    if(mode === 'edit' && activeTodo){
      currentTodos = [activeTodo]
    }


    setTolocal()
  return (
    <main>
    <div className='container'>
      <div className='todos'>
        <TodosForm addNewTodo={addNewTodo } toggleFilter={toggleFilter} mode={mode} activeTodo={activeTodo}/>
        <Todos todos={currentTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo}
        mode={mode}/>
      </div>
    </div>
    </main>
  )
}

export default ToDoList
