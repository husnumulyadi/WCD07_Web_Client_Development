function getDifferenceBetweenDates(date) {
    var date1 = new Date(date.strDate1);
    var date2 = new Date(date.strDate2);
    var differenceMs = date2.valueOf() - date1.valueOf();
    var daysDifference = differenceMs / (1000 * 60 * 60 * 24);
    return Math.floor(daysDifference);
}
var input = { strDate1: '2024-03-19', strDate2: '2024-03-21' };
document.body.textContent = "Output " + getDifferenceBetweenDates(input).toString();
