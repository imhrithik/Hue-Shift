hueShifter = () => {
    var colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#FF4136', '#FF851B', '#FFDC00', '#2ECC40', '#0074D9', '#B10DC9'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('page').style.backgroundColor = randomColor;
    document.getElementsByClassName('mouse')[0].style.backgroundColor = randomColor;
}