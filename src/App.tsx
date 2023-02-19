import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './index.css';
import { Route, Routes } from "react-router-dom";
import BlogDetail from "./components/BlogDetail";
import Blogs from "./components/Blogs";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDk7kw3dRGFjxq7PMT-k-OcB7haveXkszc",
  authDomain: "blogtest-638a4.firebaseapp.com",
  projectId: "blogtest-638a4",
  storageBucket: "blogtest-638a4.appspot.com",
  messagingSenderId: "33462242247",
  appId: "1:33462242247:web:7c3962f3630bb8d8b927e2",
  measurementId: "G-NCP8X3E5ZW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Blogs />}></Route>
      <Route path="/blog/:pid" element={<BlogDetail />}></Route>
    </Routes>
  );
}

export default App;
