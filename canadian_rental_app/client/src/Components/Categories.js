import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import './Categories.css';

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await axios.get('http://localhost:5050/');
                setCategories(res.data)
            }
            catch(err){
                console.err(err);
            }
           
        };
        fetchData();
    },[])


    return(
       <div className="container text-center">
           
            <div className="row">
            {categories && categories.map(category => 
                <div className="col">
                    <Link to={`/${category}`} className="no-underline">
                    <div className="category-card" key={category}>
                      {category}  
                    </div>
                    </Link>
                    
                </div>
            )}
            </div>
        </div>
    )
};

export default Categories;