var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    var Ground = (function () {
        function Ground(_x, _y, _distance) {
            this.s = 800;
            this.n = 800;
            this.m = 0;
            this.x = _x;
            this.y = _y;
            this.distance = _distance;
            this.draw();
        }
        Ground.prototype.update = function () {
            this.move();
            this.draw();
        };
        Ground.prototype.move = function () {
            //lvl1
            //Speed
            this.x += -6.5;
            //links raus, rechts rein
            if (this.x <= -800) {
                this.x = Abschlussaufgabe.crc2.canvas.width - 800;
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
        };
        Ground.prototype.draw = function () {
            var img = document.getElementById("boden");
            Abschlussaufgabe.crc2.drawImage(img, this.x, this.y, 800, 60);
            var img2 = document.getElementById("boden2");
            Abschlussaufgabe.crc2.drawImage(img, this.x + 800, this.y, 800, 60);
        };
        return Ground;
    }());
    Abschlussaufgabe.Ground = Ground;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=ground.js.map