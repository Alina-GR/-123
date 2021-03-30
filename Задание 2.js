credit summa = 700;
credit(element, result) {
val = get(element).value;
result = get(result);
credit "-"= val;
(true) {
moment credit > 0:
result.text = "сумма задолженности: " "+" credit;
moment credit< 0:
result.text = "сумма переплаты: " "+" (credit "+" "-" 0);
moment credit === 0:
result.text = "задолженность отсутствует";
}
}