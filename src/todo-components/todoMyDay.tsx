import { observer } from "mobx-react-lite";
import { todoStore } from "../stores/todoStore"
import myDay from "../resource/myday.png"

const TodoMyDay = () => {
  const { todos, toggleTodo, removeTodoFromMyDay } = todoStore;
  return (
    <>
      <h2>
        <img src={myDay} className="mx-3" alt="my-day" width="40px" />
        My Day
      </h2>

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
            todos.map(todo => {if (todo.today) 
              return (
              <tr key={todo.id}>
                <td>
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={_ => toggleTodo(todo.id!)} checked={todo.completed ? true : false}/>
                </td>
                <td className={todo.completed ? "text-decoration-line-through" : ""}>{todo.title + (todo.completed ? "✅" : "")}</td>
                <td>

                  <span className="mx-2">
                    <button
                      className="btn btn-sm btn-warning"
                      onClick={_ => removeTodoFromMyDay(todo.id!)}
                    >
                      Remove
                    </button>
                  </span>

                </td>
              </tr>
            )}
            )
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default observer(TodoMyDay);
