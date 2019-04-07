/*
Create the json object will be used
 */
$(function () {
    let bio_name = $("#bio_name");
    let bio_photo = $("#bio_photo");
    let bio_intro = $("#bio_intro");

    let bio = {
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
        display : function displayBio() {
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
            let contact = $("#contact");
            contact.append(HTMLmobile.replace("%data%",this.contacts.mobile));
            contact.append(HTMLemail.replace("%data%",this.contacts.email));
            contact.append(HTMLgithub.replace("%data%",this.contacts.github));
            contact.append(HTMLlocation.replace("%data%",this.contacts.location));

            /*display all the skills*/
            let skills = this.skills;
            skills.forEach(function (item) {
                $("#bio_skills").append(HTMLskills.replace("%data%",item)+" ");
            });
        }
    };

    bio.display();

    let education = {
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
        display : function displayEducations() {

            $("#edu_timeline").append(HTMLschoolStart);

            /*display university education*/
            let schools = this.schools;
            let edu_uni = $("#edu_uni");
            schools.forEach(function (item) {
                let date = item.dates;
                let name = item.name;
                let degree = item.degree;
                let location = item.location;
                //print out all the majors
                let major = "";
                let majorArr = item.majors;
                majorArr.forEach(function (item, index) {
                    index < majorArr.length-1? major += item+" && " : major += item;
                });
                /*display a li item*/
                edu_uni.append(HTMLschoolItem.replace("%date%",date).replace("%name%",name).replace("%degree%",degree).replace("%location%",location).replace("%major%",major));
            });

            /*display online education*/
            let edu_online = $("#edu_online");
            let onlineCourse = this.onlineCourses;
            onlineCourse.forEach(function (item) {
                let title,platform,dates,url,onlineCourseObj;
                title = item.title;
                platform = item.school;
                dates = item.dates;
                url = item.url;

                /*add li item*/
                edu_online.append(HTMLCourseItem.replace("%url%",url).replace("%date%",dates).replace("%course%",title).replace("%school%",platform));
            });
        }
    };
    education.display();

    let work = {
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
        display : function displayWorks() {
            $('#work_timeline').append(HTMLworkStart);
            let jobs = this.jobs;
            jobs.forEach(function (item) {
                let employer, title, location, dates, descr;
                employer = item.employer;
                title = item.title;
                dates = item.dates;
                location = item.location;
                descr = item.description;

                $('#work_entry').append(HTMLWorkItem.replace("%date%",dates).replace("%title%",title).replace("%location%",location).replace("%employer%",employer).replace("%descr%",descr));

            });
        }
    };

    work.display();
    let projects = {
        projects : [
            {
                title : "Snow One",
                dates : "2018-5-7",
                description : "This is a test text, which has no practical significance. It mainly used to occupy space.",
                /*because of the style changes, make some changes in json*/
                images : "images/1-480_xm.jpg"
            },
            {
                title : "Snow Two",
                dates : "2018-6-7",
                description : "This is a test text, which has no practical significance. It mainly used to occupy space.",
                images : "images/2-480_xm.jpg"
            },
            {
                title : "Snow Three",
                dates : "2018-7-7",
                description : "This is a test text, which has no practical significance. It mainly used to occupy space.",
                images : "images/3-480_xm.jpg"
            },
            {
                title : "Snow Four",
                dates : "2018-8-7",
                description : "This is a test text, which has no practical significance. It mainly used to occupy space.",
                images : "images/4-480_xm.jpg"
            },
            {
                title : "Snow Five",
                dates : "2018-9-7",
                description : "This is a test text, which has no practical significance. It mainly used to occupy space.",
                images : "images/5-480_xm.jpg"
            },
            {
                title : "Snow Six",
                dates : "2018-10-7",
                description : "This is a test text, which has no practical significance. It mainly used to occupy space.",
                images : "images/6-480_xm.jpg"
            },
            {
                title : "Snow Seven",
                dates : "2018-11-7",
                description : "This is a test text, which has no practical significance. It mainly used to occupy space.",
                images : "images/7-480_xm.jpg"
            },
            {
                title : "Snow Eight",
                dates : "2018-12-7",
                description : "This is a test text, which has no practical significance. It mainly used to occupy space.",
                images : "images/8-480_xm.jpg"
            }
        ],
        display : function displayProjects() {
            let projects = this.projects;
            projects.forEach(function (item) {
                let img = item.images;
                let title = item.title;
                let date = item.dates;
                let descr = item.description;
                $("#projects").append(HTMLProjectItem.replace("%image%",img).replace("%title%",title).replace("%date%",date).replace("%descr%",descr));
            });

        }
    };

    projects.display();

});

// Initialize and add the map
var initMap = function initMap() {
    // The location of Uluru
    let chengdu = {lat: 30.67, lng: 104.06};
    // The map, centered at Uluru
    let map = new google.maps.Map(
        document.getElementById('map'), {zoom: 10, center: chengdu});
    // The marker, positioned at Uluru
    let marker = new google.maps.Marker({position: chengdu, map: map});
};

