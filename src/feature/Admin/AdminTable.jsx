const AdminTable=({header, data})=>{
    console.log(header.type);
    return (
        <table className="admin-table">
            <thead>
                <tr>
                    {header.map((col)=>{
                        return <th key={col}>{col}</th>}
                    )}
                </tr>
            </thead>
            <tbody>
                {data.map((row)=>{
                    return (
                        <tr key={row.id} className="row">
                            {row.map((col)=>{
                                return <td>{col}</td>;
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default AdminTable;