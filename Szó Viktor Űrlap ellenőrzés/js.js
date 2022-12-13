function formCheck(){
    let nev = document.getElementById("nev").value
    let email = document.getElementById("email").value
    let telefonszam = document.getElementById("telefonszam").value
    let jelszo = document.getElementById("jelszo").value
    let jelszoujra = document.getElementById("jelszoujra").value

    if (nev == 0) {
        alert("Nem adtál meg nevet")
    } else if (email == 0) {
        alert ("Nem adtál meg emailt")
    } else if (telefonszam == 0) {
        alert("Nem adtál meg telefonszámot")
    } else if (jelszo == 0) {
        alert("Nem adtál meg jelszót.")
    } else if (jelszoujra != jelszo) {
        alert("Nem egyeznek a jelszavak")
    }
}
