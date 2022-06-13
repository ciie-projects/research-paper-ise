import { lazy, Suspense, useEffect,createContext,useState } from 'react';
/// Components
import Index from './jsx/index';
import {app} from "./firebase"
import { connect, useDispatch } from 'react-redux';
import {  Route, Switch, withRouter } from 'react-router-dom';
// action
import { checkAutoLogin } from './services/AuthService';
import { isAuthenticated } from './store/selectors/AuthSelectors';
/// Style
import "./vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import "./css/style.css";
import firebase from "firebase";


// const SignUp = lazy(() => import('./jsx/pages/Registration'));
const Otpreceive = lazy(() => import('./jsx/pages/Otpreceive'));
const ForgotPassword = lazy(() => import('./jsx/pages/ForgotPassword'));
//const Dashboard = lazy(() => import('./jsx/components/Dashboard'))
// const Login = lazy(() => {
//     return new Promise(resolve => {
// 		setTimeout(() => resolve(import('./jsx/pages/Login')), 500);
// 	});
// });

//  <Route path='/Dashboard' component = {Dashboard}/>
let UserContext = createContext();
export default function App (props) {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     checkAutoLogin(dispatch, props.history);
    // }, [dispatch, props.history]);
    
    // let routes = (  
    //     <Switch>
    //     <Route path ='/login' component ={Login}/>
          
    //         <Route path='/page-register' component={SignUp} />
    //         <Route path='/otpreceive' component={Otpreceive}/>
         
    //         <Route path='/page-forgot-password' component={ForgotPassword} />
    //     </Switch>
    // );
    
    let [user, setUser] = useState();

  useEffect(function () {
     app
      .auth()
      .onAuthStateChanged((user) => {
        // console.log(user);
        setUser(user);
      });
  }, []);
  



		return (
			<>
<UserContext.Provider value={{user,setUser}}>
<Suspense fallback={
                    <div id="preloader">
                        <div className="sk-three-bounce">
                            <div className="sk-child sk-bounce1"></div>
                            <div className="sk-child sk-bounce2"></div>
                            <div className="sk-child sk-bounce3"></div>
                        </div>
                    </div>  
                   }
                >
                    <Index />
                </Suspense>
</UserContext.Provider>
               
            </>
        );
	
	
		// return (
		// 	<div className="vh-100">
        //         <Suspense fallback={
        //             <div id="preloader">
        //                 <div className="sk-three-bounce">
        //                     <div className="sk-child sk-bounce1"></div>
        //                     <div className="sk-child sk-bounce2"></div>
        //                     <div className="sk-child sk-bounce3"></div>
        //                 </div>
        //             </div>
        //           }
        //         >
        //             {routes}
        //         </Suspense>
		// 	</div>
		// );
	
};
export {UserContext};
// const mapStateToProps = (state) => {
//     return {
//         isAuthenticated: isAuthenticated(state),
//     };
// };

// export default withRouter(connect(mapStateToProps)(App)); 
// eslint-disable-next-line
