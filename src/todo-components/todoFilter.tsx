import React, { useState } from "react"
import { todoStore } from "../stores/todoStore"
import { observer } from "mobx-react-lite"
import icon from "../resource/loupe.png"

const AddTodo = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const { updateFilterTerm } = todoStore

  return (
    <>

      <div className="input-group">
        
        <input
          className="form-control"
          type="text"
          value={searchTerm}
          placeholder="searching..."
          onChange={e => {
            updateFilterTerm(e.target.value)
            setSearchTerm(e.target.value)
        }}
        />

        <span className="input-group-append">
            <div className="input-group-text bg-transparent border-0">
                <img src={icon} className="rounded" alt="search" width="30px"/>
            </div>
        </span>
      </div>
    </>
  )
}

export default observer(AddTodo)