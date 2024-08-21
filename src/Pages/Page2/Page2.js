import AboutUs from './About US/AboutUS'
import CompanyPortfolio from './CompanyPortfolio/CompanyPortfolio'
import classes from './Page2.module.css'
import TeamMembers from './TeamMembers/TeamMembers'
import { Helmet } from 'react-helmet'
function Page2(){
    return<div className={classes.container} id='services'>
        <Helmet>
        <title>Teketay Creative Works About Us Page</title>
        <meta name="About US" content="This page contains the team memebers and the core value of the company" />
      </Helmet>
        <AboutUs/>
        <CompanyPortfolio/>
        <TeamMembers/>
    </div>
}
export default Page2