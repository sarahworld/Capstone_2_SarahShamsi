import axios from "axios";
import React, { useEffect, useState } from "react";
import { redirect, useParams, Link } from "react-router-dom";
import './items.css';
import ItemDetailModal from "../ItemDetailModal";

const Items = () => {

    const { category } = useParams();

    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null)
    const [modalOpen, setModalOpen] = useState(false)
    
    
    useEffect(() => {
        const fetchItems = async () => {
            let res = await axios.get(`http://localhost:5050/${category}`);
            setItems(res.data)

        }
        fetchItems();
    },[])
    
    const handleClick = (item) => {
        // TODO: MAke sure user is logged in if not ask for sign In else take to modal.
        setSelectedItem(item)
        toggleModal()
    }

    

    const toggleModal = () => setModalOpen(!modalOpen)

    return (
        <div>
            <h2 className="m-5">{category}</h2>

            <div className="container text-center">
            <div className="row">
            {items && items.map(item => 
                <div className="col">
                    
                    <div className="card" key={item.name} onClick={()=>handleClick(item)}>

                        <div className="card-title"><h4 className="display-5">{item.name}</h4><h5 className="display-5">{`$${item.price}/day`}</h5></div>
                        <div className="card-body">
                         {item.description}
                        </div>
                    </div>
                   
                    
                </div>
            )}
            </div>

            {
                selectedItem && (
                    <ItemDetailModal isOpen={modalOpen} toggle={toggleModal} item={selectedItem}/>
                )
            }
        </div>
        </div>
    )
}

export default Items;