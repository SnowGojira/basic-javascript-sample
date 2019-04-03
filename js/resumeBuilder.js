/*
Create the json object will be used
 */
var bio_name = $("#bio_name");
var bio_photo = $("#bio_photo");
var bio_intro = $("#bio_intro");

var bio = {
    name : "HAKU HAL",
    role : "FRONT-END NINJA",
    contacts : {
        mobile : "181-1129-1995",
        email : "hakuhal@qq.com",
        github : "SnowSir@github.com",
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

        /*display the details of self-introduce*/
        bio_intro.append(HTMLwelcomeMsg.replace("%data%",this.welcomeMessage));
        // bio_intro.append(HTMLskillsStart);
        bio_intro.append(HTMLskillsStart);

        /*display all the contact path*/
        var contact = $("#contact");
        contact.append(HTMLmobile.replace("%data%",this.contacts.mobile));
        contact.append(HTMLemail.replace("%data%",this.contacts.email));
        contact.append(HTMLgithub.replace("%data%",this.contacts.github));
        contact.append(HTMLlocation.replace("%data%",this.contacts.location));

        /*display all the skills*/
        for (skill in this.skills){
            $("#bio_skills").append(HTMLskills.replace("%data%",this.skills[skill])+" ");
        }



    }
};

bio.display();

var education = {
    schools : [
        {
            name : "DLUT",
            location : "Dalian",
            degree : "Bachelor",
            majors : ["Electron Physics Engineer in Semiconductor field","Japanese Literature"],
            dates : "2006-2010"
        },
        {
            name : "Osaka University",
            location : "Osaka",
            degree : "Master",
            majors : ["Material Physics Engineer in Electronic Structure of Heavy Metals' field"],
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
            school : "Frontend Master",
            dates : "2018-2019",
            url : "https://frontendmasters.com/"
        }
    ],
    display : function () {

        $("#edu_timeline").append(HTMLschoolStart);

        /*display university education*/
        var edu_uni = $("#edu_uni");
        for(school in this.schools){
            var date = this.schools[school].dates;
            var name = this.schools[school].name;
            var degree = this.schools[school].degree;
            var location = this.schools[school].location;
            //print out all the majors
            var major = "";
            var majorArr = this.schools[school].majors;
            majorArr.forEach(function (item, index) {
                if(index < majorArr.length-1){
                    major += item+" && ";
                }else{
                    major += item;
                }
            });
            /*display a li item*/
            edu_uni.append(HTMLschoolItem.replace("%date%",date).replace("%name%",name).replace("%degree%",degree).replace("%location%",location).replace("%major%",major));
        }

        /*display online education*/
        var edu_online = $("#edu_online");
        for (course in this.onlineCourses){
            var title,platform,dates,url,onlineCourseObj;
            onlineCourseObj = this.onlineCourses[course];
            title = onlineCourseObj.title;
            platform = onlineCourseObj.school;
            dates = onlineCourseObj.dates;
            url = onlineCourseObj.url;

            /*add li item*/
            edu_online.append(HTMLCourseItem.replace("%url%",url).replace("%date%",dates).replace("%course%",title).replace("%school%",platform));
        }
    }
};
education.display();

var work = {
    jobs : [
        {
            employer : "IBM",
            title : "Software Procurement Agent",
            location : "ChengDu",
            dates : "2013.10-2015.5",
            description : "Engaged in software procurement business to Japanese Customers. Mainly responsible for the daily software purchases to Japanese customers, partial business assignment to the customers in Europe or Hong Kong. At the same time, analyse statistical data on procurement, optimize quotation processes, and sort the supplier's list."
        },
        {
            employer: "MirrorGeo Vr Company",
            title: "Android development",
            location: "ChengDu",
            dates: "2015.9-2015.5",
            description: "Responsible for programming the Android app. The main use of APP is a 3D instruction. You can rotate a VR model at the phone and observe the details of its every angel."
        },
        {
            employer: "Kaiqiang Culture Company",
            title: "Technical partner",
            location: "ChengDu",
            dates: "2016.8-2019.3",
            description: "Charged for all the company's technical operations and consultation."
        }
    ],
    display : function () {
        $('#work_timeline').append(HTMLworkStart);

    }
};

work.display();
var projects = {
    projects : [
        {
            title : "",
            dates : "",
            description : "",
            images : [""]
        }
    ],
    display : function () {

    }

};


function Append(dom,HTML,item) {
    var str = HTML;
    dom.append(str.replace("%data%",item));
}