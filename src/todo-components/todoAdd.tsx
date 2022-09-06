import React, { useState } from "react"
import { todoStore } from "../stores/todoStore"
import { observer } from "mobx-react-lite"

const AddTodo = () => {
  const [title, setTitle] = useState("")
  const { addTodo } = todoStore

  return (
    <>

      <div className="input-group mb-3">
        <span className="input-group-text" id="addon-wrapping">New Item Title: </span>
        <input
          className="form-control"
          type="text"
          value={title}
          placeholder="type anything"
          onChange={e => setTitle(e.target.value)}
        />
        <button
          className="btn btn-primary"
          onClick={_ => {
            addTodo({
              title: title,
              completed: false,
              today: false,
            })
            setTitle("")
          }}
        >
          Add
        </button>
      </div>
    </>
  )
}

export default observer(AddTodo)