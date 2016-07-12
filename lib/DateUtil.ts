export function dateToYMD(date) {
    var d = date.getUTCDate();
    var m = date.getUTCMonth() + 1;
    var y = date.getUTCFullYear();
    return '' + y + (m <= 9 ? '0' + m : m) + (d <= 9 ? '0' + d : d);
}

export function dateToHHMISS(date) {
    var h = date.getUTCHours();
    var m = date.getUTCMinutes();
    var s = date.getUTCSeconds();
    return '' + (h <= 9 ? '0' + h : h) + (m <= 9 ? '0' + m : m) + (s <= 9 ? '0' + s : s);

}

export function dateToMMM(date: Date) {
    var s = "000" + date.getUTCMilliseconds();
    return s.substr(s.length-3);
}

export function dateToYMD_HNS(date: Date) {
    return dateToYMD(date) + "_" + dateToHHMISS(date) + "_" + dateToMMM(date);
}

