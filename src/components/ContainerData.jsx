import React from "react";
import { getData } from "../utils/data";
import ListData from "./ListData";
class ContainerData extends React.Component{
constructor(props) {
    super(props)

    this.state = {
        dataList: getData()
    }
}

    render(){
        return (
            <div>
                <h1>Data Hewan</h1>
                <ListData dataList={this.state.dataList}/>
            </div>
        )
    }

}



export default ContainerData;