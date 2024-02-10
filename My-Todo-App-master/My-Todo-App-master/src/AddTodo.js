import React, {Component} from 'react'

class Addtodo extends Component{
    state={
        content:''
    }
    handleChange=(e)=>{
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addtodo(this.state);
        this.setState({
            content:''
        })
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <h4 className="green-text center">Add A Todo:</h4>
                <input type="text" onChange={this.handleChange} value={this.state.content}/>
            </form>
        )
    }
}
export default Addtodo;