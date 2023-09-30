export function StudentInformations({infos, containerStyle}){
    return(
        <div className = "container mt-3" style={containerStyle}>
            <div className = "row h1">Student Informations</div>            
            {infos.map(info => {
                const fullName = `${info.name} ${info.surname}`
                return(
                <div className="row border mt-2 text-center" style={{alignItems:"center"}}>
                    <div className = "col-3">                   
                        <img 
                            src={`https://ui-avatars.com/api/?name=${fullName}&background=0D8ABC&color=fff`}
                            className="w-100"
                            alt="#">
                        </img>
                    </div>
                    <div className = "col-9">
                        {`Full Name: ${fullName}`}
                            <br/>
                        {`Number: ${info.schoolNumber}`}
                    </div>
                </div>
                )
            })}           
        </div>
    )
}