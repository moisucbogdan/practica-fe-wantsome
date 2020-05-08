const header = document.querySelector('header');
const section = document.querySelector('section');
let requestURL = 'https://raw.githubusercontent.com/bahamas10/css-color-names/master/css-color-names.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = () => {
    const colors = request.response;
    colorsIn(colors);
}

const colorsIn = (colors) => {
    const allColorNames = Object.keys(colors);
    const allColorCodes = Object.values(colors);
    const list = document.createElement('ul');
    for (let i = 0; i < allColorNames.length; ++i) {
        let colorList = document.createElement('li');
        let colorCodes = document.createElement('div');
        let colorNames = document.createElement('div');
        colorCodes.style.display = 'inline-block';
        colorCodes.style.backgroundColor = allColorCodes[i];
        colorCodes.style.width = '10px';
        colorCodes.style.height = '10px';
        colorNames.style.display = 'inline-block';
        colorNames.textContent = allColorNames[i];
        colorList.appendChild(colorCodes);
        colorList.appendChild(colorNames);
        list.appendChild(colorList);
        list.style.listStyle = 'none';
    
    }
    document.querySelector('body').appendChild(list);
}