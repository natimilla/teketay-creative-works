import { useState, useEffect } from "react";
import classes from "./Histrory.module.css";
import { useDispatch, useSelector } from "react-redux";
import { displayActions } from "../../store/display";
function History() {
  const [orders, setOrders] = useState([]);
  const [clientOrder, setClient] = useState([]);
  const [isEmpty, setEmpty] = useState(false);
  const [isLoading,setLoading]=useState(false)
  const email = useSelector((Store) => Store.auth.email);
  
  const dispatch=useDispatch();
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
     try{ 
      const response = await fetch(
      "https://teketay-creative-works-default-rtdb.firebaseio.com/Orders.json"
    );
    const data = await response.json();
    if(data==null || data.length===0){
      setEmpty(true)
      return
    }
    else{
      setEmpty(false)
    }
    const allOrders = [];
    const client = [];
    const keys = Object.keys(data);
    const dataLength = keys.length;
    for (let i = dataLength - 1; i >= 0; i--) {
      let key = keys[i];
      const orders = data[key];
      const x = orders.length - 1; // Get the array of orders
      const date = new Date(orders[x].date);
      const options = { month: "short", day: "2-digit", year: "numeric" };
      const formattedDate = date
        .toLocaleDateString("en-US", options)
        .replace(",", "");
      let hours = date.getHours();
      const minutes = date.getMinutes().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'

      const formattedTime = `${hours}:${minutes} ${ampm}`;
      // Push address and fullname from the first order
    
      client.push({
        id: data[key],
        address: orders[x].address,
        fullname: orders[x].fullname,
        phone1: orders[x].phone1,
        phone2: orders[x].phone2,
        email: orders[x].Email,
        orderDate: formattedDate,
        orderTime: formattedTime,
      });
     
      // Loop through the order items
      for (let j = 0; j < orders.length; j++) {
        allOrders.push({
          id: data[key],
          name: orders[j].name,
          amount: orders[j].amount,
          price: orders[j].price,
        });
      }
    }
    setOrders(allOrders);
    setClient(client.filter(client=>client.email===email));
    // if(clientOrder.length===0){
    //   setEmpty(true)
    // }
    // else{
    //   setEmpty(false)
    // }

    setLoading(false)
  }
     catch(error){
      setLoading(false)
      dispatch(displayActions.ErrorHandeler())
     }
    };
    fetchData();
  }, []);
         
  return (
    <div className={classes.container}>
      {isEmpty &&  <div>No results found</div>}
      {isLoading && !isEmpty && <div>Loading...</div>}
      { clientOrder.map((client) => {
        return <div>
          { (
          <div className={classes.listsContainer}>
            <div className={classes.label}>FullName : {client.fullname}</div>
            <div className={classes.label}>phone number 1: {client.phone1}</div>
            <div className={classes.label}>Address: {client.address}</div>
            <div className={classes.label}>Order Date: {client.orderDate}</div>
            <div className={classes.label}>Order Time: {client.orderTime}</div>
            <div className={classes.itemsContainer}>
              <table>
                <tr>
                  <th>Item Name</th>
                  <th>Item Amount</th>
                  <th>Item Price</th>
                </tr>
                {orders
                  .filter((item) => item.id === client.id)
                  .map((item) => {
                    return (
                      <tr>
                        <td>{item.name}</td>
                        <td>{item.amount}</td>
                        <td>{item.price}</td>
                      </tr>
                    );
                  })}
              </table>
            </div>
          </div>
        )}
        </div>
      })}
    </div>
  );
}
export default History;
