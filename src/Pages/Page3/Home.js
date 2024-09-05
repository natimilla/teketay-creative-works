import { useState,useEffect } from 'react'
import classes from './Card.module.css'
import { useDispatch } from 'react-redux';
import { displayActions } from '../../store/display';
import { CartDisplayAction } from '../../store/CartDisplay';
function Home(){
    const[loadedData,setData]=useState([]);
    const[isEmpty,setEmpty]=useState(false);
    const[isLoading,setLoading]=useState(false)
    const dispatch=useDispatch();
    useEffect(()=>{
        const fetchData=async()=>{
           try{
            setLoading(true)
            const response=await fetch('https://teketay-creative-works-default-rtdb.firebaseio.com/Home.json')
            const data=await response.json();
            if(data===null){
                setEmpty(true);
                setLoading(false)
                return
            }
            if(data.length===0){
                setEmpty(true);
                setLoading(false)
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
    const addItemHandler=(id,img,name,price)=>{
        dispatch(CartDisplayAction.scaleUpHandler())
        setTimeout(()=>{
            dispatch(CartDisplayAction.scaleUpHandler())
        },2000)
        dispatch(CartDisplayAction.addItemHandler({id:id,src:img,name:name,price:price}));
        dispatch(CartDisplayAction.totalPriceHandler());
        dispatch(CartDisplayAction.isEmptyHandler())
    }
    return <div className={classes.container} id='home'>
        <div className={classes.heading}>Home Accessories</div>
        <div className={classes.horizontalLineContainer}><hr className={classes.horizontalLine}/></div>
        {isEmpty && <div>No results found</div>}
        {isLoading && <div> Loading... </div>}
       
       <div className={classes.listsContainer}>
        {loadedData.map((item)=>{
            return <div className={classes.listContainer}>
              <div className={classes.imageContainer}><img src={item.img} className={classes.img}/></div>
              <div className={classes.description}>Name: {item.name}</div>
              <div className={classes.description}>Price: {item.price}</div>
              <button className={classes.button} onClick={()=>{addItemHandler(item.id,item.img,item.name,item.price)}}>Add to cart</button>
            </div>
        })}

       </div>
    </div>
}
export default Home