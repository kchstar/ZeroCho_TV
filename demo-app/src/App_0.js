import './App.css';
import {useState} from 'react';

function App(){
    const [todo, setTodo] = useState([
    {title: '아침 챙겨먹기' , completed:true},             
    {title: '점심 챙겨먹기' , completed:false},
    {title: '저녁 챙겨먹기' , completed:false},
    ]);
         
    
    return (
        <div className= "App">
        <div>{todo[0].title}</div>
        <div>{todo[1].title}</div>
        <div>{todo[2].title}</div>      
        </div>
    );
}

export default App;