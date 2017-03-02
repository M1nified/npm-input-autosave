# InputAutosave

[![Build Status](https://travis-ci.org/M1nified/npm-input-autosave.svg?branch=master)](https://travis-ci.org/M1nified/npm-input-autosave)

Autosaves state of user editable elements in local storage.

## Installation

Download

```shell
npm install input-autosave
```

Import to a website

```html
  ...
  <script src="node_modules/input-autosave/index.js"></script>
  ...
</head>
<body>
  ...
  <input type="text" id="id-1">
  <input type="checkbox" id="id-2">
  ...
  <script>
    var autosave = new InputAutosave(document.querySelectorAll("input"));
  </script>
  ...
```

## Supported HTML elements

- `input`
  - `checkbox`
  - `color`
  - `date`
  - `datetime-local`
  - `email`
  - `hidden`
  - `image`
  - `month`
  - `number`
  - `password`
  - `range`
  - `search`
  - `tel`
  - `text`
  - `time`
  - `url`
  - `week`
- `textarea`
- any `contenteditable` element