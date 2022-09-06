import React, { Component } from "react";
import "./App.css";
import { observer, inject } from "mobx-react";
import { IMobxStore } from "./stores/mobxStore";
import TodoList from "./todo-components/todoList";
import TodoAdd from "./todo-components/todoAdd";
import TodoMyDay from "./todo-components/todoMyDay";
import TodoFilter from "./todo-components/todoFilter";
import TodoInfo from "./todo-components/todoInfo";
import Sources from "./component/source";
import { ArrowBarDown, ArrowBarUp } from "react-bootstrap-icons";
import Definition from "./component/definition";
import mobxVRedux from "./resource/Mobx-vs-Redux.jpg"
import Testing from "./component/testing";


interface AppProps {
  mobxStore?: IMobxStore;
}

@inject("mobxStore")
@observer
class App extends Component<AppProps> {
  render() {
    const { greeting, updateName } = this.props.mobxStore!;

    return (
      <div id="main" className="App">
        <header className="App-header">
          <div className="App-header" onClick={updateName}>
            <div className="w-100 h-100">
              {greeting}
              <a className="next-nav" href="#definition"><ArrowBarDown size={48} /></a>
            </div>
          </div>
        </header>

        <div id="definition" className="position-relative">
          <Definition />
          <a className="next-nav" href="#principle-concepts"><ArrowBarDown size={48} /></a>
        </div>
      
        <div id="principle-concepts" className=" position-relative ">
          <div className="content-box container my-5 py-4">
              <h1 className="mb-4 pb-4">MobX Principle Concepts</h1>
              <img className="w-100" src="https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/2020/2020-11/mobx-concepts.png" alt="MobX concept" />
          </div>
          <a className="next-nav" href="#demo"><ArrowBarDown size={48} /></a>
        </div>

        <div id="demo" className="content-box container-fluid w-100 position-relative d-flex align-items-center justify-content-center">
          <div className="w-75 h-100">
          <p className="text-muted lead fs-1">Demo: Todo List</p>
          <hr />
          <div className="mb-4"></div>
            <TodoInfo />
            <div className="row">
              <div className="col-sm mx-4 border-end border-info">
                <h2>All Todos</h2>
                <TodoAdd />
                <TodoFilter />
                <TodoList />
              </div>
              <div className="col-sm mx-4">
                <TodoMyDay />
              </div>
            </div>
          </div>
          <a className="next-nav" href="#testing"><ArrowBarDown size={48} /></a>
        </div>

        <div id="testing" className="position-relative">
          <Testing />
          <a className="next-nav" href="#mobx-vs-redux"><ArrowBarDown size={48} /></a>
        </div>

        <div id="mobx-vs-redux" className="position-relative content-box d-flex align-items-center justify-content-center">
          <img src={mobxVRedux} alt="mobx vs redux" />
          <a className="next-nav" href="#sources"><ArrowBarDown size={48} /></a>
        </div>
        

        <div id="sources" className="position-relative">
          <Sources />
          <a className="next-nav" href="#main"><ArrowBarUp size={48} /></a>
        </div>
          
      </div>
    );
  }
}

export default App;
