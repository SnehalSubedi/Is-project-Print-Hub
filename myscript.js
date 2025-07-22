function validateform() {
    var firstname = document.forms["messageform"]["firstname"].value;
    var gender = document.forms["messageform"]["gender"].value;
    var message = document.forms["messageform"]["message"].value;
    var lastname = document.forms["messageform"]["lastname"].value;
    var provinceno = document.forms["messageform"]["provinceno"].value;
    var address = document.forms["messageform"]["address"].value;
    var Previously_purchased_a_printer_from_us = document.forms["messageform"]["Previously_purchased_a_printer_from_us"].value;
    if (firstname == "" || gender == "" || message == "" || lastname == "" || provinceno == "" || address == "" || Previously_purchased_a_printer_from_us == "") {
        alert("empty fields found");
    }
    else {
        alert("Thank You");
    }
}