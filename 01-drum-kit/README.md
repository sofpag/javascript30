#Drum kit

## Make it sound: event listener; atribute selector

1ST PART FUNCTION: make it sound
![first attemp](./img/Screenshot_4.png)
`addEventListener("keydown", function (e) {`
/ with this we can capture the number key of your keyboard
`console.log(e.keyCode);`
/ we use the atribute selector insted of made a class we the only purpose of use a selector
`const audio = document.querySelector(audio[data-key="${e.keyCode}"])`
/ this stops the function withouth hiting troubbles if there isn't audio
`if(!audio) return;`
/this will restart the process if other key is push
`audio.currentTime = 0; `
`audio.play()`
`});`

## Make it pretty: classlist add and remove; forEach; this;

![first attemp classlist](./img/Screenshot_1.png)

/ select by class (.key) the ones with the atribute ...

`const key = document.querySelector(.key[data-key="${e.keyCode}"]);`
