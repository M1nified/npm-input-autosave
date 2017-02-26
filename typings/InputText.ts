namespace InputAutosaveNamespace{
  export class InputText implements CustomOption{
    element: HTMLInputElement;
    constructor(selector: string | HTMLInputElement) {
      if (typeof selector === 'string') {
        this.element = <HTMLInputElement>document.querySelector(selector);
      } else if (selector instanceof HTMLInputElement) {
        this.element = selector;
      }
    }
    load() {
      if (typeof Storage === 'undefined' || typeof localStorage.getItem(this.element.id) === 'undefined') return false;
      this.element.value = localStorage.getItem(this.element.id);
    }
    autosaveEnable() {
      if (typeof Storage === 'undefined') return false;
      console.log(this.element);
      let change = () =>{
        localStorage.setItem(this.element.id, this.element.value);
      }
      this.element.addEventListener('keypress', change);
      this.element.addEventListener('change', change);
    }
  }
}