namespace Abschlussaufgabe {

    export class Ground {
        x: number;
        y: number;
        distance: number;
        s: number = 800;
        n: number = 800;
        m: number = 0;

        constructor(_x: number, _y: number, _distance: number) {
            this.x = _x;
            this.y = _y;
            this.distance = _distance;
            this.draw();
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {

            //lvl1
            //Speed
            this.x += -6.5;
            //links raus, rechts rein
            if (this.x <= -800) {
                this.x = crc2.canvas.width - 800;
            }
            //distance
            this.distance += 6.5;

            //lvl2
            if (this.distance > 2600) {
                this.x += -4;
                this.distance += 4;
            }

            //lvl3
            if (this.distance > 8000) {
                this.x += -4;
                this.distance += 4;
            }

            //lvl4
            if (this.distance > 15000) {
                this.x += -4;
                this.distance += 4;
            }
        }

        draw(): void {
            var img: HTMLImageElement = <HTMLImageElement>document.getElementById("boden");
            crc2.drawImage(img, this.x, this.y, 800, 60);

            var img2: HTMLImageElement = <HTMLImageElement>document.getElementById("boden2");
            crc2.drawImage(img, this.x + 800, this.y, 800, 60);
        }
    }
}