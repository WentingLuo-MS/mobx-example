import { Todo, todoStore } from "./todoStore";

describe("TodoStore", () => {
    it("create new todos", () => {
        const store = todoStore;
        const testItem: Todo = { id: "", title: "Test test", completed: false, today: false };
        const count = store.todos.length;
        store.addTodo(testItem)
        
        expect(store.todos.length).toBe(count+1)
        expect(store.todos[count].title).toBe(testItem.title)
        expect(store.todos[count].completed).toBe(testItem.completed)
        expect(store.todos[count].today).toBe(testItem.today)
    })
})