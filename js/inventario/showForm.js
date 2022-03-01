const formContain = document.getElementById("form-contain");
const form = document.getElementById("form");
formContain.style.display = "none";

function showForm() {
  if (Number(document.getElementById("tasa-dolar").value) > 0) {
    if (formContain.style.display === "none") {
      formContain.style.display = "block";
    }
  } else {
    alert("Inserta la tasa del dolar");
  }
}

function hiddenForm() {
  if (formContain.style.display === "block") {
    formContain.style.display = "none";
  }
}
