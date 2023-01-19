/* Task 4. Both web and mobile applications should inherit methods:
○ isCCLicence which checks if the licence of the application is CC (Creative Commons)
○ like which increases the number of stars by one
○ showStars which prints out the number of stars */

class App {
    constructor(name, licence, stars){
        this.name = name;
        this.licence = licence;
        this.stars = stars;
    }
    isCCLicence(){
        if (this.licence == "CC") {
            return "Licence of the application is CC";
        }
        else {
            return "Licence of the aplication is not CC"; 
        }
    }
    like(){
        this.stars += 1;
    }
    showStars(){
        console.log(this.stars);
    }
}

/* Task 1. Create constructor functions with properties representing the following:
○ WebApp: name, url, technologies, licence, stars
○ MobileApp: name, platforms, licence, stars */

// WebApp Constructor

/* Task 2. All web applications should inherit methods:
○ getData which prints out all the information
○ reactBased which checks if one of the used technologies is React */

class WebApp extends App{
    constructor (name, url, technologies, licence, stars){
        super(name, licence, stars);
        this.url = url;
        this.technologies = technologies;
    }
    getData(){
        console.log(super.name + ' ' + this.url + ' ' + this.technologies + ' ' + super.licence + ' ' + super.stars);
    }
    reactBased(){
        for (var i=0; i<this.technologies.length; i++){
            if (this.technologies[i] == "React" || this.technologies[i] == "react"){
                return "React is used as one of the technologies";
            } 
            else return "React is not used as one of the technologies";
        }
    }
}

// MobileApp Constructor

/* Task 3. All mobile applications should inherit methods:
○ getData which prints out all the informations
○ forAndroid which checks if one of the platforms the application is developed for is Android */

class MobileApp extends App {
    constructor(name, platforms, licence, stars){
    super(name, licence, stars)
    this.platforms = platforms;
    }
    getData(){
        console.log(super.name +  ' ' + this.platforms + ' ' + super.licence + ' ' + super.stars);
    }
    forAndroid(){
        for (var i=0; i<this.platforms.length; i++){
            if (this.platforms[i] == "Android" || this.platforms[i] == "android") {
                return "This aplication is developed for Android"
            }
            else {
                return "This application has not yet been developed for Android"
            }
        }
    }
}

