namespace InputAutosaveNamespace{
  export class ASTextarea implements CustomOption{
    element: HTMLTextAreaElement;
    constructor(selector: string | HTMLTextAreaElement) {
      if (typeof selector === 'string') {
        this.element = <HTMLTextAreaElement>document.querySelector(selector);
      } else if (selector instanceof HTMLTextAreaElement) {
        this.element = selector;
      }
    }
    load() {
      if (typeof Storage === 'undefined') return false;
      this.element.value = this.element.value = localStorage.getItem(this.element.id);
    }
    autosaveEnable() {
      if (typeof Storage === 'undefined') return false;
      let change = () =>{
        localStorage.setItem(this.element.id, this.element.value);
      }
      this.element.addEventListener('keypress', change);
      this.element.addEventListener('change', change);
    }
  }
}