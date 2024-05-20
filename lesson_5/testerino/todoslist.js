const Todo = require("./todo");
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

module.exports = TodoList;
//export default TodoList;
