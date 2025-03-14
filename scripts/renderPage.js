export class RenderPage {
  #listElement;

  constructor(listElement) {
    this.#listElement = listElement;
  }

  render(todo) {
    this.#listElement.innerHTML = "";

    todo?.forEach((el) => {
      this.#listElement.insertAdjacentHTML(
        "afterbegin",
        `<li>${el.todo} <button class="delete-btn" onclick='removeTodo(${el.id})'>delete</button></li>`
      );
    });
  }
}
