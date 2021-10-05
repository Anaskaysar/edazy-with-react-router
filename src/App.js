import { BrowserRouter as Router,Switch,Route  } from 'react-router-dom';
import './App.css';
import AllCourses from './components/AllCourses/AllCourses';
import Home from './components/Home/Home';
import Teachers from './components/Teachers/Teachers';
import Students from './components/Students/Students';
import Header from './components/Header/Header';
import Contactus from './components/ContactUs/Contactus';
import About from './components/About/About';
import Footer from './components/Footer/Foooter';
import NotFound from './components/NotFound/NotFound';
import StudentDetails from './components/StudentDetails/StudentDetails';
import TeacherDetails from './components/TeacherDetails/TeacherDetails';


function App() {
  return (


        <Router>
        <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/courses'>
              <AllCourses></AllCourses>
            </Route>
            <Route exact path='/students'>
              <Students></Students>
            </Route>

            <Route exact path='/student/:studentId'>
              <StudentDetails></StudentDetails>
            </Route>

            <Route exact path='/teachers'>
              <Teachers></Teachers>
            </Route>
            <Route exact path='/teacher/:teacherId'>
              <TeacherDetails></TeacherDetails>
            </Route>
            <Route exact path="/aboutus">
              <About></About>
            </Route>
            <Route exact path="/contactus">
              <Contactus></Contactus>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        <Footer></Footer>
        </Router>
  );
}

export default App;
