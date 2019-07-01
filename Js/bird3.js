var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    var Bird3 = (function (_super) {
        __extends(Bird3, _super);
        function Bird3(_x, _y, _z) {
            _super.call(this, _x, _y, _z);
            this.gravity = 1.4;
            this.lift = -30;
            this.x = _x;
            this.y = _y;
        }
        Bird3.prototype.draw = function () {
            var img = document.getElementById("vogel3Game");
            Abschlussaufgabe.crc2.drawImage(img, this.x, this.y, 60, 60);
        };
        return Bird3;
    }(Abschlussaufgabe.Bird));
    Abschlussaufgabe.Bird3 = Bird3;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=bird3.js.map