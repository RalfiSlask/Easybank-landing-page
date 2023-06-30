import logoBanking from "../images/icon-online.svg";
import logoBudgeting from "../images/icon-budgeting.svg";
import logoBoarding from "../images/icon-onboarding.svg";
import logoAPI from "../images/icon-api.svg";
import Reason from "./Reason";

const WhyChose = () => {

    let reasonsArray = [
        { id: 1, logo: logoBanking, header: "Online Banking", text: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."}, 
        { id: 2, logo: logoBudgeting, header: "Simple Budgeting", text: "  See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits." },
        { id: 3, logo: logoBoarding, header: "Fast Onboarding", text: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away." },
        { id: 4, logo: logoAPI, header: "Open API", text: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier." }
    ]

    return (
        <>
            <div className="chose--container">
                <h1>Why choose Easybank?</h1>
                <p>We leverage Open Banking to turn your bank account into your financial hub. Control 
                    your finances like never before.
                </p>
            </div>
            <div className="reason--wrapper">
            {reasonsArray.map(reason => {
                let {logo, id, header, text} = reason;
                return <Reason logo={logo} key={id} header={header} text={text}/>})}
            </div>
        </>
    )
};

export default WhyChose;