var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [{
        name: "Iron Man",
        image: "http://media.2oceansvibe.com/wp-content/uploads/2013/04/iron-man-flying.jpg",
        description: "A billionaire industrialist and genius inventor, Tony Stark (Robert Downey Jr.), is conducting weapons tests overseas, but terrorists kidnap him to force him to build a devastating weapon. Instead, he builds an armored suit and upends his captors. Returning to America, Stark refines the suit and uses it to combat crime and terrorism."
    },
    {
        name: "Batman",
        image: "http://www.planwallpaper.com/static/images/4632292-2736548823-Batma.jpg",
        description: "Batman is a fictional superhero appearing in American comic books published by DC Comics. The character was created by artist Bob Kane and writer Bill Finger, and first appeared in Detective Comics #27."
    },
    {
        name: "Thor",
        image: "http://cdn.mos.cms.futurecdn.net/f223f1a665649c473330df6b2c7c2596.jpg",
        description: "As the son of Odin (Anthony Hopkins), king of the Norse gods, Thor (Chris Hemsworth) will soon inherit the throne of Asgard from his aging father. However, on the day that he is to be crowned, Thor reacts with brutality when the gods' enemies, the Frost Giants, enter the palace in violation of their treaty. As punishment, Odin banishes Thor to Earth. While Loki (Tom Hiddleston), Thor's brother, plots mischief in Asgard, Thor, now stripped of his powers, faces his greatest threat."
    },
    {
        name: "The Flash",
        image: "http://static.comicvine.com/uploads/original/11122/111223379/4732222-theflash_thecw.jpg",
        description: "At 11, Barry Allen's life changed completely when his mother died in a freak accident and his innocent father was convicted of her murder. Now a crime-scene investigator, his dedication to learn the truth about his mother's death drives him to follow up on every new scientific advancement and urban legend. When his latest obsession -- a particle accelerator heralded as a world-changing invention -- causes an explosion, it creates a freak storm and Barry is struck by lightning. He awakes from a coma nine months later with the power of superspeed. When he learns that others who have gained powers use them for evil, he dedicates himself to protecting the innocent, while still trying to solve the older mystery."
    },
    {
        name: "Arrow",
        image: "http://cdn.playbuzz.com/cdn/c51e6ff1-b98c-49c8-8131-cffbbc948ca7/eb5f5af2-47a5-4eba-8231-071bd6a8493f.jpg",
        description: "When presumed-dead billionaire playboy Oliver Queen returns home to Starling City after five years stranded on a remote island in the Pacific, he hides the ways the experience has changed him. As he reconnects with those closest to him, including his sister, Thea, Oliver appears to be the same wealthy, carefree bachelor they've always known. At night, flanked by his devoted friend, Diggle, Oliver uses his secret persona -- that of a vigilante -- to right societal wrongs and transform the city to its former glory."
    },
    {
        name: "Deadpool",
        image: "https://fanart.tv/fanart/movies/293660/moviebackground/deadpool-5699c294e32db.jpg",
        description: "Wade Wilson (Ryan Reynolds) is a former Special Forces operative who now works as a mercenary. His world comes crashing down when evil scientist Ajax (Ed Skrein) tortures, disfigures and transforms him into Deadpool. The rogue experiment leaves Deadpool with accelerated healing powers and a twisted sense of humor. With help from mutant allies Colossus and Negasonic Teenage Warhead (Brianna Hildebrand), Deadpool uses his new skills to hunt down the man who nearly destroyed his life."
    },
    {
        name: "Captain America",
        image: "http://www.goliath.com/wp-content/uploads/2016/04/chis-evans-captain-america.jpg",
        description: "Captain America is a fictional superhero appearing in American comic books published by Marvel Comics. Created by cartoonists Joe Simon and Jack Kirby, the character first appeared in Captain America Comics #1 (cover dated March 1941) from Timely Comics, a predecessor of Marvel Comics. Captain America was designed as a patriotic supersoldier who often fought the Axis powers of World War II and was Timely Comics' most popular character during the wartime period. The popularity of superheroes waned following the war and the Captain America comic book was discontinued in 1950, with a short-lived revival in 1953. Since Marvel Comics revived the character in 1964, Captain America has remained in publication."
    },
    {
        name: "Hulk",
        image: "https://s-media-cache-ak0.pinimg.com/originals/c2/aa/02/c2aa02950876626f36c51a0d53b0ddec.jpg",
        description: "The Hulk is a fictional superhero created by writer Stan Lee and artist Jack Kirby, who first appeared in the debut issue of the comic book The Incredible Hulk in May 1962 published by Marvel Comics. "
    }
]

function seedDB() {
    //Remove all campgrounds
    Campground.remove({}, function(err) {
        if (err) {
            console.log(err);
        }
        console.log("removed campgrounds!");
        //add a few campgrounds
        data.forEach(function(seed) {
            Campground.create(seed, function(err, campground) {
                if (err) {
                    console.log(err)
                } else {
                    console.log("added a campground");
                    //create a comment
                    Comment.create({
                        text: "This place is great, but I wish there was internet",
                        author: "Homer"
                    }, function(err, comment) {
                        if (err) {
                            console.log(err);
                        } else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("Created new comment");
                        }
                    });
                }
            });
        });
    });
    //add a few comments
}


module.exports = seedDB;