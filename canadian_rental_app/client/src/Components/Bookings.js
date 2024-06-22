import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Container } from "reactstrap";
import Items from "./Items";

const Bookings = () => {

    const [bookingData, setBookingData] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            try{
                const res = await axios.get('http://localhost:5050/bookings');
                setBookingData(res.data)
            }
            catch(err){
                console.error(err);
            }
        };
        fetchBookings();

    },[])


    return (
        <Container fluid>
             <div className="table-responsive">
            <Table >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Category</th>
                        <th>Return Date</th>
                        <th>Price</th>
                    </tr>
                </thead>
                {bookingData && bookingData.map((data,index) => 
                (
                    <tbody>
                        <tr key={index}>
                            
                            <th scope="row">
                                {index + 1}
                            </th>
                            <td>
                                {data.itemName}
                            </td>
                            <td>
                                {data.category}
                            </td>
                            <td>
                                {data.returnDate}
                            </td>
                            <td>
                                C${data.price}
                            </td>
                            
                        </tr>
                    </tbody>
                ))}   
            </Table>
        </div>
        </Container>
    )
}

export default Bookings;