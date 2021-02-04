var date = new Date();

const label = document.getElementById('date');
const clock = () => {
    label.innerHTML = '<span>' + date.getHours() + ':' + date.getMinutes() + '</span>';
    setTimeout(clock, 1000);
};

window.onload = clock();