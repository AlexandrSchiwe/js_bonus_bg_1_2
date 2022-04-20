let color = document.getElementById('color');
console.log(color.value);

function changeBackground() {
    document.body.style.backgroundColor = color.value;
};