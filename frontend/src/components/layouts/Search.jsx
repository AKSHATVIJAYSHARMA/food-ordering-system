import { FaSearch } from "react-icons/fa";
import React from 'react'

export default function Search() {
  return (
    <form>
      <div className="input-group">
        <input type="text" placeholder="Search Your Favorite Restaurant..." 
        id="search_field" 
        className="form-control" 
        />
        <div className="input-group-append">
            <button className="btn" id="search_btn">
                <FaSearch className="fa fa-search"/>
            </button>
        </div>
      </div>
    </form>
  )
}
