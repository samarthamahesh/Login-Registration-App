import { Link } from 'react-router-dom';
import Welcome from '../Welcome/Welcome';
import './Registration.css';

export default function Registration() {
    
    function onRegister() {
        alert("Register button clicked");
    }

    return (
        <div className="row">
            <div class="col-12 col-lg-6 welcome-display">
                <Welcome/>
            </div>
            <div class="col-12 col-lg-6 d-flex flex-column align-items-center my-auto">
                <div class="d-flex flex-column align-items-center col-8 col-sm-6 col-md-6 col-lg-8 col-xl-6 mx-auto my-auto h-100" style={{"--bs-bg-opacity": .1}}>
                    <div class="d-flex justify-content-between col-12">
                        <div>
                            <span class="col-6 h4">Register</span>
                        </div>
                        <div class='mt-1'>
                            <span class="col-6">or <Link to='/login'><a href="/" class="text-decoration-none">login in</a></Link></span>
                        </div>
                    </div>
                    <button type="button" class="btn btn-primary col-12 mt-4"><i class="fa fa-google pull-left"></i> Continue with Google</button>
                    <button type="button" class="btn btn-dark col-12 mt-4"><i class="fa fa-apple pull-left"></i> Continue with Apple</button>

                    <hr class='w-100 mt-5' />

                    <form class="col-12 mx-auto">
                        <div class="row">
                            <div class="form-group mt-4 col-12 col-md-6">
                                <input type="text" class="form-control bg-transparent text-dark" id="exampleInputfName1" aria-describedby="fnameHelp" placeholder="First Name"/>
                            </div>
                            <div class="form-group mt-4 col-12 col-md-6">
                                <input type="text" class="form-control bg-transparent text-dark" id="exampleInputlName1" aria-describedby="lnameHelp" placeholder="Last Name"/>
                            </div>
                        </div>
                        <div class="form-group mt-4">
                            <input type="email" class="form-control bg-transparent text-dark" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                        </div>
                        <div class="form-group mt-4">
                            <input type="password" class="form-control bg-transparent text-dark" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <div class="d-flex justify-content-between col-12 mt-4">
                            <div>
                                <button type="button" class="align-items-end btn btn-primary m-auto px-3" onClick={onRegister}>Register</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}