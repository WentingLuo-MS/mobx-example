import { observable, action, computed, reaction, autorun } from "mobx"
import { persist } from "mobx-persist";
import { createContext } from "react"
import { v4 as uuidv4 } from 'uuid';

export interface Todo {
  id?: string;
  title: string;
  completed: boolean;
  today: boolean;
}

class TodoStore {
  constructor() {
    reaction(() => this.todos, _ => console.log("Length of todos: " + this.todos.length));
  }

  @observable filterTerm: string = ""

  @persist('object') @observable todos: Todo[] = [
    { id: uuidv4(), title: "Do grocery", completed: false, today: false },
    { id: uuidv4(), title: "Clean the room", completed: false, today: false },
    { id: uuidv4(), title: "Water the plants", completed: false, today: false },
    { id: uuidv4(), title: "Fix the light", completed: false, today: false },
    { id: uuidv4(), title: "Learn MobX", completed: true, today: false },
    { id: uuidv4(), title: "Have fun and be happy", completed: false, today: false },
  ]

  @action addTodo = (todo: Todo) => {
    this.todos.push({ ...todo, id: uuidv4() })
  }

  @action toggleTodo = (id: string) => {
    this.todos = this.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        }
      }
      return todo
    })
  }

  @action addTodoToMyDay = (id: string) => {
    this.todos = this.todos.map(todo => {
      if (todo.id === id) {
        return {
        ...todo,
        today: true,
        }
      }
      return todo
    })
  }

  @action removeTodoFromMyDay = (id: string) => {
    this.todos = this.todos.map(todo => {
      if (todo.id === id) {
        return {
        ...todo,
        today: false,
        }
      }
      return todo
    })
  }

  @action removeTodo = (id: string) => {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  @action updateFilterTerm = (term: string) => {
    this.filterTerm = term.toLocaleLowerCase();
  }

  @computed get info() {
    return {
      total: this.todos.length,
      completed: this.todos.filter(todo => todo.completed).length,
      notCompleted: this.todos.filter(todo => !todo.completed).length,
    }
  }

  @computed get filteredTodos() {
    if (typeof this.filterTerm == 'undefined' || !this.filterTerm) return this.todos
    else {
      var todosWithFilter: Todo[] = this.todos.filter(todo => {return todo.title.toLowerCase().includes(this.filterTerm)})
      return todosWithFilter
    }
  }

}

export const todoStore = new TodoStore()