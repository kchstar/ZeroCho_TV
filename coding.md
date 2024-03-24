![]{}
$ npm create vite@latest
# Error 
>npm ERR! code ENOENT
npm ERR! syscall open

$ npm cache clean --force
$ npm i axios

$ npm init
$ npm install
$ 
# Error 
>'react-scripts'은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는
배치 파일이 아닙니다.
$ npm install -save react-scripts
# Error
[eslint] EPERM: operation not permitted, open 'H:\Coding\ZeroCho_TV\demo-app\node_modules\.cache\.eslintcache'
ERROR in [eslint] EPERM: operation not permitted, open 'H:\Coding\ZeroCho_TV\demo-app\node_modules\.cache\.eslintcache'
$ npm cache clean --force
$ npm install -g npm@latest --force

$ npm install --force
# 함수와 함수의 호출
  onChangeNewTodo={onChangeNewTodo()} 함수호출
  
webpack compiled with 1 error
# 표시하기 
![](./11.20.03.png)
## Java
>import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

## jsx
>function App(){
    const [todo:undefined, setTodo] = useState(initialState[
         //  할일데이터는 todo 빠뀌는데이터는 setTodo   기본값은 배열에 
         // {객체}[배열] 
    {title: '아침 챙겨먹기' , completed:true}, 
            데이터           데이터가 바뀌는지 
    {title: '점심 챙겨먹기' , completed:false},
    {title: '저녁 챙겨먹기' , completed:false},
    ])     
    
    return (
        <div className= "App">
        <div>{todo[0].title}</div>
        <div>{todo[1].title}</div>
        <div>{todo[2].title}</div>    
        </div>
    );
>}
export default App;

# 조건, 반복문 
![](./11.43.31.png)
>import './App.css';
import {useState} from 'react';
function App(){
    const [todo, setTodo] = useState([
    {id:1, title: '아침 챙겨먹기' , completed:true},             
    {id:2, title: '점심 챙겨먹기' , completed:false},
    {id:3, title: '저녁 챙겨먹기' , completed:false},
    ]);
  return (
    <> {/* Fragment */} 주석 
    <div className="App">
     {
      todo.map((t) => (<div = key={t.id}>{t.title}</div>))

      }    
    </div>
>  );
>}
# 할 일이 없을때?
![](./12.30.10.png)
>import './App.css';
import {useState} from 'react';

>function App(){
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
>}

>export default App;
# 할일을 추가 해보는 것?
>function App() {
  const [todo, setTodo] = useState([ ]);
  const [newTodo, setNewTodo] = useState('')
  const onChangeNewTodo = (e) => {
    setNewTodo(e.target.value);
  }  
 
  return (
    <> {/* Fragment */}
      <div className="App">TODO</div>      
      <div className="App">
        {todo.length === 0 ? (
          <div>
            <div>할 일을 추가 해 보세요</div>
            <input value={newTodo} onChange={onChangeNewTodo} />
          
          </div>
        ): (
          <>
            {todo.map((t) => (<div key={t.id}>{t.title}</div>))}
            <input value={newTodo} onChange={onChangeNewTodo} />
          </>
          
        )}
       
      </div>    
    </>
    
  );
>}
# 버튼 추가
import './App.css';
import {useEffect, useState} from 'react';

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
            <form onSubmit={onSubmit}>
                <input value={newTodo} onChange={onChangeNewTodo} />
                <button>추가</button>
            </form>
            
          </div>
          ): (
            <>
            {todo.map((t) => (<div key={t.id}>{t.title}</div>))}
            <form onSubmit={onSubmit}>
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
# 
  function App() {
  const [todo, setTodo] = useState([ ]);
  const [newTodo, setNewTodo] = useState('')
  const onChangeNewTodo = (e) => {
    setNewTodo(e.target.value);
  } 
  const onSubmit = (e) => {
    e.preventDefault();
    setTodo([{title: newTodo, completed:false, id: Math.random()}])
    const nextTodo = [...todo, {title:newTodo, completed:false, id:Math.random()}];
    setTodo(nextTodo)
    todo   
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
