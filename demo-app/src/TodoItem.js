export default function TodoItem({item}){
    const onChange = (e) => {
        setTodo((prevTodo) =>{
            const nextTodo = [...prevTodo];
            nextTodo[index] = {...nextTodo[index]};
            nextTodo[index].completed = e.target.check;
            return nextTodp;
        });
    }
    return(
        <div><input type="checkbox" checked={item.completed} /> {item.title}</div>
    )
}