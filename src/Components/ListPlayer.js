import players from "../players"
import CardPlayer from "./CardPlayer"

const ListPlayer =()=> {
    return(
       <div style={{display : 'flex' , justifyContent : "space-around"}}>
            {
                players.map((el,i,t)=><CardPlayer el={el} />)
            }
       </div>

    )
}

export default ListPlayer