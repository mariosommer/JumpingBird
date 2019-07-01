namespace Abschlussaufgabe {
    export class Pipe {
        x: number;
        z: number;
        y: number;
        y2: number;
        y3: number;
        y4: number;
        y5: number;
        y6: number;
        y7: number;
        y8: number;
        distance: number;
        xBird: number;
        yBird: number;
        damagePipeTop: number = 0;
        damagePipeBottom: number = 0;
        lifeBird: number = 1040;
        score: number;
        highscore: HTMLDivElement = document.createElement("div");
        highscore2: HTMLDivElement = document.createElement("div");

        constructor(_x: number, _y: number, _z: number, _distance: number) {
            this.setRandomYHighTop();
            this.setRandomYHighBottom();
            this.x = _x;
            this.z = _z;
            this.distance = _distance;
        }

        move(): void {
            if (this.lifeBird > 0) {
                this.x += - 6.5;
                this.z += - 6.5;
                this.distance += 6.5;
            }

            //lvl2
            if (this.distance > 2600 && this.lifeBird > 0) {
                this.x += -4;
                this.z += -4;
                this.distance += 4;
            }

            //lvl3
            if (this.distance > 8000 && this.lifeBird > 0) {
                this.x += -4;
                this.z += -4;
                this.distance += 4;
            }

            //lvl4
            if (this.distance > 15000 && this.lifeBird > 0) {
                this.x += -4;
                this.z += -4;
                this.distance += 4;
            }

            //console.log(this.distance);

            //links raus, rechts rein
            if (this.x <= -800) {
                this.x = crc2.canvas.width;
                this.setRandomYHighTop();
            }

            if (this.z <= -1600) {
                this.z = crc2.canvas.width - 800;
                this.setRandomYHighBottom();
            }
        }

        setRandomYHighTop(): void {

            this.y = Math.floor((Math.random() * 120) + 60);  //Rohr1    Zwischen 60-180   
            this.y2 = Math.floor((Math.random() * 120) + 60); //Rohr2    Oben

            this.y5 = Math.floor((Math.random() * 80) + 1);  //Rohr5    Zwischen 1-80   
            this.y6 = Math.floor((Math.random() * 80) + 1); //Rohr6     Unten
        }

        setRandomYHighBottom(): void { //Rohr Unten

            this.y3 = Math.floor((Math.random() * 140) + 40);   //Rohr3  Oben      
            this.y4 = Math.floor((Math.random() * 140) + 40);       //Rohr4

            this.y7 = Math.floor((Math.random() * 60) + 1);     //Rohr7  Unten      
            this.y8 = Math.floor((Math.random() * 60) + 1);        //Rohr8
        }

        update(): void {
            this.drawPipeTop();
            this.drawPipeBottom();
            this.crashTop();
            this.crashBottom();
            this.move();
            this.life();
            this.calculateScore();
        }

        drawPipeBottom(): void {
            var img: HTMLImageElement = <HTMLImageElement>document.getElementById("rohrUnten");
            crc2.drawImage(img, this.x + 0, this.y5 + 300, 60, 180);
            crc2.drawImage(img, this.x + 400, this.y6 + 300, 60, 180);
            crc2.drawImage(img, this.z + 800, this.y7 + 300, 60, 180);
            crc2.drawImage(img, this.z + 1200, this.y8 + 300, 60, 180);
        }

        drawPipeTop(): void {
            var img: HTMLImageElement = <HTMLImageElement>document.getElementById("rohrOben");
            crc2.drawImage(img, this.x, this.y - 180, 60, 180);
            crc2.drawImage(img, this.x + 400, this.y2 - 180, 60, 180);
            crc2.drawImage(img, this.z + 800, this.y3 - 180, 60, 180);
            crc2.drawImage(img, this.z + 1200, this.y4 - 180, 60, 180);
        }

        life(): void {
            crc2.fillStyle = "#F4F4F4";
            crc2.fillRect(100, 12, 1050 / 10, 18);
            crc2.fillStyle = "#BF1319";
            crc2.fillRect(100, 12, this.lifeBird / 10, 18);
            var img2: HTMLImageElement = <HTMLImageElement>document.getElementById("lebensanzeige");
            crc2.drawImage(img2, 10, 10, 200, 21);
        }

        crashTop(): void {
            this.xBird = birds[0].x;
            this.yBird = birds[0].y;

            //Erste zwei Rohre Oben  
            if (((this.x > - 9 && this.x < 110) && (this.y > this.yBird)) || ((this.x > -409 && this.x < -290) && (this.y2 > this.yBird))) {
                crc2.beginPath();
                crc2.arc(this.xBird + 30, this.yBird + 30, 30, 0, Math.PI * 2);
                crc2.fillStyle = "red";
                crc2.fill();
                crc2.closePath();
                this.damagePipeTop++;
                this.lifeBird = this.lifeBird - this.damagePipeTop - this.damagePipeBottom;

                if (this.lifeBird < 0) {

                    console.log("Game Over");
                    var element: HTMLElement = document.getElementById("gameOver");
                    element.style.display = "block";

                    this.highscore2.innerText = "Your Score:" + " " + this.score;
                    document.body.appendChild(this.highscore2);
                    
                    var element2: HTMLElement = document.getElementById("reset");
                    element2.style.display = "block";
                    
                    var elementMusic: HTMLElement = document.getElementById("music");
                    elementMusic.style.display = "block";
                }
            }

            //Rohr drei und vier Oben
            if (((this.z > - 809 && this.z < -690) && (this.y3 > this.yBird)) || ((this.z > -1209 && this.z < -1090) && (this.y4 > this.yBird))) {
                crc2.beginPath();
                crc2.arc(this.xBird + 30, this.yBird + 30, 30, 0, Math.PI * 2);
                crc2.fillStyle = "red";
                crc2.fill();
                crc2.closePath();
                this.damagePipeTop++;
                this.lifeBird = this.lifeBird - this.damagePipeTop - this.damagePipeBottom;

                if (this.lifeBird < 0) {

                    console.log("Game Over");
                    var element3: HTMLElement = document.getElementById("gameOver");
                    element3.style.display = "block";

                    this.highscore2.innerText = "Your Score:" + " " + this.score;
                    document.body.appendChild(this.highscore2);

                    var element4: HTMLElement = document.getElementById("reset");
                    element4.style.display = "block";
                    
                    var elementMusic: HTMLElement = document.getElementById("music");
                    elementMusic.style.display = "block";
                }
            }
        }

        crashBottom(): void {
            this.xBird == birds[0].x;
            this.yBird == birds[0].y;

            //Erste zwei Rohre Unten  
            if (((this.x > - 9 && this.x < 110) && ((this.y5 + 300) < (this.yBird + 60))) || ((this.x > -409 && this.x < -290) && ((this.y6 + 300) < (this.yBird + 60)))) {

                crc2.beginPath();
                crc2.arc(this.xBird + 30, this.yBird + 30, 30, 0, Math.PI * 2);
                crc2.fillStyle = "red";
                crc2.fill();
                crc2.closePath();

                this.damagePipeBottom++;
                this.lifeBird = this.lifeBird - this.damagePipeBottom - this.damagePipeTop;

                if (this.lifeBird < 0) {
                    console.log("Game Over");
                    var element5: HTMLElement = document.getElementById("gameOver");
                    element5.style.display = "block";

                    this.highscore2.innerText = "Your Score:" + " " + this.score;
                    document.body.appendChild(this.highscore2);

                    var element6: HTMLElement = document.getElementById("reset");
                    element6.style.display = "block";
                    
                    var elementMusic: HTMLElement = document.getElementById("music");
                    elementMusic.style.display = "block";
                }
            }

            //Rohr drei und vier Unten
            if (((this.z > - 809 && this.z < -690) && ((this.y7 + 300) < (this.yBird + 60))) || ((this.z > -1209 && this.z < -1090) && ((this.y8 + 300) < (this.yBird + 60)))) {

                crc2.beginPath();
                crc2.arc(this.xBird + 30, this.yBird + 30, 30, 0, Math.PI * 2);
                crc2.fillStyle = "red";
                crc2.fill();
                crc2.closePath();

                this.damagePipeBottom++;
                this.lifeBird = this.lifeBird - this.damagePipeBottom - this.damagePipeTop;

                if (this.lifeBird < 0) {
                    console.log("Game Over");

                    var element7: HTMLElement = document.getElementById("gameOver");
                    element7.style.display = "block";

                    var element8: HTMLElement = document.getElementById("reset");
                    element8.style.display = "block";

                    this.highscore2.innerText = "Your Score:" + " " + this.score;
                    document.body.appendChild(this.highscore2);
                    
                    var elementMusic: HTMLElement = document.getElementById("music");
                    elementMusic.style.display = "block";
                }
            }
        }

        calculateScore(): void {
            this.score = Math.round(1.0 * ((this.distance - 150) / 400)) / 1.0; // Ergebnis: ohne Nachkommastelle
            this.highscore.innerText = "Score:" + " " + this.score;
            document.body.appendChild(this.highscore);
        }
    }
}