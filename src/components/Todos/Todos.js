import React from 'react';
import withErrors from '../HOC/TodoWithErros';

const Todos = ({todos}) =>
    <ul className="list-group">
        {todos.map( todo => <li className="list-group-item" key={todo.id}>{todo.title}</li> )}
    </ul>

export default withErrors(Todos);
