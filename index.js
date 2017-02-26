var InputAutosaveNamespace;
(function (InputAutosaveNamespace) {
    class Checkbox {
        constructor(selector) {
            if (typeof selector === 'string') {
                this.element = document.querySelector(selector);
            }
            else if (selector instanceof HTMLInputElement) {
                this.element = selector;
            }
        }
        load() {
            if (typeof Storage === 'undefined')
                return false;
            this.element.checked = localStorage.getItem(this.element.id) === 'true' ? true : false;
        }
        autosaveEnable() {
            if (typeof Storage === 'undefined')
                return false;
            this.element.addEventListener('change', () => {
                localStorage.setItem(this.element.id, this.element.checked.toString());
            });
        }
    }
    InputAutosaveNamespace.Checkbox = Checkbox;
})(InputAutosaveNamespace || (InputAutosaveNamespace = {}));
var InputAutosaveNamespace;
(function (InputAutosaveNamespace) {
    class InputText {
        constructor(selector) {
            if (typeof selector === 'string') {
                this.element = document.querySelector(selector);
            }
            else if (selector instanceof HTMLInputElement) {
                this.element = selector;
            }
        }
        load() {
            if (typeof Storage === 'undefined' || typeof localStorage.getItem(this.element.id) === 'undefined')
                return false;
            this.element.value = localStorage.getItem(this.element.id);
        }
        autosaveEnable() {
            if (typeof Storage === 'undefined')
                return false;
            console.log(this.element);
            let change = () => {
                localStorage.setItem(this.element.id, this.element.value);
            };
            this.element.addEventListener('keypress', change);
            this.element.addEventListener('change', change);
        }
    }
    InputAutosaveNamespace.InputText = InputText;
})(InputAutosaveNamespace || (InputAutosaveNamespace = {}));
var InputAutosaveNamespace;
(function (InputAutosaveNamespace) {
    class InputAutosave {
        constructor(elements) {
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
                        this.fields.push(new InputAutosaveNamespace.Checkbox(element));
                        break;
                    case 'number':
                    case 'text':
                        this.fields.push(new InputAutosaveNamespace.InputText(element));
                        break;
                    default:
                        break;
                }
            });
        }
        loadSettings() {
            if (typeof Storage === 'undefined')
                return false;
            this.fields.forEach(field => {
                field.load();
            });
        }
        autosaveEnable() {
            if (typeof Storage === 'undefined')
                return false;
            this.fields.forEach(field => {
                field.autosaveEnable();
            });
        }
    }
    InputAutosaveNamespace.InputAutosave = InputAutosave;
})(InputAutosaveNamespace || (InputAutosaveNamespace = {}));
var InputAutosave = InputAutosaveNamespace.InputAutosave;
//# sourceMappingURL=index.js.map