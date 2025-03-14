export class LocalStorageManager {
  saveToLocalStorage(todo) {
    localStorage.setItem("todo", JSON.stringify(todo));
  }

  getFromLocalStorage() {
    return JSON.parse(localStorage.getItem("todo"));
  }

  deleteLocalStorage() {
    localStorage.clear();
  }
}
