var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    var Bird2 = (function (_super) {
        __extends(Bird2, _super);
        function Bird2(_x, _y, _z) {
            _super.call(this, _x, _y, _z);
            this.gravity = 0.8;
            this.lift = -40;
            this.x = _x;
            this.y = _y;
        }
        Bird2.prototype.draw = function () {
            var img = document.getElementById("vogel2Game");
            Abschlussaufgabe.crc2.drawImage(img, this.x, this.y, 30, 30);
        };
        return Bird2;
    }(Abschlussaufgabe.Bird));
    Abschlussaufgabe.Bird2 = Bird2;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=bird2.js.map