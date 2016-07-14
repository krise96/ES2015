class Fighter{
    constructor(name = "Fighter", power = 10, health = 100){
        this.name = name;
        this.power = power;
        this.health = health;
    }

    setDamage(damage){
        this.health = this.health - damage;
        if(this.health < 0)
        {
            this.health = 0;
        }
        console.log(`${this.name}-health: ${this.health}`);
    }
    
    hit(enemy, point){
        let damage = point * this.power;
        console.log(this.name + " attack on " + enemy.name + " with damage: " + damage);
        enemy.setDamage(damage);
    }
}


class ImprovedFighter extends Fighter{
    doubleHit(enemy, point){
        super.hit(enemy, point * 2);
    }
}



var fighter = new Fighter("Fighter", 10, 100);
var improvedFighter = new ImprovedFighter("improvedFighter", 10, 100);



var fight = (first, second, ...points) => {
    let i = 0;
    while(first.health != 0 || second.health != 0){
        if(!points[i]) i = 0;
        first.hit(second, points[i]);
        if(isEnd(first, second))return;
        if(points[i] >= 5){
            second.hit(first, points[i]);    
        }
        else{
            second.doubleHit(first, points[i]);
        }
        if(isEnd(first, second))return;
    }
}

function isEnd(first, second){
     if(first.health == 0 && second.health != 0){
        console.log(second.name + " Win!");
        return true;
    }
    else if(second.health == 0 && first.health != 0){
        console.log(first.name + " Win!");
        return true;
    }
    else if(second.health == 0 && first.health == 0){
        console.log("Draw");
        return true;
    }
    return false;
}

fight(fighter, improvedFighter, 3, 6, 7);