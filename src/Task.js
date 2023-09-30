export const Task = (props) => {
    return (<div
        style={{backgroundColor: props.complete ? "green" : "white"}}
    >
        <h1>{props.id}</h1>
        <h1>{props.taskName}</h1>
        <button onClick={() => props.completeTask(props.id)}>Complete</button>
        <button onClick={() => props.deleteTask(props.id)}>Delete</button>
        <p> A To Do list</p>
    </div>
    );
}

export default Task;