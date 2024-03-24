import './App.css';
import {useState} from 'react';

function App(){
    const [todo, setTodo] = useState([]);
         
    
    return (
        <>
        <div>Todo</div>
        <div className= "App">
          {todo.length === 0 ? (
          <div>
            <div>할 일을 추가 해 보세요</div>
            <input />
          </div>
          ): (
          todo.map((t) => (<div key={t.id}>{t.title}</div>))
          )}
        </div>       
        </>
        
    );
}
export default App;