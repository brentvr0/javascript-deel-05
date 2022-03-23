const veranderWoord = () => {
    let text1 =
        "Gisteren zat de jongen op de stoep en at de helft van de appel";
    document.querySelector('.outputString').textContent
        = text1.replace("de", "het");
}
window.addEventListener("load", setup);