namespace InputAutosaveNamespace {
  export class InputAutosave {

    public elements: Element[];
    public listeners: EventListener[];
    public fields: Array<CustomOption>;

    constructor(elements: Element[]) {
      this.elements = elements;
      this.getFields();
      this.loadSettings();
      this.autosaveEnable();

    }

    getFields() {
      this.fields = [];
      this.elements.forEach(element => {
        if(element.nodeName === 'INPUT' || element.nodeName === 'input'){
          switch (element.type) {
            case 'checkbox':
              this.fields.push(new InputChecked(element));
              break;
            case 'color':
            case 'date':
            case 'datetime-local':
            case 'email':
            case 'hidden':
            case 'image':
            case 'month':
            case 'number':
            case 'password':
            case 'range':
            case 'search':
            case 'tel':
            case 'text':
            case 'time':
            case 'url':
            case 'week':
              this.fields.push(new InputValue(element));
              break;
            default:
              break;
          }
        }else if(element.nodeName === 'TEXTAREA' || element.nodeName === 'textarea'){
          this.fields.push(new ASTextarea(element));
        }else if(element.contentEditable === true || element.contentEditable == 'true'){
          this.fields.push(new ASContentEditable(element));
        }
      })
    }

    loadSettings() {
      if (typeof Storage === 'undefined') return false;
      this.fields.forEach(field => {
        field.load();
      });
    }

    autosaveEnable() {
      if (typeof Storage === 'undefined') return false;
      this.fields.forEach(field => {
        field.autosaveEnable();
      });
    }

  }
}
// var InputAutosave = InputAutosave.InputAutosave;
var InputAutosave = InputAutosaveNamespace.InputAutosave;