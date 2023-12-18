function Demo()
{
    return(
        <div>
            <label>
                <input type="text"></input>
            </label>
        </div>
    )
}
function OneExport()
{
    return(
        <div>
            <Demo/>
            <label>Agree:
                <input type="checkbox"></input>
            </label>
        </div>
    )
}
export default OneExport;