
const temp = document.getElementById('temp');
const tempText = document.getElementById('tempText');
temp.addEventListener('input', () => {
    tempText.innerText = temp.value;
});


function saveParams() {
    document.getElementById('tip').style.display = 'block';
    setTimeout(() => {
        document.getElementById('tip').style.display = 'none';
    }, 2000);
}
