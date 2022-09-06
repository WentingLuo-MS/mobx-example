import React, { useContext } from "react";
import { todoStore } from "../stores/todoStore"
import { observer } from "mobx-react-lite";
import myDay from "../resource/myday.png"

const TodoList = () => {
  const { toggleTodo, removeTodo, addTodoToMyDay, filteredTodos } = todoStore;
  return (
    <>
      <div className="row">
        <table className="table table-hover">
          <thead className="thead-light">
            <tr>
              <th>Status</th>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
            filteredTodos.map(todo => (
              <tr key={todo.id}>
                <td>
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={_ => toggleTodo(todo.id!)} checked={todo.completed ? true : false}/>
                </td>
                <td className={todo.completed ? "text-decoration-line-through" : ""}>{todo.title + (todo.completed ? "✅" : "")}</td>
                <td>
                  <span className="mx-2">
                    <button
                      className="btn btn-sm btn-light px-2"
                      onClick={_ => addTodoToMyDay(todo.id!)}
                    >
                      <img src={myDay} alt="my day" width="20px" />
                    </button>
                  </span>

                  <span className="mx-2">
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={_ => removeTodo(todo.id!)}
                    >
                      Delete
                    </button>
                  </span>

                </td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default observer(TodoList);
