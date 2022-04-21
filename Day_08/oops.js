/* ###################################################################
 1.The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:
 2.title, which is a String representing the title of the movie
 3.studio, which is a String representing the studio that made the movie
 4.rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc) 
 ################################################################### */
class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
        if (rating == null) return this.rating = "PG"
    }
    getPG(arr) {

        let value1 = arr.filter(val => val.rating === "PG")
        let value2 = arr.filter(val => val.rating !== "PG")
        let result = [...value2, ...value1]
        return result;
    }
}
let movie1 = new Movie("Avengers", "Marvel", "PG13");
let movie2 = new Movie("Valimai", "2D Entertainment", "PG12");
let movie3 = new Movie("Doctor", "KJR studios", "R");
let movie4 = new Movie("Baahubali", "Arka Media", "R");
const arr = [movie1, movie2, movie3, movie4];
let result = movie1.getPG(arr);
console.log(result);


/* ######################################################
 Write a “person” class to hold all the details.
 ###################################################### */
class Person {
    constructor(name, age, place) {
        this.name = name;
        this.age = age;
        this.place = place;
    }
    get userName() {
        return this.name;
    }
    set userName(updateName) {
        this.name = updateName;
    }
}
const newUser = new Person('Sakthi', '23', 'Ariyalur');
console.log(newUser.name);
console.log(newUser.place);
console.log(newUser.age);
newUser.name = 'Vel';
console.log(newUser.name);


/* #########################################
 write a class to calculate uber price.
 ########################################### */
class Uber {
    constructor(pickup, destination, TotalKms) {
        this.pickup = pickup;
        this.destination = destination;
        this.TotalKms = TotalKms;
    }
    cost() {
        let price = Customer.TotalKms * 15;
        return (price)
    }
}
const Customer = new Uber("Ariyalur", "Trichy", 40);
console.log("Price:",Customer.cost())