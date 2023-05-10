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



onDeleteHandler(id){
    const dataList = this.state.dataList.filter(data => data.id !== id)
    this.setState({dataList})
}



    render(){
        return (
            <div>
                <h1>Data Hewan</h1>
                <ListData dataList={this.state.dataList} onDelete={this.onDeleteHandler.bind(this)}/>
                {console.log(this.onDeleteHandler)}
            </div>
        )
    }

}



export default ContainerData;