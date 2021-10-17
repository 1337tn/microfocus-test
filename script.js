function parseInput() {
    var regEx = new RegExp('[А-Я]{1}[а-я]{1,}', 'g')
    document.getElementById("output_form").value = document.getElementById("input_form").value.match(regEx)[1] + " " + document.getElementById("input_form").value.match(regEx)[0] + " - " + document.getElementById("input_form").value.match(regEx)[2]
}