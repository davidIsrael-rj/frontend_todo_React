import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Grid from "../template/grid";
import IconButton from "../template/iconButton";
import { add, changeDescription, search, clear } from "./todoActions";

class TodoForm extends Component {
   constructor(props) {
      super(props)
      this.keyHandler = this.keyHandler.bind(this)
   }

   componentDidMount() {
      this.props.search()
   }
   //Utilizando Teclas de Atalho
   keyHandler(e) {
      const {add, search,clear , description} = this.props
      if (e.key === 'Enter') {
         e.shiftKey ? search() : add(description)
      } else if (e.key === 'Escape') {
         clear()
      }
   }

   render() {
      const {add, search, description} = this.props
      return (
         <div role='form' className='todoForm'>
            <Grid cols='12 9 10'>
               <input id="description" className='form-control'
                  placeholder='Adicione uma Tarefa'
                  onKeyUp={this.keyHandler}
                  onChange={this.props.changeDescription}
                  value={this.props.description}></input>
            </Grid>
            <Grid cols='12 3 2'>
               <IconButton btnStyle='primary' icon='plus'
                  onClick={()=> add(description)} />
               <IconButton
                  btnStyle='info'
                  icon='search'
                  onClick={search} />
               <IconButton
                  btnStyle='default'
                  icon='close'
                  onClick={this.props.clear} />
            </Grid>
         </div>
      )
   }
}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch =>
   bindActionCreators({add, changeDescription, search, clear }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)