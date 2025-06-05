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
      title: "Snakemake reporter plugin",
      desc: "A reporter plugin for snakemake which could produce provenance according to Metadat4ing ontology.",
      githubUrl: "https://github.com/M-Jafarkhani/snakemake-report-plugin-metadata4ing",
      imgUrl: "assets/images/z1.png",
      tech: "Python",
      year: "2025",
    },
    {
      id: 2,
      title: "MetaExtractIng",
      desc: "CLI-based tool to extract important metadata from CSV, NetCDF, OpenDiHu and GROMACS files and storing it into a JSON-LD file, according to Metadata4Ing ontology.",
      githubUrl: "https://github.com/MaRDI4NFDI/MetaExtractIng",
      imgUrl: "assets/images/z1.png",
      tech: "Python",
      year: "2024-2025",
    },
    {
      id: 3,
      title: "Driver Activity Detection",
      desc: "Sliding-window approach to detect driver activity using Drvie&Act benchmark.",
      githubUrl: "https://github.com/M-Jafarkhani/DriveAndActInferenceDemo",
      imgUrl: "assets/images/z1.png",
      tech: "Python",
      year: "2024",
      reportUrl: "https://github.com/M-Jafarkhani/DriveAndActInferenceDemo/blob/main/docs/Report/Report.pdf",
    },
    {
      id: 4,
      title: "Calculator",
      desc: "A simple calculator written in Swift.",
      githubUrl: "https://github.com/M-Jafarkhani/Calculator",
      imgUrl: "assets/images/z1.png",
      tech: "Swift",
      year: "2019",
    },
    {
      id: 5,
      title: "Dynamic Slicing for Python",
      desc: "Simple dynamic slicing software for Python codes based on DynaPyt framework.",
      githubUrl: "https://github.com/M-Jafarkhani/Dynamic-Slicing",
      imgUrl: "assets/images/z1.png",
      tech: "Python",
      year: "2023",
    },
    {
      id: 6,
      title: "Multimodal Emotion Recognition",
      desc: "Emotion classification from multimodal data (image, audio and text) using different machine learning models.",
      githubUrl: "https://github.com/M-Jafarkhani/Multimodal-Emotion-Recognition",
      imgUrl: "assets/images/z1.png",
      tech: "Python, Tensorflow",
      year: "2024-2025",
      reportUrl: "https://github.com/M-Jafarkhani/Multimodal-Emotion-Recognition/blob/main/docs/Report/Report.pdf",
    },
    {
      id: 7,
      title: "ASL Transcriber",
      desc: "Hand detection using MediaPipe along with American Sign Language alphabet recognition.",
      githubUrl: "https://github.com/M-Jafarkhani/ASLTranscriber",
      imgUrl: "assets/images/z1.png",
      tech: "Python, Tensorflow",
      year: "2024",
      reportUrl: "https://github.com/M-Jafarkhani/ASLTranscriber/blob/main/Report.pdf",
    },
    {
      id: 8,
      title: "Puzzles",
      desc: "A collection of my solutions for InterviewBit puzzles.",
      githubUrl: "https://github.com/M-Jafarkhani/Puzzles",
      imgUrl: "assets/images/z1.png",
      tech: "Python, C#",
      year: "2021",
    },
    {
      id: 9,
      title: "OntologyToGraphDB",
      desc: "Converts an ontology file (OWL) based on DBPedia ontology to Neo4j Cypher scripts.",
      githubUrl: "https://github.com/M-Jafarkhani/OntologyToGraphDB",
      imgUrl: "assets/images/z1.png",
      tech: "Python",
      year: "2024",
    },
  ];

  about2 = `I am currently pursuing a Master's degree in Computer Science at the University of Stuttgart. I am seeking opportunities to conduct my Master's thesis in the field of Machine Learning. Additionally, I am open to internship or working student positions as a Software Engineer.`;

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
      id: 3,
      company: "University of Stuttgart",
      companyUrl: "https://www.uni-stuttgart.de//",
      location: "Stuttgart, Germany",
      timeline: "May 2024 - Present",
      role: "Reaserch Assistant",
      work: `Technologies : Python .
      Extracting metadata from simulation softwares output and aligning them with Metadata4ing ontology.`,
    },
    {
      id: 2,
      company: "Golrang Systems",
      companyUrl: "https://golrangsystem.com/",
      location: "Tehran, Iran",
      timeline: "Sep 2018 - Feb 2023",
      role: "Senior Software Engineer",
      work: `Technologies : Angular2+, DotNET Core and SQL Server .
      Design, develop and maintain large-scale, business-driven modules for EPR suite using Microsoft technologies including C#, DotNETCore, SQL, and the specific development environment based on application framework with Angular2+`,
    },
    {
      id: 1,
      company: "Varanegar Consulting Group",
      companyUrl: "https://www.varanegar.com/",
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
