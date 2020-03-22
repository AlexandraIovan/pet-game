
window.onload = function() {
    // function class
    var Kitty = function(name, age) {
        this.name = name;
        this.age = age;
        this.health = 100; // 100%
        this.hapiness = 100; //100%
        this.sadness = 0; //100%
        this.domElement = document.createElement('div');
        document.body.appendChild(this.domElement);

        this.setHealth = function(health) {
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
    };

    var Person = function(name) {
        this.name = name;
    }

    var alla = new Person('Alla');
    
    // asa facem un obiect kitty
    var allaKitty = new Kitty('Codita', 3);

    function giveFood(cat) {
        // verificam daca obiectul este o instanta === obiect (apartine de) a clasei Kitty
        //if (cat instanceof Kitty) {
          cat.setHealth(cat.health + 10);
        //}
    }

    document.getElementById('give-food').addEventListener('click', function() {
        giveFood(alla);
    });

    console.log('MY KITTY ', allaKitty);
};


