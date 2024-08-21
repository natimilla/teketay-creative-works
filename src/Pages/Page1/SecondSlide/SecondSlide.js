import Header from './Header/Header'
import Lists from './Lists/Lists'
import classes from './SeconSlide.module.css'
function SecondSlide(){
    return <div className={classes.container} id='services'>
        <Header/>
        <Lists></Lists>
</div>
}
export default SecondSlide