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
  apiKey: "AIzaSyAyfwa14osbRi9k1zodpqUh-bRapPaTOrA",
  authDomain: "blog-88a18.firebaseapp.com",
  projectId: "blog-88a18",
  storageBucket: "blog-88a18.appspot.com",
  messagingSenderId: "951688161680",
  appId: "1:951688161680:web:ceb231e4cdd09478b0eb15",
  measurementId: "G-D88MHVVRT8"
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
