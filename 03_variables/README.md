# CSS variables updated with JS

## HTML

We need to create an attribute for the inputs to help later on the JS conexion

```HTML
 data-sizing="px"
```

## JS

```JAVASCRIPT
const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  console.log(this.value); //this tell me what is the value of the input (selected in the page)
}

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
```

```JAVASCRIPT
function handleUpdate() {
    const suffix = this.dataset.sizing || '' // reference to the made-up attributes on the inputs; and the one who hasn't it.
}
```

```JAVASCRIPT
function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  console.log(this.name);
  document.documentElement.style.setProperty(
    `--${this.name}`, // this.name returns the name of the input that is the same as the CSS variable
    this.value //return the change value: a number or a color
     + suffix // return "px" or nothing
  );
}
```
