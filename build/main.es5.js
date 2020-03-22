'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

window.onload = function () {
    var Kitty = function () {
        function Kitty(name, age) {
            _classCallCheck(this, Kitty);

            this.name = name;
            this.age = age;
            this.health = 100; // 100%
            this.hapiness = 100; //100%
            this.sadness = 0; //100%
            this.domElement = document.createElement('div');
            document.body.appendChild(this.domElement);
        }

        _createClass(Kitty, [{
            key: 'setHealth',
            value: function setHealth(health) {
                if (health <= 100) {
                    this.health = health;
                    if (this.health >= 50) {
                        this.domElement.className = 'happy-kitty';
                    }
                    if (this.health < 50) {
                        this.domElement.className = 'sad-kitty';
                    }
                    if (this.health < 30) {
                        this.domElement.className = 'crying-kitty';
                    }
                }
            }
        }]);

        return Kitty;
    }();

    var allaKitty = new Kitty('Codita', 3);

    allaKitty = new Kitty('Alt Codita', 3);

    var giveFood = function giveFood(cat) {
        cat.setHealth(cat.health + 10);
    };

    document.getElementById('give-food').addEventListener('click', function () {
        giveFood(allaKitty);
    });

    console.log('>>> ', allaKitty);
};
