namespace InputAutosaveNamespace{
  export class ASContentEditable implements CustomOption{
    element: HTMLElement;
    constructor(selector: string | HTMLElement) {
      if (typeof selector === 'string') {
        this.element = <HTMLElement>document.querySelector(selector);
      } else if (selector instanceof HTMLElement) {
        this.element = selector;
      }
    }
    load() {
      if (typeof Storage === 'undefined') return false;
      this.element.innerHTML = this.element.innerHTML = localStorage.getItem(this.element.id);
    }
    autosaveEnable() {
      if (typeof Storage === 'undefined') return false;
      let change = () =>{
        localStorage.setItem(this.element.id, this.element.innerHTML);
      }
      this.element.addEventListener('keypress', change);
      this.element.addEventListener('change', change);
    }
  }
}