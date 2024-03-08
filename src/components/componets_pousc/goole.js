import React, { useEffect, useState } from "react";

const goole = (searchText,listOfResult) =>{
   if(!searchText){
        return listOfResult;
   }
  // return listOfResult.
   
  function result(){
    const [resultList,setresultList] = useState(data);
    const [searchTerm,setSearchTerm] = useState('');
    useEffect(() =>{
        const Debnce = setTimeout(() => {
            const fiResult = filterResult(searchTerm,data);
            setResult(filterResult);
        }, 300);
        return () => clearTimeout(filterResult);
        [searchTerm]
  });
  }
        return( 
                <div>
        <input 
        value={searchTerm}
        className="clec"placeholder="поиск"/>

        </div>
        )
}
export default goole