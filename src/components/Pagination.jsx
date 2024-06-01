export const Pagination= ({page, setPage, pageCount})=>{
    let isNextDisabled = pageCount<=page;
    let isPrevDisabled = page<2;
    return (
    <div className="pagination">
        <button className="pagination-button" disabled={isPrevDisabled} onClick={()=>setPage(page-1)}>{"<"}</button>
        <div className="pagination-number">{page}</div>
        <button className="pagination-button" disabled={isNextDisabled} onClick={()=>setPage(page+1)}>{">"}</button>
    </div>)
}