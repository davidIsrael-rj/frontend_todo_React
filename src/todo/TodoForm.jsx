import React from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";

const TodoForm = props => (
   <div role='form' className='todoForm'>
      <Grid cols='12 9 10'>
         <input id="description" className='form-control'
            placeholder='Adicione uma Tarefa'
            onChange={props.handleChange}
            value={props.description}></input>
      </Grid>
      <Grid cols='12 3 2'>
         <IconButton btnStyle='primary' icon='plus'
            onClick={props.handleAdd}
         ></IconButton>
      </Grid>
   </div>
)

export default TodoForm