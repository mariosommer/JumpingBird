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

namespace Abschlussaufgabe {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    
    let ground: Ground[] = [];
    let background: Background[] = [];
    export let pipes: Pipe[] = [];
    export let gameON: boolean = false;
    let birdChoice: number;
    let distance: number = 0;
    export let birds: Bird[] = [];
    export let z: number = 0;
    let n: number = 3;
    let imgData: ImageData;   
    var audioStartScreen: any;
    var audioGame: any;
    var audioGameOverOn: boolean = false;
     
    function init(_event: Event): void {

        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.style.marginLeft = "20px";
        crc2 = canvas.getContext("2d");
        imgData = crc2.getImageData(0, 0, 800, 480);
        
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
    
    function drawGame(): void {
        
        //Rohre estellen
        for (let i: number = 0; i < 1; i++) {
            let r: Pipe = new Pipe(0, 0, 0, distance);
            pipes.push(r);         
        }
        
        //Boden
        for (let i: number = 0; i < n; i++) {
            let s: Ground = new Ground(0, 420, 0);
            ground.push(s);
        }

        //Hintergrund
        for (let i: number = 0; i < n; i++) {
            let t: Background = new Background(0, 420, 0);
            background.push(t);
        }
        
        audioStartScreen = document.getElementById("audioStartscreen");
        audioStartScreen.play(); 
    }

    function startGame(): void {

        var element1: any = document.getElementById("vogel1");
        element1.style.display = "none";
        var element2: any = document.getElementById("vogel2");
        element2.style.display = "none";
        var element3: any = document.getElementById("vogel3");
        element3.style.display = "none";
        var element4: any = document.getElementById("startscreen");
        element4.style.display = "none";
        window.setTimeout(animate, 20);
        gameON = true;

        audioStartScreen.pause();
        
        audioGame = document.getElementById("audioGame");
        audioGame.play();
    }

    function startWithBird1(_event: MouseEvent): void {

        for (let i: number = 0; i < 1; i++) {
            let b: Bird = new Bird1(50, 100, 0);
            birds.push(b);
        }

        if (gameON == false) {
            startGame();
        }
    }

    function startWithBird2(_event: MouseEvent): void {

        for (let i: number = 0; i < 1; i++) {
            let b: Bird = new Bird2(50, 100, 0);
            birds.push(b);
        }

        if (gameON == false) {
            startGame();
        }
    }

    function startWithBird3(_event: MouseEvent): void {

        for (let i: number = 0; i < 1; i++) {
            let b: Bird = new Bird3(50, 100, 0);
            birds.push(b);
        }

        if (gameON == false) {
            startGame();
        }
    }

    function animate(_width: number, _height: number): void {

        crc2.putImageData(imgData, 0, 0); //Bild

        let s: Background = background[0];
        s.update();

        for (let i: number = 0; i < pipes.length; i++) {
            let s: Pipe = pipes[i];
            s.update();
        }

        for (let i: number = 0; i < ground.length; i++) {
            let s: Ground = ground[i];
            s.update();
        }

        for (let i: number = 0; i < birds.length; i++) {
            let s: Bird = birds[i];
            s.update();
        }
        window.setTimeout(animate, 20);
              
        var elementMusic: HTMLElement = document.getElementById("gameOver");
        
        // Beim GameOver Musik aus
        if (elementMusic.style.display == "block") {
            
            audioGame.pause();  
            
            if (audioGameOverOn == false) {
            
                var audioGameOver: any = document.getElementById("audioGameOver");
                audioGameOver.play();                 
                audioGameOverOn = true;
            }
        }
    }
        
      function reload(): void {
                    
        location.reload();
    }

    //Vogel fliegt hoch wenn Leertaste gedrückt wird
    document.onkeydown = function(_event: KeyboardEvent): void {
        for (let i: number = 0; i < n; i++) {
            let r: Bird = birds[i];
            var x: number = _event.keyCode;
            if (x == 32) {
                r.up();
            }
        }
    };

    //Vogel fliegt hoch bei MausKlick
    function erhoeheYWertVogel(): void {

        for (let i: number = 0; i < n; i++) {
            let r: Bird = birds[i];
            r.up();
            
            //Flügelschlag
            var audio: any = document.getElementById("audioBird");
            audio.play();
        }     
    }
} 