// class Todo {
//   static DONE_MARKER = "X";
//   static UNDONE_MARKER = " ";

//   constructor(title) {
//     this.title = title;
//     this.done = false;
//   }

//   toString() {
//     let marker = this.isDone() ? Todo.DONE_MARKER : Todo.UNDONE_MARKER;
//     return `[${marker}] ${this.title}`;
//   }

//   markDone() {
//     this.done = true;
//   }

//   markUndone() {
//     this.done = false;
//   }

//   isDone() {
//     return this.done;
//   }

//   getTitle() {
//     return this.title;
//   }
// }

// class TodoList {
//   constructor(title) {
//     this.title = title;
//     this.todos = [];
//   }
//   add(item) {
//     if (item instanceof Todo) {
//       this.todos.push(item);
//     } else {
//       throw new TypeError("can only add todo objects");
//     }
//   }
//   size() {
//     return this.todos.length;
//   }
//   first() {
//     return this.todos[0];
//   }
//   last() {
//     return this.todos[this.size() - 1];
//   }
//   itemAt(index) {
//     this._validateIndex(index);
//     return this.todos[index];
//   }
//   markDoneAt(index) {
//     this.itemAt(index).markDone();
//   }
//   markUndoneAt(index) {
//     this.itemAt(index).markUndone();
//   }
//   isDone() {
//     return this.todos.every((item) => item.isDone());
//   }
//   shift() {
//     return this.todos.shift();
//   }

//   pop() {
//     return this.todos.pop();
//   }
//   removeAt(index) {
//     this._validateIndex(index);
//     return this.todos.splice(index, 1);
//   }
//   toString() {
//     let title = `---- ${this.title} ----`;
//     let list = this.todos.map((todo) => todo.toString()).join("\n");
//     return `${title}\n${list}`;
//   }
//   forEach(callback) {
//     for (let i = 0; i < this.size(); i++) {
//       callback(this.todos[i]);
//     }
//   }
//   filter(callback) {
//     //let filteredArray = [];
//     let filteredObject = new TodoList(this.title);
//     for (let i = 0; i < this.size(); i++) {
//       if (callback(this.todos[i])) {
//         filteredObject.add(this.todos[i]);
//         //filteredArray.push(this.todos[i]);
//       }
//     }
//     return filteredObject;
//   }

//   findByTitle(title) {
//     return this.filter((todo) => todo.title === title).first();
//   }
//   allDone() {
//     return this.filter((todo) => todo.isDone());
//   }
//   allNotDone() {
//     return this.filter((todo) => !todo.isDone());
//   }
//   markDone(title) {
//     this.findByTitle(title)?.markDone();
//   }
//   markAllDone(todo) {
//     this.forEach((todo) => todo.markDone());
//   }
//   markAllUnDone(todo) {
//     this.forEach((todo) => todo.markUndone());
//   }
//   toArray() {
//     return this.todos.slice();
//   }

//   _validateIndex(index) {
//     if (!(index in this.todos)) {
//       throw new ReferenceError(`invalid index: ${index}`);
//     }
//   }
// }

const Todo = require("./todo");
const TodoList = require("./todoslist");

describe("TodoList", () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo("Buy milk");
    todo2 = new Todo("Clean room");
    todo3 = new Todo("Go to the gym");

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  test("todolist has a size of 3", () => {
    expect(list.size()).toBe(3);
  });
  test("toArray matches", () => {
    expect(list.toArray()).toEqual(list.todos);
  });
  test("first matches", () => {
    expect(list.first()).toEqual(todo1);
  });
  test("last matches", () => {
    expect(list.last()).toEqual(todo3);
  });
  test("shift works", () => {
    expect(list.shift()).toEqual(todo1);
    expect(list.toArray()).toEqual([todo2, todo3]);
  });
  test("pop works", () => {
    expect(list.pop()).toEqual(todo3);
    expect(list.toArray()).toEqual([todo1, todo2]);
  });
  test("isDone works", () => {
    expect(list.isDone()).toEqual(false);
    list.markAllDone();
    expect(list.isDone()).toEqual(true);
  });
  test("add works", () => {
    expect(() => list.add("bob")).toThrow(TypeError);
    expect(() => list.add(new todo("todo4"))).not.toThrow(TypeError);
  });
  test("itemAt works", () => {
    expect(() => list.itemAt(list.size() + 1)).toThrow(TypeError);
  });
  test("mark works", () => {
    expect(() => list.markDoneAt(list.size() + 1)).toThrow();
  });
  test("unmark works", () => {
    expect(() => list.markUnDoneAt(list.size() + 1)).toThrow();
  });
  test("markAll works", () => {
    expect(list.isDone()).toEqual(false);
    list.markAllDone();
    expect(list.isDone()).toEqual(true);
  });
  test("removeAt works", () => {
    expect(() => list.removeAt(list.size() + 1)).toThrow(TypeError);
    expect(list.removeAt(0)[0]).toEqual(todo1);
    expect(list.toArray()).toEqual([todo2, todo3]);
  });
  test("toString returns string representation of the list", () => {
    let string = `---- Today's Todos ----
[ ] Buy milk
[ ] Clean room
[ ] Go to the gym`;

    expect(list.toString()).toBe(string);

    let string2 = `---- Today's Todos ----
[X] Buy milk
[ ] Clean room
[ ] Go to the gym`;
    list.markDoneAt(0);
    expect(list.toString()).toBe(string2);
  });

  test("forEach works", () => {
    let result = [];
    list.forEach((todo) => result.push(todo));
    expect(result).toEqual([todo1, todo2, todo3]);
  });
  test("filter works", () => {
    let result = list.filter((todo) => todo.title.split(" ").length > 2);
    expect(result.itemAt(0)).toEqual(todo3);
  });
});
