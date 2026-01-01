import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


function Todo() {
  let [tasks, settasks] = useState([{ task: "sample", id: uuidv4(), isDone: false }]);
  let [newtodo, setNewtodo] = useState("");

  let updatenewtodo = (event) => {
    setNewtodo(event.target.value);
  }

  let addTask = () => {
    settasks((pre) => {
      return [...pre, { task: newtodo, id: uuidv4(), isDone: false }]
    });
    setNewtodo("");
  }

  let deleteTodo = (id) => {
    settasks(tasks.filter((task) => task.id != id));
  }

  let markDone = (id) => {
    settasks((pre) =>
      pre.map((todo) => {
        if (todo.id == id) {
          return { ...todo, isDone: true }
        }
        else {
          return todo;
        }
      }
      ))
  }

  return (
    <>
      <h3>TODO</h3>

      <input
        type="text"
        value={newtodo}
        onChange={updatenewtodo}
      />

      <button onClick={addTask}>Add task</button>

      <ul>
        {
          tasks.map((todo) => {

            return (
              <span>
                <li key={todo.id} style={{color:todo.isDone==true?"green":"red"}}> {todo.task} </li>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                <button onClick={() => markDone(todo.id)}>Done</button>
              </span>
            )
          })
        }
      </ul>

    </>
  )


}
export default Todo;