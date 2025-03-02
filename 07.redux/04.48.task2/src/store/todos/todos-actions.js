export const ADD_TODOS = 'ADD_TODOS';

const addTodos = (todos) => ({
    type: ADD_TODOS,
    payload: todos,
});

export const loadTodos = () => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((resp) => resp.json())
        .then((data) => dispatch(addTodos(data)));
};
