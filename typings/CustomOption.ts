namespace InputAutosaveNamespace{
  export interface CustomOption{
    element: HTMLInputElement;
    load():boolean;
    autosaveEnable():boolean;
  }
}