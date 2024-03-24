import './App.css';
import {useEffect, useState} from 'react';
import TodoForm from './TodoForm';

function App(){
    const [todo, setTodo] = useState([]);
    const [newTodo, setNewTodo] = useState('');
         
    const onChangeNewTodo = (e) => {
        setNewTodo(e.target.value);
    }
    useEffect(() => {

    },[todo]);

    const onSubmit = (e) => {
    e.preventDefault();
    todo.push([{title: newTodo, completed:false, id: Math.random()}])
    const nextTodo = [...todo, {title:newTodo, completed:false, id:Math.random()}];
    setTodo(nextTodo);
    console.log(todo);
       
  }
       
    return (
        <>
        <div>Todo</div>
        <div className= "App">
          {todo.length === 0 ? (
          <div>
            <div>할 일을 추가 해 보세요</div>
            <TodoForm />
            
          </div>
          ): (
            <>
            {todo.map((t) => (<div key={t.id}>{t.title}</div>))}
            <TodoForm />            
            </>
          
          )}
        </div>       
        </>
        
    );
}
export default App;