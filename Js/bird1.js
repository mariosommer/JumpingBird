var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    var Bird1 = (function (_super) {
        __extends(Bird1, _super);
        function Bird1(_x, _y, _z) {
            _super.call(this, _x, _y, _z);
            this.gravity = 1;
            this.lift = -36;
            this.x = _x;
            this.y = _y;
        }
        Bird1.prototype.draw = function () {
            var img = document.getElementById("roterVogel");
            Abschlussaufgabe.crc2.drawImage(img, this.x, this.y, 60, 60);
        };
        return Bird1;
    }(Abschlussaufgabe.Bird));
    Abschlussaufgabe.Bird1 = Bird1;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=bird1.js.map