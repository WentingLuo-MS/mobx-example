import React, { useState } from "react"
import { todoStore } from "../stores/todoStore"
import { observer } from "mobx-react-lite"

const TodoInfo = () => {
  const { info } = todoStore

  return (
    <>
    <div className="mb-5 pb-2">
      <h1>My Todo List</h1>
      <div className="alert alert-primary">
        <div className="d-inline col-4 px-3 border-end border-primary">
          Total items: &nbsp;
          <span className="badge bg-info">{info.total}</span>
        </div>
        <div className="d-inline col-4 px-3 border-end border-primary">
          Finished items: &nbsp;
          <span className="badge bg-success">{info.completed}</span>
        </div>
        <div className="d-inline col-4 px-3">
          Unfinished items: &nbsp;
          <span className="badge bg-danger">{info.notCompleted}</span>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default observer(TodoInfo)