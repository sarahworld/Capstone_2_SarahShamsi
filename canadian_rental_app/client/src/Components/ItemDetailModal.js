
import React,{useEffect, useState} from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const ItemDetailModal = ({ isOpen, toggle, item, category }) => {


    const navigate = useNavigate();
    const [rentingDays, setRentingDays] = useState("")
    const [returningDate, setReturningDate] = useState("")
    const [totalPrice, setTotalPrice] = useState(null)
   

    const handleChange = (e, item) => {
      let days = e.target.value;
        setRentingDays(days)
        getReturnDate(days)
        getTotalCost(item.price,days)
    }

    const getTotalCost =(price,days) => {
        if(!price || !days){
            return null
        }
        let total = price * days;
        setTotalPrice(total)
    }

    const getReturnDate = (days) => {
      
      let currentDate = new Date();
      var result = new Date(currentDate);
      result.setDate(result.getDate() + Number(days));
      setReturningDate(result.toDateString())
  }

  const handleBook = async (e,item) => {
    e.preventDefault();
    console.log("booking in process", category, item._id, rentingDays, returningDate,totalPrice,item.name  );
    let bookingData = {
      "category":category,
      "itemId":item._id,
      "itemName":item.name,
      "rentingDays":rentingDays,
      "returnDate":returningDate,
      "price":totalPrice
    }
    try{

      const response = await axios.post(`http://localhost:5050/${category}/${item._id}/book`, bookingData );
      alert("Booking Successful")
    }catch(error){
      console.error('Error sending booking data', error)
    }
    navigate('/bookings');
  }
    
  return (
    <Modal isOpen={isOpen} toggle={toggle} centered={true} scrollable={true}>
      <ModalHeader toggle={toggle}></ModalHeader>
      {item && <div>
        <ModalBody>
        <div className='row'>
            <div className='col'>
            <h2>{item.name}</h2>
            </div>
            
            <div className='col'>
            {item.availability ? <h2><span class="badge text-bg-success">Available</span></h2>:
                    <h1><span class="badge text-bg-secondary">Not Available</span></h1>}
            
            </div>
        </div>
        <h4>${item.price}/day</h4>

        <p>{item.description}</p>
        
        <label htmlFor='renting-days'><strong>How many days you need this? </strong>
        <input name='rentingDays' type='number' min="0" value={rentingDays} placeholder='Number of days' id='renting-days' onChange={(e) => handleChange(e,item)}></input>
        </label>

      </ModalBody>
        </div>}
     
      <ModalFooter>
      {rentingDays && 
        <div>
        <h3>Total Renting Cost = ${totalPrice}</h3><h3>Returning Date:{returningDate}</h3>
        </div>}
       
        <Button color="secondary" onClick={toggle}>Close</Button>
        {rentingDays > 0 ? <Button color="danger" onClick={(e) => handleBook(e,item)}>Book</Button>:<Button color="secondary"  disabled>Book</Button>}
        {/**/}
      </ModalFooter>
    </Modal>
  );
};

export default ItemDetailModal;