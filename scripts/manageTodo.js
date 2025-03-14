export class Todo {
  #todo = [];

  add(todo) {
    this.#todo.push(todo);
  }

  remove(id) {
    this.#todo = this.#todo.filter((el) => el.id !== id);
  }

  getTodo() {
    return this.#todo;
  }

  deleteAll() {
    this.#todo.length = 0;
  }
}
