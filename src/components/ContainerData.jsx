import React from "react";
import { getData } from "../utils/data";
import ListData from "./ListData";
class ContainerData extends React.Component{
constructor(props) {
    super(props)

    this.state = {
        contacts: getData
    }
}

    render(){
        return (
            <div>
                <h1>Data Hewan</h1>
                <ListData/>
            </div>
        )
    }

}



export default ContainerData;