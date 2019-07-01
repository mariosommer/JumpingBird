namespace Abschlussaufgabe {

    export class Bird3 extends Bird {
        gravity: number = 1.4;
        lift: number = -30;

        constructor(_x: number, _y: number, _z: number) {
            super(_x, _y, _z);
            this.x = _x;
            this.y = _y;
        }

        draw(): void {
            var img: HTMLImageElement = <HTMLImageElement>document.getElementById("vogel3Game");
            crc2.drawImage(img, this.x, this.y, 60, 60);
        }
    }
}