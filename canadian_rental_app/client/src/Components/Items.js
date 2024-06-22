import axios from "axios";
import React, { useEffect, useState } from "react";
import { redirect, useParams, Link } from "react-router-dom";
import './items.css';
import ItemDetailModal from "./ItemDetailModal";

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
        setSelectedItem(item)
        toggleModal()
    }

    const toggleModal = () => setModalOpen(!modalOpen)

    return (
        <div>
            <h2 className="m-5">{category}</h2>

            <div className="container text-center">
            <div className="row">
            {items && items.map((item, index)=> 
            
                <div className="col-md-4 mb-4" key={index}>
                    <div className="card" key={item[0]._id} onClick={()=>handleClick(item[0])}>
                        <div className="card-title"><h3>{item[0].name}</h3><h4>${item[0].price}/day</h4></div>
                    </div>                   
                </div>
            )}
            </div>
                {selectedItem && (
                    <ItemDetailModal isOpen={modalOpen} toggle={toggleModal} item={selectedItem} category={category}/>
                )}
            
        </div>
        </div>
    )
}

export default Items;