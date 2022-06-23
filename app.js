
const myButton = document.querySelector('#clicker')


// myButton.onclick = function (){
//     console.log('You clicked?')
// }
//
// myButton.ondblclick = function (){
//     console.log('You double clicked clicked?')
// }

myButton.addEventListener('click', function (){
    alert('Clicked')
})

myButton.addEventListener('click', function (){
    console.log('Hello')
})

myButton.addEventListener('mouseover', function (){
    // alert('stop touching me')
    console.log('STOP TOUCHING ME ')
})
