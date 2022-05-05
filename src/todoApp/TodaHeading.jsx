const TodaHeading = (obj) => {

    return (
        <>
            <div className="data">
                <i onClick={()=>{obj.method(obj.id)}} className="fa fa-window-close"></i>
                <h1> {obj.text}</h1>
            </div>

        </>
    )

}

export default TodaHeading;