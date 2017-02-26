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
        switch (element.type) {
          case 'checkbox':
            this.fields.push(new Checkbox(element));
            break;
          case 'number':
          case 'text':
            this.fields.push(new InputText(element));
            break;
          default:
            break;
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