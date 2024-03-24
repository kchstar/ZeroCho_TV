import './App.css';
import {useState} from 'react';

function App(){
    const [todo, setTodo] = useState([
    {id: 1,title: '아침 챙겨먹기' , completed:true},             
    {id: 2,title: '점심 챙겨먹기' , completed:false},
    {id: 3,title: '저녁 챙겨먹기' , completed:false},
    {id: 4,title: '저녁2 챙겨먹기' , completed:false},
    {id: 5,title: '저녁3 챙겨먹기' , completed:false},
    ]);
         
    
    return (
        <>
         <div>Todo</div>
        <div className= "App">
        {
        todo.map((t) => (<div key={t.id}>{t.title}</div>))
        }      
        </div>        
        </>
        
    );
}

export default App;