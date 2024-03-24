// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
//

function App() {
  const [todo, setTodo] = useState([ ]);
  const [newTodo, setNewTodo] = useState('')
  const onChangeNewTodo = (e) => {
    setNewTodo(e.target.value);
  } 
  const onSubmit = (e) => {
    e.preventDefault();
    setTodo([{title: newTodo, completed:false, id: Math.random()}])
  }
   
 
  return (
    <> {/* Fragment */}
      <div className="App">TODO</div>      
      <div className="App">
        {todo.length === 0 ? (
          <div>
            <div>할 일을 추가 해 보세요</div>
            <form onSubmit ={onSubmit}>
              <input value={newTodo} onChange={onChangeNewTodo} />
              <button>추가</button>
            </form>
            
          </div>
        ): (
          <>
            {todo.map((t) => (<div key={t.id}>{t.title}</div>))}
            <form onSubmit ={onSubmit}>
              <input value={newTodo} onChange={onChangeNewTodo} />
              <button>추가</button>
            </form>
          </>
          
        )}
       
      </div>    
    </>
    
  );
}

export default App;
