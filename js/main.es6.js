window.onload = () => {
    class Kitty {
        constructor(name, age) {
            this.name = name;
            this.age = age;  
            this.health = 100 // 100%
            this.hapiness = 100 //100%
            this.sadness = 0 //100%
            this.domElement = document.createElement('div');
            document.body.appendChild(this.domElement); 
        }
       
        setHealth(health) {
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
    }

    let allaKitty = new Kitty('Codita', 3);

    allaKitty = new Kitty('Alt Codita', 3);

    const giveFood = (cat) => {
        cat.setHealth(cat.health + 10);
    };

    document.getElementById('give-food').addEventListener('click', () => {
        giveFood(allaKitty);
    });

    console.log('>>> ', allaKitty);
};