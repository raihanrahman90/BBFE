const Pagination= (page, setPage, pageCount)=>{
    let isNextDisabled = pageCount<=page;
    let isPrevDisabled = page>1;
    return (
    <div className="pagination">
        <button className="pagination-button" disabled={isPrevDisabled} onClick={()=>setPage(page-1)}>{"<"}</button>
        <text className="pagination-number">{page}</text>
        <button className="pagination-button" disabled={isNextDisabled} onClick={()=>setPage(page+1)}>{">"}</button>
    </div>)
}