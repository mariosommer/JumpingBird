namespace Abschlussaufgabe {

    export class Bird1 extends Bird {
        gravity: number = 1;
        lift: number = -36;

        constructor(_x: number, _y: number, _z: number) {
            super(_x, _y, _z);
            this.x = _x;
            this.y = _y;
        }

        draw(): void {
            var img: HTMLImageElement = <HTMLImageElement>document.getElementById("roterVogel");
            crc2.drawImage(img, this.x, this.y, 60, 60);
        }
    }
}