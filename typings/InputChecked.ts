namespace InputAutosaveNamespace{
  export class InputChecked implements CustomOption{
    element: HTMLInputElement;
    constructor(selector: string | HTMLInputElement) {
      if (typeof selector === 'string') {
        this.element = <HTMLInputElement>document.querySelector(selector);
      } else if (selector instanceof HTMLInputElement) {
        this.element = selector;
      }
    }
    load() {
      if (typeof Storage === 'undefined') return false;
      this.element.checked = localStorage.getItem(this.element.id) === 'true' ? true : false;
    }
    autosaveEnable() {
      if (typeof Storage === 'undefined') return false;
      this.element.addEventListener('change', () => {
        localStorage.setItem(this.element.id, this.element.checked.toString());
      })
    }
  }
}