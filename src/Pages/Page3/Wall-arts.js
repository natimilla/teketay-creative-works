import { useState,useEffect } from 'react'
import classes from './Card.module.css'
import { useDispatch } from 'react-redux';
import { displayActions } from '../../store/display';
function Wall_arts(){
    const[loadedData,setData]=useState([]);
    const[isEmpty,setEmpty]=useState(false);
    const[isLoading,setLoading]=useState(false)
    const dispatch=useDispatch();
    useEffect(()=>{
        const fetchData=async()=>{
           try{
            setLoading(true)
            const response=await fetch('https://teketay-creative-works-default-rtdb.firebaseio.com/Wall_arts.json')
            const data=await response.json();
            if(data===null){
                setEmpty(true);
                setLoading(false)
                return
            }
            if(data.length===0){
                setEmpty(true);
                setLoading(false);
                return
            }
            else{
                const DUMMY_FILE=[]
                for(const key in data){
                      DUMMY_FILE.push({
                        id:key,
                        img:data[key][0].img,
                        name:data[key][0].name,
                        price:data[key][0].price
                      })
                }
                setData(DUMMY_FILE);
                setEmpty(false)
                setLoading(false)
            }
            
           }
           catch(error){
           setLoading(false)
            dispatch(displayActions.ErrorHandeler())
           }
        }
        fetchData()
    },[])
    return <div className={classes.container}>
        <div className={classes.heading}>Wall Arts</div>
        <div className={classes.horizontalLineContainer}><hr className={classes.horizontalLine}/></div>
        {isEmpty && <div>No results found</div>}
        {isLoading && <div> Loading... </div>}
       
       <div className={classes.listsContainer}>
        {loadedData.map((item)=>{
            return <div className={classes.listContainer}>
              <div className={classes.imageContainer}><img src={item.img} className={classes.img}/></div>
              <div className={classes.description}>Name: {item.name}</div>
              <div className={classes.description}>Price: {item.price}</div>
              <div className={classes.button}><a href='tel:'>Call To Order</a></div>
            </div>
        })}

       </div>
    </div>
}
export default Wall_arts