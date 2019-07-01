namespace Abschlussaufgabe {

    export class Background {
        x: number;
        y: number;
        distance: number;
        s: number = 800;
        n: number = 800;
        t: number = 800;
        m: number = 0;

        constructor(_x: number, _y: number, _distance: number) {
            this.x = _x;
            this.y = _y;
            this.distance = _distance;
            this.drawBackground();
        }

        update(): void {
            this.move();
           // this.calculateScore();
        }

        move(): void {
            
            //Speed
            this.x += -6.5;
            //links raus, rechts rein
            if (this.x <= -800) {
                this.x = crc2.canvas.width - 800;
            }
            
            //distance
            this.distance += 6.5;

            //lvl1 Background
            this.drawBackground();

            //lvl2
            if (this.distance > 2600) {
                this.x += -4;
                this.distance += 4;
                this.drawSecondBackground();
            }

            //lvl3
            if (this.distance > 8000) {
                this.x += -4;
                this.distance += 4;
                this.drawThirdBackground();
            }

            //lvl4
            if (this.distance > 15000) {
                this.x += -4;
                this.distance += 4;
                this.drawFourthBackground();
            }
        }

        drawBackground(): void {
            
            var img: HTMLImageElement = <HTMLImageElement>document.getElementById("background");
            crc2.drawImage(img, this.m, 0, 800, 480);

            if (this.distance > 2600) {
                this.m += -10.5;
            }            
        }

        drawSecondBackground(): void {

            var img: HTMLImageElement = <HTMLImageElement>document.getElementById("background2");
            crc2.drawImage(img, this.n, 0, 810, 480);

            if (this.n > 1) {
                this.n += -10.5;
            }

            if (this.distance > 8000) {
                this.n += -14.5;
            }
        }

        drawThirdBackground(): void {

            var img: HTMLImageElement = <HTMLImageElement>document.getElementById("background3");
            crc2.drawImage(img, this.s, 0, 810, 460);

            if (this.s > 1) {
                this.s += -14.5;
            }

            if (this.distance > 15000) {
                this.n += -18.5;
            }
        }

        drawFourthBackground(): void {

            var img: HTMLImageElement = <HTMLImageElement>document.getElementById("background4");
            crc2.drawImage(img, this.t, 0, 810, 480);

            if (this.t > 1) {
                this.t += -18.5;
            }
        }
    }
}