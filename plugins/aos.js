// plugins/aos.js
// import "../assets/vendor/aos/aos"
import "../assets/vendor/aos/aos.css";
export default ({ app }) => {
  app.AOS = new AOS.init({ enable: "phone" }); // or any other options you need
};