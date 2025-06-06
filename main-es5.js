(function () {
  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/mahdi/Documents/GitHub/m-jafarkhani.github.io/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "2Cm4":
    /*!**********************************************************!*\
      !*** ./src/app/profile/education/education.component.ts ***!
      \**********************************************************/

    /*! exports provided: EducationComponent */

    /***/
    function Cm4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EducationComponent", function () {
        return EducationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var EducationComponent = /*#__PURE__*/function () {
        function EducationComponent() {
          _classCallCheck(this, EducationComponent);
        }

        return _createClass(EducationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
      }();

      EducationComponent.ɵfac = function EducationComponent_Factory(t) {
        return new (t || EducationComponent)();
      };

      EducationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EducationComponent,
        selectors: [["app-education"]],
        decls: 52,
        vars: 0,
        consts: [["id", "education", 1, "section"], [1, "container", "cc-education"], [1, "h4", "text-center", "mb-4", "title"], [1, "card"], [1, "row"], ["data-aos", "fade-right", "data-aos-offset", "50", "data-aos-duration", "500", 1, "col-md-3", "bg-primary"], [1, "card-body", "cc-education-header", "stuttgart"], [1, "h5"], ["data-aos", "fade-left", "data-aos-offset", "50", "data-aos-duration", "500", 1, "col-md-9"], [1, "card-body"], [1, "category"], [1, "card-body", "cc-education-header", "aut"]],
        template: function EducationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Education");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "April 2023 - Present");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Master's Degree");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "M.Sc. in Computer Science");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "University of Stuttgart, Germany");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "GPA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, ": 2.1 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Study Profile:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Autonomous Systems in Computer Science ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Sep 2008 - Jan 2014");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Bachelor's Degree");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "BSc. in Software Engineering");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h4", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Tehran Polytechnic, Iran");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "GPA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, ": 15.39 out of 20 (Final two years: 16.43 out of 20) ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Bachelor\u2019s Thesis");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, ": ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\u201CUsing Aspect-Oriented Software Development to Improve the Quality Attributes of Web-based Systems\u201D");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["h4[_ngcontent-%COMP%] {\n  color: #4a4843;\n  font-size: 20px;\n  margin-bottom: 10px;\n  margin-top: 2px;\n}\n\n.aut[_ngcontent-%COMP%]::before {\n  background-image: url(\"/assets/images/aut.jpeg\");\n  content: \"\";\n  background-size: cover;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  opacity: 0.3;\n}\n\n.stuttgart[_ngcontent-%COMP%]::before {\n  background-image: url(\"/assets/images/stuttgart.jpg\");\n  content: \"\";\n  background-size: cover;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  opacity: 0.3;\n}\n\n.uot[_ngcontent-%COMP%]::before {\n  background-image: url(\"https://www.uni-stuttgart.de/system/modules/de.stuttgart.uni.v3.basics/resources/img/svg/logo-start-en.svg\");\n  content: \"\";\n  background-size: cover;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  opacity: 0.25;\n}\n\n.cc-education-title[_ngcontent-%COMP%] {\n  position: relative;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VkdWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnREFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUFFRjs7QUFBQTtFQUNFLHFEQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQUdGOztBQURBO0VBQ0UsbUlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FBSUY7O0FBRkE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUFLRiIsImZpbGUiOiJlZHVjYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNCB7XG4gIGNvbG9yOiAjNGE0ODQzO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cbi5hdXQ6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2F1dC5qcGVnXCIpO1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICByaWdodDogMHB4O1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICBvcGFjaXR5OiAwLjM7XG59XG4uc3R1dHRnYXJ0OjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9zdHV0dGdhcnQuanBnXCIpO1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICByaWdodDogMHB4O1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICBvcGFjaXR5OiAwLjM7XG59XG4udW90OjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3d3dy51bmktc3R1dHRnYXJ0LmRlL3N5c3RlbS9tb2R1bGVzL2RlLnN0dXR0Z2FydC51bmkudjMuYmFzaWNzL3Jlc291cmNlcy9pbWcvc3ZnL2xvZ28tc3RhcnQtZW4uc3ZnXCIpO1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICByaWdodDogMHB4O1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICBvcGFjaXR5OiAwLjI1O1xufVxuLmNjLWVkdWNhdGlvbi10aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cblxuIl19 */"]
      });
      /***/
    },

    /***/
    "4Ljr":
    /*!****************************************************!*\
      !*** ./src/app/profile/footer/footer.component.ts ***!
      \****************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function Ljr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        return _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 6,
        vars: 0,
        consts: [[1, "footer"], [1, "container", "text-center"], ["href", "https://www.linkedin.com/in/mahdi-jafarkhani-09748291/", "target", "_blank", 1, "cc-linkedin", "btn", "btn-link"], ["aria-hidden", "true", 1, "fa", "fa-linkedin", "fa-2x"], ["href", "https://github.com/m-jafarkhani", "target", "_blank", 1, "cc-github", "btn", "btn-link"], ["aria-hidden", "true", 1, "fa", "fa-github", "fa-2x"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "4Xmu":
    /*!********************************************!*\
      !*** ./src/app/profile/profile.service.ts ***!
      \********************************************/

    /*! exports provided: ProfileService */

    /***/
    function Xmu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileService", function () {
        return ProfileService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ProfileService = /*#__PURE__*/function () {
        function ProfileService(http) {
          _classCallCheck(this, ProfileService);

          this.http = http;
          this.projects = [{
            id: 1,
            title: "Snakemake reporter plugin",
            desc: "A reporter plugin for snakemake which could produce provenance according to Metadat4ing ontology.",
            githubUrl: "https://github.com/M-Jafarkhani/snakemake-report-plugin-metadata4ing",
            imgUrl: "assets/images/z1.png",
            tech: "Python",
            year: "2025"
          }, {
            id: 2,
            title: "MetaExtractIng",
            desc: "CLI-based tool to extract important metadata from CSV, NetCDF, OpenDiHu and GROMACS files and storing it into a JSON-LD file.",
            githubUrl: "https://github.com/MaRDI4NFDI/MetaExtractIng",
            imgUrl: "assets/images/z1.png",
            tech: "Python",
            year: "2024-2025"
          }, {
            id: 3,
            title: "Driver Activity Detection",
            desc: "Sliding-window approach to detect driver activity using DrvieAndAct benchmark.",
            githubUrl: "https://github.com/M-Jafarkhani/DriveAndActInferenceDemo",
            imgUrl: "assets/images/z1.png",
            tech: "Python",
            year: "2024",
            reportUrl: "https://github.com/M-Jafarkhani/DriveAndActInferenceDemo/blob/main/docs/Report/Report.pdf"
          }, {
            id: 4,
            title: "Calculator",
            desc: "A simple calculator written in Swift.",
            githubUrl: "https://github.com/M-Jafarkhani/Calculator",
            imgUrl: "assets/images/z1.png",
            tech: "Swift",
            year: "2019"
          }, {
            id: 5,
            title: "Dynamic Slicing for Python",
            desc: "Simple dynamic slicing software for Python codes based on DynaPyt framework.",
            githubUrl: "https://github.com/M-Jafarkhani/Dynamic-Slicing",
            imgUrl: "assets/images/z1.png",
            tech: "Python",
            year: "2024",
            reportUrl: "https://github.com/M-Jafarkhani/Dynamic-Slicing/blob/main/Report.pdf"
          }, {
            id: 6,
            title: "Multimodal Emotion Recognition",
            desc: "Recognition of emotion from multimodal data (like image, audio and text) using different machine learning models.",
            githubUrl: "https://github.com/M-Jafarkhani/Multimodal-Emotion-Recognition",
            imgUrl: "assets/images/z1.png",
            tech: "Python, Tensorflow",
            year: "2024-2025",
            reportUrl: "https://github.com/M-Jafarkhani/Multimodal-Emotion-Recognition/blob/main/docs/Report/Report.pdf"
          }, {
            id: 7,
            title: "ASL Transcriber",
            desc: "Hand detection using MediaPipe along with American Sign Language alphabet recognition.",
            githubUrl: "https://github.com/M-Jafarkhani/ASLTranscriber",
            imgUrl: "assets/images/z1.png",
            tech: "Python, Tensorflow",
            year: "2024",
            reportUrl: "https://github.com/M-Jafarkhani/ASLTranscriber/blob/main/Report.pdf"
          }, {
            id: 8,
            title: "Puzzles",
            desc: "A collection of my solutions for InterviewBit puzzles.",
            githubUrl: "https://github.com/M-Jafarkhani/Puzzles",
            imgUrl: "assets/images/z1.png",
            tech: "Python, C#",
            year: "2021"
          }, {
            id: 9,
            title: "OntologyToGraphDB",
            desc: "Converts an ontology file (OWL) based on DBPedia ontology to Neo4j Cypher scripts.",
            githubUrl: "https://github.com/M-Jafarkhani/OntologyToGraphDB",
            imgUrl: "assets/images/z1.png",
            tech: "Python",
            year: "2024"
          }];
          this.about2 = "I am currently pursuing a Master's degree in Computer Science at the University of Stuttgart. I am seeking opportunities to conduct my Master's thesis in the field of Machine Learning. Additionally, I am open to internship or working student positions as a Software Engineer.";
          this.about = "";
          this.resumeurl = "";
          this.skillsData = [{
            id: "1",
            skill: "ANGULAR 2+",
            progress: "85%"
          }, {
            id: "2",
            skill: "C# and .NET Technologies",
            progress: "80%"
          }, {
            id: "3",
            skill: "JavaScript",
            progress: "80%"
          }, {
            id: "4",
            skill: "SQL Server",
            progress: "75%"
          }, {
            id: "5",
            skill: "Python",
            progress: "60%"
          }, {
            id: "6",
            skill: "Swift, Dart",
            progress: "30%"
          }];
          this.exprienceData = [{
            id: 3,
            company: "University of Stuttgart",
            companyUrl: "https://www.uni-stuttgart.de//",
            location: "Stuttgart, Germany",
            timeline: "May 2024 - Present",
            role: "Reaserch Assistant",
            work: "Technologies : Python .\n      Extracting metadata from simulation softwares output and aligning them with Metadata4ing ontology."
          }, {
            id: 2,
            company: "Golrang Systems",
            companyUrl: "https://golrangsystem.com/",
            location: "Tehran, Iran",
            timeline: "Sep 2018 - Feb 2023",
            role: "Senior Software Engineer",
            work: "Technologies : Angular2+, DotNET Core and SQL Server .\n      Design, develop and maintain large-scale, business-driven modules for EPR suite using Microsoft technologies including C#, DotNETCore, SQL, and the specific development environment based on application framework with Angular2+"
          }, {
            id: 1,
            company: "Varanegar Consulting Group",
            companyUrl: "https://www.varanegar.com/",
            location: "Tehran, Iran",
            timeline: "July 2016 - Sep 2018",
            role: "Software Engineer",
            work: "Technologies : DevExpress, DotNET Core and SQL Server .\n      Design, develop and maintain sales and distribution channel management software, using Microsoft Technologies including C#, DotNET Core, SQL, and DevExpress suite"
          }];
        }

        return _createClass(ProfileService, [{
          key: "skills",
          value: function skills() {
            return this.skillsData;
          }
        }, {
          key: "getProjects",
          value: function getProjects() {
            return this.projects;
          }
        }, {
          key: "exprience",
          value: function exprience() {
            return this.exprienceData;
          }
        }]);
      }();

      ProfileService.ɵfac = function ProfileService_Factory(t) {
        return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      ProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ProfileService,
        factory: ProfileService.ɵfac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    "9Cjm":
    /*!**************************************************!*\
      !*** ./src/app/profile/about/about.component.ts ***!
      \**************************************************/

    /*! exports provided: AboutComponent */

    /***/
    function Cjm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
        return AboutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../profile.service */
      "4Xmu");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _split_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../split.pipe */
      "KnJY");

      function AboutComponent_li_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var m_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r1);
        }
      }

      var AboutComponent = /*#__PURE__*/function () {
        function AboutComponent(profileService) {
          _classCallCheck(this, AboutComponent);

          this.profileService = profileService;
        }

        return _createClass(AboutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.about1 = this.profileService.about;
            this.about2 = this.profileService.about2;
          }
        }]);
      }();

      AboutComponent.ɵfac = function AboutComponent_Factory(t) {
        return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]));
      };

      AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AboutComponent,
        selectors: [["app-about"]],
        decls: 55,
        vars: 4,
        consts: [["id", "about", 1, "section"], [1, "container"], ["data-aos", "fade-up", "data-aos-offset", "10", 1, "card"], [1, "row"], [1, "col-lg-6", "col-md-12"], [1, "card-body"], [1, "h4", "mt-0", "title"], [2, "text-align", "justify"], [4, "ngFor", "ngForOf"], [1, "col-sm-4"], [1, "text-uppercase"], [1, "col-sm-8"], [1, "row", "mt-3"], ["href", "mailto:mahdi.jafarkhani@gmail.com"]],
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "About");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AboutComponent_li_10_Template, 2, 1, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "split");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Personal Information");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Date of Birth:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "October 01, 1988");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "strong", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Email:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "mahdi.jafarkhani@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "strong", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Phone:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "+49 155 1089 1559");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "strong", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Address:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Pfaffenwaldring 48C-103, Stuttgart 70569 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "strong", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Location:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Stuttgart, Germany ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "strong", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Languages:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Farsi, English, Deutsch (A2)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 2, ctx.about2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.about1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        pipes: [_split_pipe__WEBPACK_IMPORTED_MODULE_3__["SplitPipe"]],
        styles: [".row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 700px;\n  color: black;\n}\n\n.card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n\nli[_ngcontent-%COMP%] {\n  padding-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtBQUVGOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cgcCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDBweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmNhcmQtYm9keSB1bCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxubGkge1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "AjeU":
    /*!****************************************************!*\
      !*** ./src/app/profile/skills/skills.component.ts ***!
      \****************************************************/

    /*! exports provided: SkillsComponent */

    /***/
    function AjeU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SkillsComponent", function () {
        return SkillsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../profile.service */
      "4Xmu");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function SkillsComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var skill_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r1.skill);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("width: ", skill_r1.progress, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r1.progress);
        }
      }

      var SkillsComponent = /*#__PURE__*/function () {
        function SkillsComponent(profileService) {
          _classCallCheck(this, SkillsComponent);

          this.profileService = profileService;
        }

        return _createClass(SkillsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.skills = this.profileService.skills();
          }
        }]);
      }();

      SkillsComponent.ɵfac = function SkillsComponent_Factory(t) {
        return new (t || SkillsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]));
      };

      SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SkillsComponent,
        selectors: [["app-skills"]],
        decls: 8,
        vars: 1,
        consts: [["id", "skill", 1, "section"], [1, "container"], [1, "h4", "text-center", "mb-4", "title"], ["data-aos", "fade-up", "data-aos-anchor-placement", "top-bottom", 1, "card"], [1, "card-body"], [1, "row"], ["class", "col-md-6", 4, "ngFor", "ngForOf"], [1, "col-md-6"], [1, "progress-container", "progress-primary"], [1, "progress-badge"], [1, "progress"], ["data-aos", "progress-full", "data-aos-offset", "10", "data-aos-duration", "2000", "role", "progressbar", "aria-valuenow", "60", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-primary"], [1, "progress-value"]],
        template: function SkillsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Skills");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SkillsComponent_div_7_Template, 8, 5, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJza2lsbHMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "KnJY":
    /*!***************************************!*\
      !*** ./src/app/profile/split.pipe.ts ***!
      \***************************************/

    /*! exports provided: SplitPipe */

    /***/
    function KnJY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SplitPipe", function () {
        return SplitPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SplitPipe = /*#__PURE__*/function () {
        function SplitPipe() {
          _classCallCheck(this, SplitPipe);
        }

        return _createClass(SplitPipe, [{
          key: "transform",
          value: function transform(value) {
            if (!value) {
              return;
            }

            return value.split(" .");
          }
        }]);
      }();

      SplitPipe.ɵfac = function SplitPipe_Factory(t) {
        return new (t || SplitPipe)();
      };

      SplitPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "split",
        type: SplitPipe,
        pure: true
      });
      /***/
    },

    /***/
    "RaFs":
    /*!************************************************************!*\
      !*** ./src/app/profile/experience/experience.component.ts ***!
      \************************************************************/

    /*! exports provided: ExperienceComponent */

    /***/
    function RaFs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function () {
        return ExperienceComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../profile.service */
      "4Xmu");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _split_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../split.pipe */
      "KnJY");

      function ExperienceComponent_article_8_li_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var work_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](work_r3);
        }
      }

      function ExperienceComponent_article_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ExperienceComponent_article_8_li_13_Template, 2, 1, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "split");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var exp_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", exp_r1.companyUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", exp_r1.company, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("- \xA0", exp_r1.timeline, ", ", exp_r1.location, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](exp_r1.role);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 6, exp_r1.work));
        }
      }

      var ExperienceComponent = /*#__PURE__*/function () {
        function ExperienceComponent(profileService) {
          _classCallCheck(this, ExperienceComponent);

          this.profileService = profileService;
        }

        return _createClass(ExperienceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.workexp = this.profileService.exprience();
          }
        }]);
      }();

      ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) {
        return new (t || ExperienceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]));
      };

      ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ExperienceComponent,
        selectors: [["app-experience"]],
        decls: 9,
        vars: 1,
        consts: [["id", "experience", 1, "section"], [1, "container", "cc-education"], [1, "h4", "text-center", "mb-4", "title"], [1, "colorlib-narrow-content"], [1, "row"], [1, "col-md-12"], [1, "timeline-centered"], ["class", "timeline-entry animate-box", "data-animate-effect", "fadeInLeft", 4, "ngFor", "ngForOf"], ["data-animate-effect", "fadeInLeft", 1, "timeline-entry", "animate-box"], [1, "timeline-entry-inner"], ["data-aos", "fade-right", "data-aos-offset", "50", "data-aos-duration", "500", 1, "timeline-icon", "color-2"], [1, "icon-pen2"], ["data-aos", "fade-left", "data-aos-offset", "50", "data-aos-duration", "500", 1, "timeline-label"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], [4, "ngFor", "ngForOf"]],
        template: function ExperienceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Work Experience");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExperienceComponent_article_8_Template, 15, 8, "article", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.workexp);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        pipes: [_split_pipe__WEBPACK_IMPORTED_MODULE_3__["SplitPipe"]],
        styles: ["li[_ngcontent-%COMP%] {\n  padding-top: 5px;\n}\n\n.colorlib-experience[_ngcontent-%COMP%] {\n  padding-top: 4em;\n  padding-bottom: 9em;\n  clear: both;\n  width: 100%;\n  display: block;\n}\n\n@media screen and (max-width: 768px) {\n  .colorlib-experience[_ngcontent-%COMP%] {\n    padding-top: 5em;\n    padding-bottom: 8em;\n  }\n}\n\n.timeline-centered[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 30px;\n}\n\n.timeline-centered[_ngcontent-%COMP%]:before, .timeline-centered[_ngcontent-%COMP%]:after {\n  content: \" \";\n  display: table;\n}\n\n.timeline-centered[_ngcontent-%COMP%]:after {\n  clear: both;\n}\n\n.timeline-centered[_ngcontent-%COMP%]:before, .timeline-centered[_ngcontent-%COMP%]:after {\n  content: \" \";\n  display: table;\n}\n\n.timeline-centered[_ngcontent-%COMP%]:after {\n  clear: both;\n}\n\n.timeline-centered[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  width: 4px;\n  background: #f2f3f7;\n  top: 20px;\n  bottom: 20px;\n  margin-left: 29px;\n}\n\n.timeline-centered[_ngcontent-%COMP%]   .timeline-entry[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 5px;\n  margin-left: 30px;\n  margin-bottom: 10px;\n  clear: both;\n}\n\n.timeline-centered[_ngcontent-%COMP%]   .timeline-entry[_ngcontent-%COMP%]   .timeline-entry-inner[_ngcontent-%COMP%] {\n  position: relative;\n  margin-left: -20px;\n}\n\n.timeline-centered[_ngcontent-%COMP%]   .timeline-entry[_ngcontent-%COMP%]   .timeline-entry-inner[_ngcontent-%COMP%]   .timeline-icon[_ngcontent-%COMP%] {\n  display: block;\n  width: 40px;\n  height: 40px;\n  background: #2c98f0;\n  border-radius: 50%;\n  text-align: center;\n  box-shadow: 0 0 0 5px #f2f3f7;\n  line-height: 40px;\n  float: left;\n}\n\n.timeline-centered[_ngcontent-%COMP%]   .timeline-entry[_ngcontent-%COMP%]   .timeline-entry-inner[_ngcontent-%COMP%]   .timeline-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.timeline-centered[_ngcontent-%COMP%]   .timeline-entry[_ngcontent-%COMP%]   .timeline-entry-inner[_ngcontent-%COMP%]   .timeline-icon.color-2[_ngcontent-%COMP%] {\n  background: #ec5453;\n}\n\n.timeline-centered[_ngcontent-%COMP%]   .timeline-entry[_ngcontent-%COMP%]   .timeline-entry-inner[_ngcontent-%COMP%]   .timeline-icon.color-3[_ngcontent-%COMP%] {\n  background: #f9bf3f;\n}\n\n.timeline-centered[_ngcontent-%COMP%]   .timeline-entry[_ngcontent-%COMP%]   .timeline-entry-inner[_ngcontent-%COMP%]   .timeline-icon.color-4[_ngcontent-%COMP%] {\n  background: #a84cb8;\n}\n\n.timeline-centered[_ngcontent-%COMP%]   .timeline-entry[_ngcontent-%COMP%]   .timeline-entry-inner[_ngcontent-%COMP%]   .timeline-icon.color-5[_ngcontent-%COMP%] {\n  background: #2fa499;\n}\n\n.timeline-centered[_ngcontent-%COMP%]   .timeline-entry[_ngcontent-%COMP%]   .timeline-entry-inner[_ngcontent-%COMP%]   .timeline-icon.color-none[_ngcontent-%COMP%] {\n  background: #fff;\n  width: 20px;\n  height: 20px;\n  margin-left: 10px;\n}\n\n.timeline-centered[_ngcontent-%COMP%]   .timeline-entry[_ngcontent-%COMP%]   .timeline-entry-inner[_ngcontent-%COMP%]   .timeline-label[_ngcontent-%COMP%] {\n  position: relative;\n  background: #f2f3f7;\n  padding: 1.5em;\n  margin-left: 60px;\n  -webkit-background-clip: padding-box;\n  -moz-background-clip: padding;\n  background-clip: padding-box;\n}\n\n.timeline-centered[_ngcontent-%COMP%]   .timeline-entry[_ngcontent-%COMP%]   .timeline-entry-inner[_ngcontent-%COMP%]   .timeline-label[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 9px 9px 9px 0;\n  border-color: transparent #f2f3f7 transparent transparent;\n  left: 0;\n  top: 10px;\n  margin-left: -9px;\n}\n\n.timeline-centered[_ngcontent-%COMP%]   .timeline-entry[_ngcontent-%COMP%]   .timeline-entry-inner[_ngcontent-%COMP%]   .timeline-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]    + p[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.timeline-centered[_ngcontent-%COMP%]   .timeline-entry[_ngcontent-%COMP%]   .timeline-entry-inner[_ngcontent-%COMP%]   .timeline-label[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-family: \"Quicksand\", Arial, sans-serif;\n  font-weight: 500;\n}\n\n.timeline-centered[_ngcontent-%COMP%]   .timeline-entry[_ngcontent-%COMP%]   .timeline-entry-inner[_ngcontent-%COMP%]   .timeline-label[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.timeline-centered[_ngcontent-%COMP%]   .timeline-entry[_ngcontent-%COMP%]   .timeline-entry-inner[_ngcontent-%COMP%]   .timeline-label[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  -webkit-opacity: 5;\n  -moz-opacity: 0.5;\n  opacity: 0.5;\n  -ms-filter: alpha(opacity=40);\n  filter: alpha(opacity=40);\n  font-size: 16px;\n}\n\n.timeline-label[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: -15px;\n  font-family: \"Quicksand\", Arial, sans-serif;\n  color: #545755;\n  font-weight: 600;\n  font-size: 17px;\n}\n\n.timeline-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-left: 1em;\n  color: #000;\n  font-weight: 600;\n}\n\n.timeline-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.timeline-label[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n  font-family: \"Quicksand\", Arial, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2V4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLG1CQUFBO0VBRUY7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxZQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBOztFQUVFLFlBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBSUEsa0JBQUE7RUFDQSxrQkFBQTtFQUdBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxXQUFBO0FBRUY7O0FBQUE7RUFJRSxtQkFBQTtBQUFGOztBQUVBO0VBSUUsbUJBQUE7QUFGRjs7QUFJQTtFQUlFLG1CQUFBO0FBSkY7O0FBTUE7RUFJRSxtQkFBQTtBQU5GOztBQVFBO0VBSUUsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBUkY7O0FBV0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0FBUkY7O0FBV0E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EseURBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FBUkY7O0FBV0E7RUFDRSxnQkFBQTtBQVJGOztBQVdBO0VBQ0UsZUFBQTtFQUNBLDJDQUFBO0VBQ0EsZ0JBQUE7QUFSRjs7QUFXQTtFQUNFLFdBQUE7QUFSRjs7QUFXQTtFQU1FLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFiRjs7QUFnQkE7RUFDRSxpQkFBQTtFQUNBLDJDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQWJGOztBQWVBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFaRjs7QUFlQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQVpGOztBQWNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7QUFYRiIsImZpbGUiOiJleHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGkge1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuLmNvbG9ybGliLWV4cGVyaWVuY2Uge1xuICBwYWRkaW5nLXRvcDogNGVtO1xuICBwYWRkaW5nLWJvdHRvbTogOWVtO1xuXG4gIGNsZWFyOiBib3RoO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY29sb3JsaWItZXhwZXJpZW5jZSB7XG4gICAgcGFkZGluZy10b3A6IDVlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogOGVtO1xuICB9XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkOmJlZm9yZSxcbi50aW1lbGluZS1jZW50ZXJlZDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkOmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZDpiZWZvcmUsXG4udGltZWxpbmUtY2VudGVyZWQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZDphZnRlciB7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDRweDtcbiAgYmFja2dyb3VuZDogI2YyZjNmNztcbiAgdG9wOiAyMHB4O1xuICBib3R0b206IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyOXB4O1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjbGVhcjogYm90aDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZDogIzJjOThmMDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICAtbXMtYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDAgMCA1cHggI2YyZjNmNztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCA1cHggI2YyZjNmNztcbiAgYm94LXNoYWRvdzogMCAwIDAgNXB4ICNmMmYzZjc7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBmbG9hdDogbGVmdDtcbn1cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1pY29uIGkge1xuICBjb2xvcjogI2ZmZjtcbn1cbi50aW1lbGluZS1jZW50ZXJlZFxuICAudGltZWxpbmUtZW50cnlcbiAgLnRpbWVsaW5lLWVudHJ5LWlubmVyXG4gIC50aW1lbGluZS1pY29uLmNvbG9yLTIge1xuICBiYWNrZ3JvdW5kOiAjZWM1NDUzO1xufVxuLnRpbWVsaW5lLWNlbnRlcmVkXG4gIC50aW1lbGluZS1lbnRyeVxuICAudGltZWxpbmUtZW50cnktaW5uZXJcbiAgLnRpbWVsaW5lLWljb24uY29sb3ItMyB7XG4gIGJhY2tncm91bmQ6ICNmOWJmM2Y7XG59XG4udGltZWxpbmUtY2VudGVyZWRcbiAgLnRpbWVsaW5lLWVudHJ5XG4gIC50aW1lbGluZS1lbnRyeS1pbm5lclxuICAudGltZWxpbmUtaWNvbi5jb2xvci00IHtcbiAgYmFja2dyb3VuZDogI2E4NGNiODtcbn1cbi50aW1lbGluZS1jZW50ZXJlZFxuICAudGltZWxpbmUtZW50cnlcbiAgLnRpbWVsaW5lLWVudHJ5LWlubmVyXG4gIC50aW1lbGluZS1pY29uLmNvbG9yLTUge1xuICBiYWNrZ3JvdW5kOiAjMmZhNDk5O1xufVxuLnRpbWVsaW5lLWNlbnRlcmVkXG4gIC50aW1lbGluZS1lbnRyeVxuICAudGltZWxpbmUtZW50cnktaW5uZXJcbiAgLnRpbWVsaW5lLWljb24uY29sb3Itbm9uZSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNmMmYzZjc7XG4gIHBhZGRpbmc6IDEuNWVtO1xuICBtYXJnaW4tbGVmdDogNjBweDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiA5cHggOXB4IDlweCAwO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNmMmYzZjcgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IC05cHg7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1sYWJlbCBwICsgcCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1sYWJlbCBoMiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtbGFiZWwgaDIgYSB7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWRcbiAgLnRpbWVsaW5lLWVudHJ5XG4gIC50aW1lbGluZS1lbnRyeS1pbm5lclxuICAudGltZWxpbmUtbGFiZWxcbiAgaDJcbiAgc3BhbiB7XG4gIC13ZWJraXQtb3BhY2l0eTogNTtcbiAgLW1vei1vcGFjaXR5OiAwLjU7XG4gIG9wYWNpdHk6IDAuNTtcbiAgLW1zLWZpbHRlcjogYWxwaGEob3BhY2l0eT00MCk7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT00MCk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnRpbWVsaW5lLWxhYmVsIGg0IHtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM1NDU3NTU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cbi50aW1lbGluZS1sYWJlbCBzcGFuIHtcbiAgcGFkZGluZy1sZWZ0OiAxZW07XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4udGltZWxpbmUtbGFiZWwgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi50aW1lbGluZS1sYWJlbCB1bCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "S3Mj":
    /*!**************************************************!*\
      !*** ./src/app/profile/intro/intro.component.ts ***!
      \**************************************************/

    /*! exports provided: IntroComponent */

    /***/
    function S3Mj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IntroComponent", function () {
        return IntroComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../profile.service */
      "4Xmu");

      var IntroComponent = /*#__PURE__*/function () {
        function IntroComponent(profileService) {
          _classCallCheck(this, IntroComponent);

          this.profileService = profileService;
        }

        return _createClass(IntroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.cvUrl = this.profileService.resumeurl;
          }
        }]);
      }();

      IntroComponent.ɵfac = function IntroComponent_Factory(t) {
        return new (t || IntroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]));
      };

      IntroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: IntroComponent,
        selectors: [["app-intro"]],
        decls: 20,
        vars: 0,
        consts: [[1, "profile-page"], [1, "wrapper"], ["filter-color", "green", 1, "page-header", "page-header-small"], ["data-parallax", "true", 1, "page-header-image", 2, "background-image", "url('assets/images/background.jpg')"], [1, "container"], [1, "content-center"], [1, "cc-profile-image"], ["href", "#"], ["src", "assets/images/Profile.jpg", "alt", "Image"], [1, "h2", "title"], [1, "category", "text-white"], [1, "section"], [1, "button-container"], ["href", "https://www.linkedin.com/in/mahdi-jafarkhani-09748291/", "target", "_blank", "rel", "tooltip", "title", "Linkedin", 1, "btn", "btn-default", "btn-round", "btn-lg", "btn-icon"], [1, "fa", "fa-linkedin"], ["href", "https://github.com/m-jafarkhani", "target", "_blank", "rel", "tooltip", "title", "Github", 1, "btn", "btn-default", "btn-round", "btn-lg", "btn-icon"], [1, "fa", "fa-github"]],
        template: function IntroComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Mahdi Jafarkhani");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Software Engineer | Machine Learning Enthusiast");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnRyby5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
        _classCallCheck(this, AppComponent);
      });

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "TnGC":
    /*!**********************************************************!*\
      !*** ./src/app/profile/portfolio/portfolio.component.ts ***!
      \**********************************************************/

    /*! exports provided: PortfolioComponent */

    /***/
    function TnGC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function () {
        return PortfolioComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PortfolioComponent = /*#__PURE__*/function () {
        function PortfolioComponent() {
          _classCallCheck(this, PortfolioComponent);
        }

        return _createClass(PortfolioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
      }();

      PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) {
        return new (t || PortfolioComponent)();
      };

      PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PortfolioComponent,
        selectors: [["app-portfolio"]],
        decls: 35,
        vars: 0,
        consts: [["id", "portfolio", 1, "section"], [1, "container"], [1, "row"], [1, "col-md-6", "ml-auto", "mr-auto"], [1, "h4", "text-center", "mb-4", "title"], [1, "nav-align-center"], ["role", "tablist", 1, "nav", "nav-pills", "nav-pills-primary"], [1, "nav-item"], ["data-toggle", "tab", "href", "#web-development", "role", "tablist", 1, "nav-link", "active"], ["aria-hidden", "true", 1, "fa", "fa-laptop"], [1, "tab-content", "gallery", "mt-5"], ["id", "web-development", 1, "tab-pane", "active"], [1, "ml-auto", "mr-auto"], [1, "col-md-6"], ["data-aos", "fade-up", "data-aos-anchor-placement", "top-bottom", 1, "cc-porfolio-image", "img-raised"], ["href", "https://personal-portfolio0320.000webhostapp.com/"], [1, "cc-effect"], ["src", "assets/images/portfolio1.PNG", "alt", "Image"], [1, "h4"], ["href", "http://msgc320.pythonanywhere.com/"], ["src", "assets/images/portfolio2.PNG", "alt", "Image"]],
        template: function PortfolioComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Portfolio");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "figure", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "figcaption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Made Using Angular8");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Web Development");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "figure", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "figcaption");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Made Using Django");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Web Development");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3J0Zm9saW8uY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "W6KJ":
    /*!**********************************************!*\
      !*** ./src/app/profile/profile.component.ts ***!
      \**********************************************/

    /*! exports provided: ProfileComponent */

    /***/
    function W6KJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
        return ProfileComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./header/header.component */
      "lwDr");
      /* harmony import */


      var _intro_intro_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./intro/intro.component */
      "S3Mj");
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./about/about.component */
      "9Cjm");
      /* harmony import */


      var _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./experience/experience.component */
      "RaFs");
      /* harmony import */


      var _skills_skills_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./skills/skills.component */
      "AjeU");
      /* harmony import */


      var _education_education_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./education/education.component */
      "2Cm4");
      /* harmony import */


      var _reference_reference_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./reference/reference.component */
      "erBS");
      /* harmony import */


      var _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./projects/projects.component */
      "a37j");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./footer/footer.component */
      "4Ljr");

      var ProfileComponent = /*#__PURE__*/function () {
        function ProfileComponent() {
          _classCallCheck(this, ProfileComponent);
        }

        return _createClass(ProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
      }();

      ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
        return new (t || ProfileComponent)();
      };

      ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProfileComponent,
        selectors: [["app-profile"]],
        decls: 10,
        vars: 0,
        consts: [[1, "page-content"]],
        template: function ProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-intro");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-about");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-experience");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-skills");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-education");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-reference");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-footer");
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _intro_intro_component__WEBPACK_IMPORTED_MODULE_2__["IntroComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"], _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__["ExperienceComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_5__["SkillsComponent"], _education_education_component__WEBPACK_IMPORTED_MODULE_6__["EducationComponent"], _reference_reference_component__WEBPACK_IMPORTED_MODULE_7__["ReferenceComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile/profile.component */
      "W6KJ");
      /* harmony import */


      var _profile_profile_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./profile/profile.module */
      "cRhG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"]
      }];

      var AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({
          appId: "serverApp"
        }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          initialNavigation: "enabled"
        }), _profile_profile_module__WEBPACK_IMPORTED_MODULE_4__["ProfileModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _profile_profile_module__WEBPACK_IMPORTED_MODULE_4__["ProfileModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]]
        });
      })();
      /***/

    },

    /***/
    "a37j":
    /*!********************************************************!*\
      !*** ./src/app/profile/projects/projects.component.ts ***!
      \********************************************************/

    /*! exports provided: ProjectsComponent */

    /***/
    function a37j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
        return ProjectsComponent;
      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../profile.service */
      "4Xmu");
      /* harmony import */


      var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-pagination */
      "oOf3");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ProjectsComponent_ng_container_6_a_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Report");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", project_r1.reportUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function ProjectsComponent_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Technology :");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Year :");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h5", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Description :");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Github Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ProjectsComponent_ng_container_6_a_23_Template, 2, 1, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var project_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", project_r1.tech, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", project_r1.year, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r1.desc);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", project_r1.githubUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", project_r1.reportUrl);
        }
      }

      var ProjectsComponent = /*#__PURE__*/function () {
        function ProjectsComponent(profileService) {
          _classCallCheck(this, ProjectsComponent);

          this.profileService = profileService;
          this.projects = [];
          this.animationState = '';
        }

        return _createClass(ProjectsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.projects = this.profileService.getProjects();
            this.animationState = 'left';
            this.config = {
              itemsPerPage: 6,
              currentPage: 1,
              totalItems: this.projects.length
            };
          }
        }, {
          key: "pageChanged",
          value: function pageChanged(event) {
            var _this = this;

            var oldPage = this.config.currentPage;
            this.config.currentPage = event;

            if (event > oldPage) {
              this.animationState = 'right';
            } else {
              this.animationState = 'left';
            }

            setTimeout(function () {
              _this.animationState = '';
            }, 500);
          }
        }]);
      }();

      ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
        return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]));
      };

      ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ProjectsComponent,
        selectors: [["app-projects"]],
        decls: 9,
        vars: 5,
        consts: [["id", "projects", 1, "section"], [1, "container", "cc-education"], [1, "h4", "text-center", "mb-4", "title"], ["previousLabel", "", "nextLabel", "", 3, "pageChange"], [1, "row"], [4, "ngFor", "ngForOf"], ["data-animate-effect", "fadeInLeft", 1, "col-md-4", "col-sm-6", "animate-box"], [1, "blog-entry"], [1, "card"], [1, "card-body", 2, "height", "400px"], [1, "card-title"], [1, "card-text"], [1, "justified-text"], [1, "btn-container"], ["target", "_blank", 1, "btn", "btn-primary", 3, "href"], ["class", "btn btn-primary", "target", "_blank", 3, "href", 4, "ngIf"]],
        template: function ProjectsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "pagination-controls", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function ProjectsComponent_Template_pagination_controls_pageChange_4_listener($event) {
              return ctx.pageChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ProjectsComponent_ng_container_6_Template, 24, 6, "ng-container", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "paginate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "pagination-controls", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function ProjectsComponent_Template_pagination_controls_pageChange_8_listener($event) {
              return ctx.pageChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@projectSlider", ctx.animationState);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 2, ctx.projects, ctx.config));
          }
        },
        directives: [ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginationControlsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
        pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginatePipe"]],
        styles: [".blog-entry[_ngcontent-%COMP%] {\n  width: 100%;\n  float: left;\n  background: #fff;\n  margin-bottom: 3em;\n}\n\n@media screen and (max-width: 768px) {\n  .blog-entry[_ngcontent-%COMP%] {\n    margin-bottom: 3em;\n  }\n}\n\n.blog-entry[_ngcontent-%COMP%]   .blog-img[_ngcontent-%COMP%] {\n  width: 100%;\n  float: left;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n  margin-bottom: 25px;\n}\n\n.blog-entry[_ngcontent-%COMP%]   .blog-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 100%;\n  transform: scale(1);\n  transition: 0.3s;\n}\n\n.blog-entry[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-bottom: 25px;\n  line-height: auto;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-family: \"Quicksand\", Arial, sans-serif;\n}\n\n.blog-entry[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #000;\n  text-decoration: none;\n}\n\n.blog-entry[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 20px;\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.4) !important;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-weight: 700;\n}\n\n.blog-entry[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #999999;\n}\n\n.blog-entry[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   .lead[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  color: #000;\n}\n\n.blog-entry[_ngcontent-%COMP%]:hover   .blog-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n\n.blog-entry[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 560;\n  margin-top: 8px;\n  font-size: 18px;\n}\n\n.blog-entry[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  line-height: normal;\n  font-weight: 500;\n  font-size: 1.2em;\n  color: black;\n}\n\n@media screen and (min-width: 992px) {\n  .card-img-top[_ngcontent-%COMP%] {\n    height: 196px;\n  }\n\n  .blog-entry[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    min-height: 52px;\n  }\n\n  .blog-entry[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    min-height: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGtCQUFBO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBS0EsbUJBQUE7RUFHQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUdBO0VBS0UscUJBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFO0lBQ0UsYUFBQTtFQUFGOztFQUVBO0lBQ0UsZ0JBQUE7RUFDRjs7RUFDQTtJQUNFLGdCQUFBO0VBRUY7QUFDRiIsImZpbGUiOiJwcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibG9nLWVudHJ5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAzZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5ibG9nLWVudHJ5IHtcbiAgICBtYXJnaW4tYm90dG9tOiAzZW07XG4gIH1cbn1cblxuLmJsb2ctZW50cnkgLmJsb2ctaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5ibG9nLWVudHJ5IC5ibG9nLWltZyBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3M7XG4gIC1vLXRyYW5zaXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5ibG9nLWVudHJ5IC5kZXNjIGgzIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBsaW5lLWhlaWdodDogYXV0bztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuXG4uYmxvZy1lbnRyeSAuZGVzYyBoMyBhIHtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmJsb2ctZW50cnkgLmRlc2Mgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCkgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmJsb2ctZW50cnkgLmRlc2Mgc3BhbiBzbWFsbCBpIHtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG5cbi5ibG9nLWVudHJ5IC5kZXNjIC5sZWFkIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBjb2xvcjogIzAwMDtcbn1cblxuLmJsb2ctZW50cnk6aG92ZXIgLmJsb2ctaW1nIGltZyB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5ibG9nLWVudHJ5IGg0IHtcbiAgZm9udC13ZWlnaHQ6IDU2MDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5ibG9nLWVudHJ5IGg1IHtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAuY2FyZC1pbWctdG9wIHtcbiAgICBoZWlnaHQ6IDE5NnB4O1xuICB9XG4gIC5ibG9nLWVudHJ5IGg0IHtcbiAgICBtaW4taGVpZ2h0OiA1MnB4O1xuICB9XG4gIC5ibG9nLWVudHJ5IGg1IHtcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICB9XG59XG4iXX0= */"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('projectSlider', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('left', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'translateX(0)',
            opacity: 1
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('right', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'translateX(0)',
            opacity: 1
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => left', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'translateX(-50%)',
            opacity: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-out')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => right', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'translateX(50%)',
            opacity: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-out')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('left => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'translateX(100%)',
            opacity: 50
          }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('right => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'translateX(-100%)',
            opacity: 50
          }))])])]
        }
      });
      /***/
    },

    /***/
    "bJZZ":
    /*!******************************************************!*\
      !*** ./src/app/profile/contact/contact.component.ts ***!
      \******************************************************/

    /*! exports provided: ContactComponent */

    /***/
    function bJZZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
        return ContactComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var ContactComponent = /*#__PURE__*/function () {
        function ContactComponent() {
          _classCallCheck(this, ContactComponent);

          this.model = {};
        }

        return _createClass(ContactComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
      }();

      ContactComponent.ɵfac = function ContactComponent_Factory(t) {
        return new (t || ContactComponent)();
      };

      ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContactComponent,
        selectors: [["app-contact"]],
        decls: 59,
        vars: 16,
        consts: [["id", "contact", 1, "section"], [1, "cc-contact-information", 2, "background-image", "url('assets/images/contact.jpg')"], [1, "container"], [1, "cc-contact"], [1, "row"], [1, "col-md-9"], ["data-aos", "zoom-in", 1, "card", "mb-0"], [1, "h4", "text-center", "title"], [1, "col-md-6"], [1, "card-body"], ["name", "form", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "p", "pb-3"], [1, "row", "mb-3"], [1, "col"], [1, "input-group"], [1, "input-group-addon"], [1, "fa", "fa-user-circle"], ["type", "text", "name", "name", "placeholder", "Name", "required", "", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["name", "ngModel"], [1, "fa", "fa-file-text"], ["type", "text", "name", "subject", "placeholder", "Subject", "required", "", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["subject", "ngModel"], [1, "fa", "fa-envelope"], ["type", "text", "name", "email", "placeholder", "E-mail", "pattern", "^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$", "required", "", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["email", "ngModel"], [1, "form-group"], ["name", "message", "placeholder", "Your Message", "required", "", 1, "form-control", 3, "ngModel", "ngClass", "ngModelChange"], ["message", "ngModel"], ["type", "submit", 1, "btn", "btn-primary"], [1, "mb-0"], [1, "pb-2"]],
        template: function ContactComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Contact Me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_12_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

              _r0.form.valid;
              return _r0.resetForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Feel free to contact me ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 18, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_22_listener($event) {
              return ctx.model.name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 21, 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_29_listener($event) {
              return ctx.model.subject = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 24, 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_36_listener($event) {
              return ctx.model.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "textarea", 27, 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_textarea_ngModelChange_41_listener($event) {
              return ctx.model.message = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Send ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Phone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "+98 9127163966");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "mahdi.jafarkhani@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.name)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, _r0.submitted && _r1.invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.subject)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, _r0.submitted && _r2.invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.email)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, _r0.submitted && _r3.invalid));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model.message)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, _r0.submitted && _r4.invalid));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "cRhG":
    /*!*******************************************!*\
      !*** ./src/app/profile/profile.module.ts ***!
      \*******************************************/

    /*! exports provided: ProfileModule */

    /***/
    function cRhG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileModule", function () {
        return ProfileModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./profile.component */
      "W6KJ");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./header/header.component */
      "lwDr");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./footer/footer.component */
      "4Ljr");
      /* harmony import */


      var _intro_intro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./intro/intro.component */
      "S3Mj");
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./about/about.component */
      "9Cjm");
      /* harmony import */


      var _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./skills/skills.component */
      "AjeU");
      /* harmony import */


      var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./portfolio/portfolio.component */
      "TnGC");
      /* harmony import */


      var _experience_experience_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./experience/experience.component */
      "RaFs");
      /* harmony import */


      var _education_education_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./education/education.component */
      "2Cm4");
      /* harmony import */


      var _reference_reference_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./reference/reference.component */
      "erBS");
      /* harmony import */


      var _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./contact/contact.component */
      "bJZZ");
      /* harmony import */


      var _projects_projects_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./projects/projects.component */
      "a37j");
      /* harmony import */


      var ngx_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-pagination */
      "oOf3");
      /* harmony import */


      var _split_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./split.pipe */
      "KnJY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ProfileModule = /*#__PURE__*/_createClass(function ProfileModule() {
        _classCallCheck(this, ProfileModule);
      });

      ProfileModule.ɵfac = function ProfileModule_Factory(t) {
        return new (t || ProfileModule)();
      };

      ProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
        type: ProfileModule
      });
      ProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_14__["NgxPaginationModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](ProfileModule, {
          declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _intro_intro_component__WEBPACK_IMPORTED_MODULE_5__["IntroComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_7__["SkillsComponent"], _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioComponent"], _experience_experience_component__WEBPACK_IMPORTED_MODULE_9__["ExperienceComponent"], _education_education_component__WEBPACK_IMPORTED_MODULE_10__["EducationComponent"], _reference_reference_component__WEBPACK_IMPORTED_MODULE_11__["ReferenceComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_13__["ProjectsComponent"], _split_pipe__WEBPACK_IMPORTED_MODULE_15__["SplitPipe"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_14__["NgxPaginationModule"]]
        });
      })();
      /***/

    },

    /***/
    "erBS":
    /*!**********************************************************!*\
      !*** ./src/app/profile/reference/reference.component.ts ***!
      \**********************************************************/

    /*! exports provided: ReferenceComponent */

    /***/
    function erBS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReferenceComponent", function () {
        return ReferenceComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ReferenceComponent = /*#__PURE__*/function () {
        function ReferenceComponent() {
          _classCallCheck(this, ReferenceComponent);
        }

        return _createClass(ReferenceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
      }();

      ReferenceComponent.ɵfac = function ReferenceComponent_Factory(t) {
        return new (t || ReferenceComponent)();
      };

      ReferenceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ReferenceComponent,
        selectors: [["app-reference"]],
        decls: 47,
        vars: 0,
        consts: [["id", "reference", 1, "section"], [1, "container", "cc-reference"], [1, "h4", "mb-4", "text-center", "title"], ["data-aos", "zoom-in", 1, "card"], ["id", "cc-Indicators", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#cc-Indicators", "data-slide-to", "0", 1, "active"], ["data-target", "#cc-Indicators", "data-slide-to", "1"], ["data-target", "#cc-Indicators", "data-slide-to", "2"], [1, "carousel-inner"], [1, "carousel-item", "active"], [1, "row"], [1, "col-lg-2", "col-md-3", "cc-reference-header"], ["href", "https://www.ians.uni-stuttgart.de/institute/team/Schembera-00001/", "target", "_blank", "rel", "noopener noreferrer"], ["src", "assets/images/schembera.jpg", "alt", "Image"], [1, "col-lg-10", "col-md-9"], [1, "h5", "mt-1"], [1, "category"], [1, "carousel-item"], ["href", "https://www.linkedin.com/in/hooman-ahmadi-7200aa68/", "target", "_blank", "rel", "noopener noreferrer"], ["src", "assets/images/ahmadi.jpeg", "alt", "Image"], ["href", "https://www.linkedin.com/in/ali-kashani-582022131/", "target", "_blank", "rel", "noopener noreferrer"], ["src", "assets/images/kashani.jpeg", "alt", "Image"]],
        template: function ReferenceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "References");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ol", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " He consistently completed tasks to our full satisfaction. His background in ontologies, knowledge graphs, and software engineering enabled him to quickly grasp complex technologies and concepts. He worked independently, with great dedication and purpose. Mr. Jafarkhani is a valuable asset to any organization, combining strong professional skills with a friendly, sociable nature. He integrated well into the international team and communicated confidently in English. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Dr.-Ing. Bj\xF6rn Schembera");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Research assistant");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " He was very efficient and completed all the tasks on time with professionalism. He was active in solving challenging problems and finding brilliant solutions to them. These accomplishments ultimately prove his dedicated ambition to succeed and excel. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Hooman Ahmadi");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Senior Project Manager - Varanegar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Whether managing and adapting with his colleagues, delivering clean, maintainable code, or establishing best practices with state-of-the-art technology, Mahdi has provided high-quality software for our organization. Mahdi is a valued member of our organization whom we have learned we can rely on, regardless of the difficulty of the task to hand or the novelty of the challenge. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Ali Kashani");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "CEO and Vice-Chairman of the Board");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".cc-reference[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 1000px;\n  color: black;\n  font-style: bold;\n}\n\n.category[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlZmVyZW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0YiLCJmaWxlIjoicmVmZXJlbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNjLXJlZmVyZW5jZSBwIHtcbiAgZm9udC13ZWlnaHQ6IDEwMDBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXN0eWxlOiBib2xkO1xufVxuXG4uY2F0ZWdvcnkgcCB7XG4gIHdpZHRoOiAxMCU7XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "lwDr":
    /*!****************************************************!*\
      !*** ./src/app/profile/header/header.component.ts ***!
      \****************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function lwDr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent() {
          _classCallCheck(this, HeaderComponent);
        }

        return _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)();
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 30,
        vars: 0,
        consts: [[1, "profile-page", "sidebar-collapse"], ["color-on-scroll", "400", 1, "navbar", "navbar-expand-lg", "fixed-top", "navbar-transparent", "bg-primary"], [1, "container"], [1, "navbar-translate"], ["href", "#", "rel", "tooltip", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navigation", "aria-controls", "navigation", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "navbar-toggler"], [1, "navbar-toggler-bar", "bar1"], [1, "navbar-toggler-bar", "bar2"], [1, "navbar-toggler-bar", "bar3"], ["id", "navigation", 1, "collapse", "navbar-collapse", "justify-content-end"], [1, "navbar-nav"], [1, "nav-item"], ["href", "#about", 1, "nav-link", "smooth-scroll"], ["href", "#experience", 1, "nav-link", "smooth-scroll"], ["href", "#skill", 1, "nav-link", "smooth-scroll"], ["href", "#education", 1, "nav-link", "smooth-scroll"], ["href", "#reference", 1, "nav-link", "smooth-scroll"], ["href", "#projects", 1, "nav-link", "smooth-scroll"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "About");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Experience");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Skills");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Education");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "References");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      document.addEventListener("DOMContentLoaded", function () {
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
          return console.error(err);
        });
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map