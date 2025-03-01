// alert()
function updateDate() {
    const rightNow = new Date();
    const showDate = { weekday: 'short', month: 'short', year: 'numeric', day: 'numeric' };
    const date = rightNow.toLocaleDateString('en-US', showDate);
    document.getElementById('date').innerHTML =date;
}   
updateDate();