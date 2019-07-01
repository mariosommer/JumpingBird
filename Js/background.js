var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    var Background = (function () {
        function Background(_x, _y, _distance) {
            this.s = 800;
            this.n = 800;
            this.t = 800;
            this.m = 0;
            this.x = _x;
            this.y = _y;
            this.distance = _distance;
            this.drawBackground();
        }
        Background.prototype.update = function () {
            this.move();
            // this.calculateScore();
        };
        Background.prototype.move = function () {
            //Speed
            this.x += -6.5;
            //links raus, rechts rein
            if (this.x <= -800) {
                this.x = Abschlussaufgabe.crc2.canvas.width - 800;
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
        };
        Background.prototype.drawBackground = function () {
            var img = document.getElementById("background");
            Abschlussaufgabe.crc2.drawImage(img, this.m, 0, 800, 480);
            if (this.distance > 2600) {
                this.m += -10.5;
            }
        };
        Background.prototype.drawSecondBackground = function () {
            var img = document.getElementById("background2");
            Abschlussaufgabe.crc2.drawImage(img, this.n, 0, 810, 480);
            if (this.n > 1) {
                this.n += -10.5;
            }
            if (this.distance > 8000) {
                this.n += -14.5;
            }
        };
        Background.prototype.drawThirdBackground = function () {
            var img = document.getElementById("background3");
            Abschlussaufgabe.crc2.drawImage(img, this.s, 0, 810, 460);
            if (this.s > 1) {
                this.s += -14.5;
            }
            if (this.distance > 15000) {
                this.n += -18.5;
            }
        };
        Background.prototype.drawFourthBackground = function () {
            var img = document.getElementById("background4");
            Abschlussaufgabe.crc2.drawImage(img, this.t, 0, 810, 480);
            if (this.t > 1) {
                this.t += -18.5;
            }
        };
        return Background;
    }());
    Abschlussaufgabe.Background = Background;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=background.js.map