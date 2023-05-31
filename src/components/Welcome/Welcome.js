import './Welcome.css'

export default function Welcome() {
    return (
        <div class="welcome-div d-flex flex-column align-items-center">
            <div class="col-12 mb-5 d-flex">
                <img src="/imgs/logo.webp" height="150" width="150"></img>
            </div>
            <div>
                <img src='/imgs/login.png' class='login-img h-100 w-auto'></img>
            </div>
        </div>
    )
}