var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    var Bird = (function () {
        function Bird(_x, _y, _z) {
            this.gravity = 0.0000000001;
            this.velocity = 0;
            this.lift = -36;
            this.draw();
            this.update();
        }
        Bird.prototype.update = function () {
            this.move();
            this.draw();
        };
        Bird.prototype.move = function () {
            this.velocity += this.gravity;
            this.velocity *= 0.9;
            this.y += this.velocity;
        };
        Bird.prototype.up = function () {
            this.velocity += this.lift;
        };
        Bird.prototype.draw = function () {
            //abstract
        };
        return Bird;
    }());
    Abschlussaufgabe.Bird = Bird;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=birdSuperClass.js.map