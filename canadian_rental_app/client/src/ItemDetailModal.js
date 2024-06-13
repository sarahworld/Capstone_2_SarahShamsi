
import React,{useEffect, useState} from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const ItemDetailModal = ({ isOpen, toggle, item }) => {

    const [rentingDays, setRentingDays] = useState("")
    const [returningDate, setReturningDate] = useState("")
   

    const handleChange = (e) => {
        setRentingDays(e.target.value)
    }

    const getTotalCost =(price,days) => {
        if(!price || !days){
            return null
        }
        return price * days
    }

    const getReturnDate = (days) => {
        
      console.log("days", days)
      let currentDate = new Date();

      var result = new Date(currentDate);
      
      result.setDate(result.getDate() + Number(days));
      // setReturningDate(result.toDateString())
      console.log("result ", result)
      return result.toDateString();

  }

  const handleBook = () => {
    
  }
    
  return (
    <Modal isOpen={isOpen} toggle={toggle} centered={true} scrollable={true}>
      <ModalHeader toggle={toggle}></ModalHeader>

      <ModalBody>
        <div className='row'>
            <div className='col'>
            <h1>{item.name}</h1>
            </div>
            
            <div className='col'>
            {item.availability ? <h1><span class="badge text-bg-success">Available</span></h1>:
                    <h1><span class="badge text-bg-secondary">Not Available</span></h1>}
            
            </div>
        </div>
        <h4>${item.price}/day</h4>

        <p>{item.description}</p>
        
        <label htmlFor='renting-days'><strong>How many days you need this? </strong>
        <input name='rentingDays' type='number' value={rentingDays} placeholder='Number of days' id='renting-days' onChange={handleChange}></input>
        </label>
{/* 
        //Done:Add input for number of days keep book disable
        //TODO: Once input is selected Total Cost & Return Date is shown and Book is enabled.
        // TODO: Once booked availability PATCH request is made to make it false 
        //TODO: Make user bookings page and put this booking in the table. */}
        {/* Add more item details here */}
      </ModalBody>
      <ModalFooter>
      {rentingDays && 
        <div>
        <h3>Total Renting Cost = ${getTotalCost(item.price,rentingDays)}</h3><h3>Returning Date:{getReturnDate(rentingDays)}</h3>
        </div>}
       
        <Button color="secondary" onClick={toggle}>Close</Button>
        {rentingDays ? <Button color="danger" onClick={toggle}>Book</Button>:<Button color="secondary" onClick={handleBook} disabled>Book</Button>}
        
      </ModalFooter>
    </Modal>
  );
};

export default ItemDetailModal;