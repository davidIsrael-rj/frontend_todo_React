import React from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";
import { connect } from "react-redux";

const TodoForm = props => {
   //Utilizando Teclas de Atalho
   const keyHandler = (e) => {
      if(e.key === 'Enter'){
         e.shiftKey ? props.handleSearch() : props.handleAdd()
      }else if (e.key === 'Escape'){
         props.handleClear()
      }
   }

   return (
      <div role='form' className='todoForm'>
         <Grid cols='12 9 10'>
            <input id="description" className='form-control'
               placeholder='Adicione uma Tarefa'
               onKeyUp={keyHandler}
               onChange={props.handleChange}
               value={props.description}></input>
         </Grid>
         <Grid cols='12 3 2'>
            <IconButton btnStyle='primary' icon='plus'
               onClick={props.handleAdd} />
            <IconButton
               btnStyle='info'
               icon='search'
               onClick={props.handleSearch} />
            <IconButton
               btnStyle='default'
               icon='close'
               onClick={props.handleClear} />
         </Grid>
      </div>
   )
}

const mapStateToProps = state =>({description: state.todo.description})
export default connect(mapStateToProps)(TodoForm)