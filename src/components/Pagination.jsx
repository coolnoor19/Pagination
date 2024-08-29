import React from 'react'

function Pagination({pageNo, setPageNo}) {

    const prevThreeNoArr = Array.from({length: 3 }, (_, index)=> pageNo-1-index).filter((value)=> value>0 ).reverse();

    const nextThreeNoArr = Array.from({length:3}, (_, index)=> pageNo+index)
    // console.log(nextThreeNoArr);
    // console.log(prevThreeNoArr);

    const paginationArr= [...prevThreeNoArr, ...nextThreeNoArr]
    

    const handleNext =()=>{
        setPageNo(pageNo+1);
    };

    const handlePrev =()=>{
        setPageNo(pageNo-1);
    };
  return (
    <div className="pagination-container">
        {pageNo >1? <div onClick={handlePrev} className="page-btn">{"<"}</div> : ("")}

        {paginationArr.map((value)=>{
            return (
            <div onClick={()=>setPageNo(value)} className={value === pageNo?`page-btn active`: `page-btn` }>{value}
            </div>);
        })}
       
       
        <div onClick={handleNext} className="page-btn">{">"}</div>

      
    </div>
  )
}

export default Pagination
