/*
Create the json object will be used
 */
var bio_name = $("#bio_name");
var bio_photo = $("#bio_photo");

var bio = {
    name : "HAKU HAL",
    role : "FRONT-END NINJA",
    contacts : {
        mobile : "181-1129-1995",
        email : "hakuhal@assemblemedia.cn",
        github : "https://github.com/SirSnow",
        location : "ChengDu"
    },
    welcomeMessage : "My name means snow, so I made a website with such a theme.Although I am a girl, I hope I can make some achievements in the field of programming, break the stereotype, and make my own contribution to the equality of men and women.",
    skills : ["Html5","Photoshop","Adobe Illustrator","Motion Graphic","Leadership"],
    biopic : "images/photo",
    display : function () {
        /*display header*/
        bio_name.append(HTMLheaderName.replace("%data%",this.name));
        bio_name.append(HTMLheaderRole.replace("%data%",this.role));

        /*display photo
        * new RegExp() can make the replace item to be global item*/
        bio_photo.append(HTMLbioPic.replace(new RegExp("%data%", "g"),this.biopic));



    }
};

bio.display();

var education = {
    school : [
        {
            name : "Osaka University",
            location : "Osaka",
            degree : "Master",
            majors : ["Physics","Japanese"],
            dates : "2010-2013"
         }
    ],
    onlineCourses : [
        {
            title : "Front end nano-degree",
            school : "Udacity",
            dates : "2017-2019",
            url : "https://www.udacity.com/"
        },
        {
            title : "Vue Workshop",
            school : "frontend Master",
            dates : "2018-2019",
            url : "https://frontendmasters.com/"
        }
    ],
    display : function () {
        
    }

};

var work = {
    jobs : [
        {
            employer : "IBM",
            title : "Software Procurement Agent",
            location : "ChengDu",
            dates : "2013-2015",
            description : "Engaged in software procurement business to Japanese Customers. Mainly responsible for the daily software purchases to Japanese customers, partial business assignment to the customers in Europe or Hong Kong. At the same time, analyse statistical data on procurement, optimize quotation processes, and sort the supplier's list."
        },

        {
            employer: "ChengDu Kaiqiang Culture Company",
            title: "Technical partner",
            location: "ChengDu",
            dates: "2017-2019",
            description: "Charged for all the company's technical operations"
        }
    ]
};

var projects = {
    projects : [
        {
            title : "",
            dates : "",
            description : "",
            image : ""
        }
    ]

};


