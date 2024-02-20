import React from 'react'
import { FaSearch } from 'react-icons/fa';

const Search = ({cellphone}) => {
    return (
        <div className={`${cellphone ? "hidden md:flex" : "flex md:hidden py-4" } gap-4 justify-center items-center`}>
            <a className='flex justify-center items-center gap-2' href="/blogs">Search<FaSearch /></a>
        </div>
    )
}

export default Search

