const setup = () => {

    let voegGemeentenToe = window.prompt('voeg gemeenten toe:', '');
    while (voegGemeentenToe !== "stop") {
            voegGemeentenToe = window.prompt('voeg gemeente toe:', '');
        }
    for (let i = 0; i < voegGemeentenToe.length; i++) {
        let option = document.createElement("option");
        option.text = voegGemeentenToe[i];
        document.getElementById("gemeenten").add(option);
    }

}
window.addEventListener("load", setup);