import React from 'react';

class Comp1 extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            editMode : false,
            counter : 0
        }
    }
    handleEditClick(e){
        this.setState ({editMode : true})
    }
    handleUpdateClick(e){
        this.setState({editMode : false})
    }

    inputChange(e){
        this.setState({counter : e.target.value})
    }



    render(){
        if(this.state.editMode){
        return(
            //edit section 
            <div align="center">
                <div>Counter: {this.state.counter}</div><br /><br/>
                <input type="text" onChange={(e)=> this.inputChange(e)} /><br/><br/>
                <input type="button" value="Update" onClick={()=> this.handleUpdateClick()} />
            </div>
        )
        }
        else{
            return(
                //display section
                <div align="center">
                <div>Counter: {this.state.counter}</div><br />
                <button type="button" onClick={()=> this.handleEditClick()} >EDIT</button>
                </div>
            )
        }
    }
}
export default Comp1;