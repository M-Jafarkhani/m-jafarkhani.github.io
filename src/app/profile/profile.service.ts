import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  projects: any = [
    {
      id: 1,
      title: "Read data from Google spreadsheet in Angular",
      desc: "",
      livedemo: "https://mehulk05.github.io/MyShop/#/",
      githurl: "https://github.com/mehulk05/MyShop",
      mediumlink:
        "https://itnext.io/read-data-from-google-spreadsheet-in-angular-209ee74b6cb4",
      imgUrl: "assets/images/z1.png",
      tech: "Angular 10 , Google SpreadsheetApi",
    },

    {
      id: 2,
      title: "Blog App Using MERN Stack",
      desc: "",
      livedemo: "https://mehulk05.github.io/Blogapp-using-MERN/#/",
      githurl: "https://github.com/mehulk05/Blogapp-using-MERN",
      mediumlink: "https://itnext.io/blog-app-using-mern-stack-b0b4d69d7ea1",
      imgUrl: "assets/images/z26.png",
      tech: "React, Node, MongoDB, Express",
    },

    {
      id: 3,
      title: "CRUD operation using MEAN stack",
      desc: "",
      livedemo: "https://mehulk05.github.io/Blog-using-mean/#/",
      githurl: "https://github.com/mehulk05/Blog-using-mean",
      mediumlink:
        "https://itnext.io/crud-operation-using-mean-stack-7dfa2f51ec8c",
      imgUrl: "assets/images/z27.png",
      tech: "Angular 10, Node, MongoDB, Express",
    },

    {
      id: 4,
      title: "Multiroom Chat Application in Node JS",
      desc: "",
      livedemo: "https://chatapp-using-node.herokuapp.com/",
      githurl: "https://github.com/mehulk05/Chat-app-using-Nodejs",
      mediumlink:
        "https://medium.com/weekly-webtips/building-a-multiroom-chat-application-in-node-js-8a8adca5acf2",
      imgUrl: "assets/images/z23.png",
      tech: "Node JS,Socket IO",
    },

    {
      id: 5,
      title: "Integrate Medium Blogs on your React App",
      desc: "",
      livedemo: "https://mehulk05.github.io/Medium-Blog-On-React-App#/",
      githurl: "https://github.com/mehulk05/Medium-Blog-On-React-App",
      mediumlink:
        "https://javascript.plainenglish.io/how-to-add-medium-blogs-on-your-react-app-a3898a729aad",
      imgUrl: "assets/images/z4.png",
      tech: "React JS",
    },

    {
      id: 6,
      title: "News App using ReactJS (Parsing XML to JSON)",
      desc: "",
      livedemo: "https://mehulk05.github.io/NewsApp-using-React",
      githurl: "https://github.com/mehulk05/NewsApp-using-React",
      mediumlink: "https://codeburst.io/news-app-using-reactjs-f9752d7ab6ce",
      imgUrl: "assets/images/z24.png",
      tech: "React JS, XMl to JSON",
    },

    {
      id: 7,
      title: "Medium-Like Blog App Using Angular 9 and Firebase",
      desc: "",
      livedemo: "https://mehulk05.github.io/Blog-Book/",
      githurl: "https://github.com/mehulk05/Blog-Book",
      mediumlink:
        "https://codeburst.io/blogging-app-using-angular-9-and-firebase-98e36168d850",
      imgUrl: "assets/images/z21.png",
      tech: "HTML, Bootstrap, CSS, Angular-9, Firebase",
    },

    {
      id: 8,
      title: "COVID 19 Tracker (Statistics) app Using Angularr",
      desc: "",
      livedemo: "https://mehulk05.github.io/COVOID-19/",
      githurl: "https://github.com/mehulk05/COVOID-19",
      mediumlink:
        "https://codeburst.io/covoid-19-tracker-statistics-app-using-angular-2358347b3d1f",
      imgUrl: "assets/images/z2.png",
      tech: "Angular 10 ,Bootstrap,Javascript",
    },

    {
      id: 9,
      title: "Weather App with React",
      desc: "",
      livedemo: "https://mehulk05.github.io/React-Weather/",
      githurl: "https://github.com/mehulk05/React-Weather-App",
      mediumlink:
        "https://medium.com/analytics-vidhya/weather-app-with-react-adaa7268bbdb",
      imgUrl: "assets/images/z9.png",
      tech: "React, Open MAp Api",
    },

    {
      id: 10,
      title: "Spring Boot + Angular 8 CRUD Example",
      desc: "",
      livedemo:
        "https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example",
      githurl: "https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example",
      mediumlink:
        "https://medium.com/analytics-vidhya/spring-boot-angular-8-crud-example-8aeafd47b54",
      imgUrl: "assets/images/z28.png",
      tech: "Angular8, Java ,Hibernate",
    },

    {
      id: 11,
      title: "Personal Portfolio Using Angular",
      desc: "",
      livedemo: "https://personal-portfolio0320.000webhostapp.com/",
      githurl: "https://github.com/mehulk05/Personal-Portfolio-Angular-Updated",
      mediumlink:
        "https://javascript.plainenglish.io/personal-portfolio-using-angular-8-and-bootstrap-5dde6fc7cf9b",
      imgUrl: "assets/images/z11.png",
      tech: "Angular ,Bootstrap",
    },

    {
      id: 12,
      title: "Personal Portfolio Using Django",
      desc: "",
      livedemo: "https://personal-portfolio0320.000webhostapp.com/",
      githurl: "https://github.com/mehulk05/My-Personal-Portfolio",
      mediumlink:
        "https://mehulkothari05.medium.com/personal-portfolio-using-django-dba49c355905",
      imgUrl: "assets/images/z12.png",
      tech: "Django",
    },

    {
      id: 13,
      title: "Movie Success Prediction",
      desc: "",
      livedemo: "https://mehulkothari05.medium.com/",
      githurl: "https://github.com/mehulk05",
      mediumlink:
        "https://mehulkothari05.medium.com/movie-success-prediction-a67d871a7b1",
      imgUrl: "assets/images/z13.png",
      tech: "Python, Machine Learning, Django Framework.",
    },

    {
      id: 14,
      title: "Matrimonial Website",
      desc: "",
      livedemo: "https://mehulkothari05.medium.com/",
      githurl: "https://github.com/mehulk05/Matrimonial-Website.git",
      mediumlink:
        "https://mehulkothari05.medium.com/matrimonial-website-9cd5247f477d",
      imgUrl: "assets/images/z14.png",
      tech: "HTML, CSS, Bootstrap, Jquery",
    },
  ];
  about2 = `I am persuing Master in Computer Science at the University of Stuttgart. I am in my 4'th semster, 
  and looking for doing my Master Thesis in the area of Machine Learning.`;

  about =
    "";

  resumeurl =
    "";

  skillsData: any = [
    {
      id: "1",
      skill: "ANGULAR 2+",
      progress: "85%",
    },
    {
      id: "2",
      skill: "C# and .NET Technologies",
      progress: "80%",
    },
    {
      id: "3",
      skill: "JavaScript",
      progress: "80%",
    },
    {
      id: "4",
      skill: "SQL Server",
      progress: "75%",
    },
    {
      id: "5",
      skill: "Python",
      progress: "60%",
    },
    {
      id: "6",
      skill: "Swift, Dart",
      progress: "30%",
    },
  ];

  exprienceData: any = [
    {
      id: 2,
      company: "Golrang Systems",
      location: "Tehran, Iran",
      timeline: "Sep 2018 - Feb 2023",
      role: "Senior Software Engineer",
      work: `Technologies : Angular2+, DotNET Core and SQL Server .
      Design, develop and maintain large-scale, business-driven modules for EPR suite using Microsoft technologies including C#, DotNETCore, SQL, and the specific development environment based on application framework with Angular2+`,
    },

    {
      id: 1,
      company: "Varanegar Consulting Group",
      location: "Tehran, Iran",
      timeline: "July 2016 - Sep 2018",
      role: "Software Engineer",
      work: `Technologies : DevExpress, DotNET Core and SQL Server .
      Design, develop and maintain sales and distribution channel management software, using Microsoft Technologies including C#, DotNET Core, SQL, and DevExpress suite`,
    },
  ];

  skills(): Observable<any> {
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    return this.projects;
  }

  exprience(): Observable<any> {
    return this.exprienceData;
  }
}
