namespace Abschlussaufgabe {

    export class Bird {
        x: number;
        z: number;
        y: number;
        gravity: number = 0.0000000001;
        velocity: number = 0;
        lift: number = -36;

        constructor(_x: number, _y: number, _z: number) {
            this.draw();
            this.update();
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.velocity += this.gravity;
            this.velocity *= 0.9;
            this.y += this.velocity;
        }

        up(): void {
            this.velocity += this.lift;
        }

        draw(): void {
            //abstract
        }
    }
}