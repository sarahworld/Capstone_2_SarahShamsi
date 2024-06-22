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
                console.log(err);
            }
           
        };
        fetchData();
    },[])
   

    return(
       <div className="container text-center mt-5">
           
            <div className="row">
            {categories && Object.keys(categories).map(key => 
                <div className="col">
                    <Link to={`/${categories[key]}`} className="no-underline">
                    <div className="category-card" key={key}>
                      <h4>{categories[key]}</h4>
                    </div>
                    </Link>
                    
                </div>
            )}
            </div>
        </div>
    )
};

export default Categories;