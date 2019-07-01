namespace Abschlussaufgabe {

    export class Bird2 extends Bird {
        gravity: number = 0.8;
        lift: number = -40;

        constructor(_x: number, _y: number, _z: number) {
            super(_x, _y, _z);
            this.x = _x;
            this.y = _y;
        }

        draw(): void {
            var img: HTMLImageElement = <HTMLImageElement>document.getElementById("vogel2Game");
            crc2.drawImage(img, this.x, this.y, 30, 30);
        }
    }
}