interface DateInput {
    strDate1: string
    strDate2: string
}

function getDifferenceBetweenDates(date: DateInput) {
    let date1 = new Date(date.strDate1);
    let date2 = new Date(date.strDate2);

    let differenceMs = date2.valueOf() - date1.valueOf();

    let daysDifference = differenceMs / (1000 * 60 * 60 * 24);

    return Math.floor(daysDifference);
}

let input: DateInput = { strDate1: '2024-03-19', strDate2: '2024-03-21' }

document.body.textContent = "Output " + getDifferenceBetweenDates(input).toString();