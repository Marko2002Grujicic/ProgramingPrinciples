function App (name, licence, stars){
    this.name = name;
    this.licence = licence;
    this.stars = stars;
}

/* Task 1. Create constructor functions with properties representing the following:
○ WebApp: name, url, technologies, licence, stars
○ MobileApp: name, platforms, licence, stars */

// WebApp Constructor
function WebApp (name, url, technologies, licence, stars){
    App.call(this, name, licence, stars);
    this.url = url;
    this.technologies = technologies;
}
WebApp.prototype = Object.create(App.prototype);
WebApp.prototype.constructor = WebApp;

/* Task 2. All web applications should inherit methods:
○ getData which prints out all the information
○ reactBased which checks if one of the used technologies is React */

WebApp.prototype.getData = function(){
    console.log(this.name + ' ' + this.url + ' ' + this.technologies + ' ' + this.licence + ' ' + this.stars);
}

WebApp.prototype.reactBased = function(){
    for (var i=0; i<this.technologies.length; i++){
        if (this.technologies[i] == "React" || this.technologies[i] == "react"){
            return "React is used as one of the technologies";
        } 
        else return "React is not used as one of the technologies";
    }
}


// MobileApp Constructor
function MobileApp(name, platforms, licence, stars){
    App.call(this, name, licence, stars);
    this.platforms = platforms;
}
MobileApp.prototype = Object.create(App.prototype);
MobileApp.prototype.constructor = MobileApp;

/* Task 3. All mobile applications should inherit methods:
○ getData which prints out all the informations
○ forAndroid which checks if one of the platforms the application is developed for is Android */

MobileApp.prototype.getData = function(){
    console.log(this.name +  ' ' + this.platforms + ' ' + this.licence + ' ' + this.stars);
}

MobileApp.prototype.forAndroid = function(){
    for (var i=0; i<this.platforms.length; i++){
        if (this.platforms[i] == "Android" || this.platforms[i] == "android") {
            return "This aplication is developed for Android"
        }
        else {
            return "This application has not yet been developed for Android"
        }
    }
}

/* Task 4. Both web and mobile applications should inherit methods:
○ isCCLicence which checks if the licence of the application is CC (Creative Commons)
○ like which increases the number of stars by one
○ showStars which prints out the number of stars */

App.prototype.isCCLicence = function(){
    if (this.licence == "CC") {
        return "Licence of the application is CC";
    }
    else {
        return "Licence of the aplication is not CC"; 
    }
}

App.prototype.like = function(){
    this.stars += 1;
}

App.prototype.showStars = function(){
    console.log(this.stars);
}
