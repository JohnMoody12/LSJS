class Todo {
  static DONE_MARKER = "X";
  static UNDONE_MARKER = " ";

  constructor(title) {
    this.title = title;
    this.done = false;
  }

  toString() {
    let marker = this.isDone() ? Todo.DONE_MARKER : Todo.UNDONE_MARKER;
    return `[${marker}] ${this.title}`;
  }

  markDone() {
    this.done = true;
  }

  markUndone() {
    this.done = false;
  }

  isDone() {
    return this.done;
  }

  getTitle() {
    return this.title;
  }
}

class TodoList {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }
  add(item) {
    if (item instanceof Todo) {
      this.todos.push(item);
    } else {
      throw new TypeError("can only add todo objects");
    }
  }
  size() {
    return this.todos.length;
  }
  first() {
    return this.todos[0];
  }
  last() {
    return this.todos[this.size() - 1];
  }
  itemAt(index) {
    this._validateIndex(index);
    return this.todos[index];
  }
  markDoneAt(index) {
    this.itemAt(index).markDone();
  }
  markUndoneAt(index) {
    this.itemAt(index).markUndone();
  }
  isDone() {
    return this.todos.every((item) => item.isDone());
  }
  shift() {
    return this.todos.shift();
  }

  pop() {
    return this.todos.pop();
  }
  removeAt(index) {
    this._validateIndex(index);
    return this.todos.splice(index, 1);
  }
  toString() {
    let title = `---- ${this.title} ----`;
    let list = this.todos.map((todo) => todo.toString()).join("\n");
    return `${title}\n${list}`;
  }
  forEach(callback) {
    for (let i = 0; i < this.size(); i++) {
      callback(this.todos[i]);
    }
  }
  filter(callback) {
    //let filteredArray = [];
    let filteredObject = new TodoList(this.title);
    for (let i = 0; i < this.size(); i++) {
      if (callback(this.todos[i])) {
        filteredObject.add(this.todos[i]);
        //filteredArray.push(this.todos[i]);
      }
    }
    return filteredObject;
  }

  findByTitle(title) {
    return this.filter((todo) => todo.title === title).first();
  }
  allDone() {
    return this.filter((todo) => todo.isDone());
  }
  allNotDone() {
    return this.filter((todo) => !todo.isDone());
  }
  markDone(title) {
    this.findByTitle(title)?.markDone();
  }
  markAllDone(todo) {
    this.forEach((todo) => todo.markDone());
  }
  markAllUnDone(todo) {
    this.forEach((todo) => todo.markUndone());
  }
  toArray() {
    return this.todos.slice();
  }

  _validateIndex(index) {
    if (!(index in this.todos)) {
      throw new TypeError(`invalid index: ${index}`);
    }
  }
}

// The Todo class
// Your TodoList class

let list = new TodoList("Today's Todos");

let todo1 = new Todo("Buy milk");
let todo2 = new Todo("Clean room");
let todo3 = new Todo("Go to the gym");
let todo4 = new Todo("Go shopping");
let todo5 = new Todo("Feed the cats");
let todo6 = new Todo("Study for Launch School");

list.add(todo1);
list.add(todo2);
list.add(todo3);
list.add(todo4);
list.add(todo5);
list.add(todo6);
list.markDoneAt(0);
list.markDoneAt(5);
//console.log(`${list}`);
list.forEach((todo) => console.log(todo.toString()));
//let doneTodos = list.filter((todo) => todo.isDone()).first();
//console.log(doneTodos);

// console.log(list.findByTitle("Buy milk"));
// console.log(list.allDone());
// console.log(list.allNotDone());
console.log(list.markDone("Clean roomz"));
// console.log(list.markAllDone());
// list.forEach((todo) => console.log(todo.toString()));
// console.log(list.markAllUnDone());
list.forEach((todo) => console.log(todo.toString()));
console.log(list.toArray());
