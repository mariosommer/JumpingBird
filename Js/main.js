/* Aufgabe: Abschlussaufgabe
Name: Mario Sommer
Matrikel: 254785
Datum: 21.07.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.

Grafiken und Bilder von freepik.com
Musik von: Ralph Vickers aka Rakohus | https://soundcloud.com/rakohus
*/
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    window.addEventListener("load", init);
    var ground = [];
    var background = [];
    Abschlussaufgabe.pipes = [];
    Abschlussaufgabe.gameON = false;
    var birdChoice;
    var distance = 0;
    Abschlussaufgabe.birds = [];
    Abschlussaufgabe.z = 0;
    var n = 3;
    var imgData;
    var audioStartScreen;
    var audioGame;
    var audioGameOverOn = false;
    function init(_event) {
        var canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.style.marginLeft = "20px";
        Abschlussaufgabe.crc2 = canvas.getContext("2d");
        imgData = Abschlussaufgabe.crc2.getImageData(0, 0, 800, 480);
        drawGame();
        // Vogel springen lassen
        canvas.addEventListener("click", erhoeheYWertVogel);
        // canvas.addEventListener("touchstart", erhoeheYWertVogel);
        document.getElementById("vogel1").addEventListener("click", startWithBird1);
        // document.getElementById("vogel1").addEventListener("touchstart", startWithBird1);
        document.getElementById("vogel2").addEventListener("click", startWithBird2);
        // document.getElementById("vogel2").addEventListener("touchstart", startWithBird2);
        document.getElementById("vogel3").addEventListener("click", startWithBird3);
        // document.getElementById("vogel3").addEventListener("touchstart", startWithBird3);
        document.getElementById("reset").addEventListener("click", reload);
        // document.getElementById("reset").addEventListener("touchstart", reload);
        // window.setTimeout(animate, 20);
    }
    function drawGame() {
        //Rohre estellen
        for (var i = 0; i < 1; i++) {
            var r = new Abschlussaufgabe.Pipe(0, 0, 0, distance);
            Abschlussaufgabe.pipes.push(r);
        }
        //Boden
        for (var i = 0; i < n; i++) {
            var s = new Abschlussaufgabe.Ground(0, 420, 0);
            ground.push(s);
        }
        //Hintergrund
        for (var i = 0; i < n; i++) {
            var t = new Abschlussaufgabe.Background(0, 420, 0);
            background.push(t);
        }
        audioStartScreen = document.getElementById("audioStartscreen");
        audioStartScreen.play();
    }
    function startGame() {
        var element1 = document.getElementById("vogel1");
        element1.style.display = "none";
        var element2 = document.getElementById("vogel2");
        element2.style.display = "none";
        var element3 = document.getElementById("vogel3");
        element3.style.display = "none";
        var element4 = document.getElementById("startscreen");
        element4.style.display = "none";
        window.setTimeout(animate, 20);
        Abschlussaufgabe.gameON = true;
        audioStartScreen.pause();
        audioGame = document.getElementById("audioGame");
        audioGame.play();
    }
    function startWithBird1(_event) {
        for (var i = 0; i < 1; i++) {
            var b = new Abschlussaufgabe.Bird1(50, 100, 0);
            Abschlussaufgabe.birds.push(b);
        }
        if (Abschlussaufgabe.gameON == false) {
            startGame();
        }
    }
    function startWithBird2(_event) {
        for (var i = 0; i < 1; i++) {
            var b = new Abschlussaufgabe.Bird2(50, 100, 0);
            Abschlussaufgabe.birds.push(b);
        }
        if (Abschlussaufgabe.gameON == false) {
            startGame();
        }
    }
    function startWithBird3(_event) {
        for (var i = 0; i < 1; i++) {
            var b = new Abschlussaufgabe.Bird3(50, 100, 0);
            Abschlussaufgabe.birds.push(b);
        }
        if (Abschlussaufgabe.gameON == false) {
            startGame();
        }
    }
    function animate(_width, _height) {
        Abschlussaufgabe.crc2.putImageData(imgData, 0, 0); //Bild
        var s = background[0];
        s.update();
        for (var i = 0; i < Abschlussaufgabe.pipes.length; i++) {
            var s_1 = Abschlussaufgabe.pipes[i];
            s_1.update();
        }
        for (var i = 0; i < ground.length; i++) {
            var s_2 = ground[i];
            s_2.update();
        }
        for (var i = 0; i < Abschlussaufgabe.birds.length; i++) {
            var s_3 = Abschlussaufgabe.birds[i];
            s_3.update();
        }
        window.setTimeout(animate, 20);
        var elementMusic = document.getElementById("gameOver");
        // Beim GameOver Musik aus
        if (elementMusic.style.display == "block") {
            audioGame.pause();
            if (audioGameOverOn == false) {
                var audioGameOver = document.getElementById("audioGameOver");
                audioGameOver.play();
                audioGameOverOn = true;
            }
        }
    }
    function reload() {
        location.reload();
    }
    //Vogel fliegt hoch wenn Leertaste gedrückt wird
    document.onkeydown = function (_event) {
        for (var i = 0; i < n; i++) {
            var r = Abschlussaufgabe.birds[i];
            var x = _event.keyCode;
            if (x == 32) {
                r.up();
            }
        }
    };
    //Vogel fliegt hoch bei MausKlick
    function erhoeheYWertVogel() {
        for (var i = 0; i < n; i++) {
            var r = Abschlussaufgabe.birds[i];
            r.up();
            //Flügelschlag
            var audio = document.getElementById("audioBird");
            audio.play();
        }
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=main.js.map