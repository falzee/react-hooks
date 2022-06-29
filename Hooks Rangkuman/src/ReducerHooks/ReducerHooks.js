import { useReducer } from "react";

//initial state biasanya berisi objek
const initialTodos = [
    {
        id: 1,
        title: "Todo 1",
        complete: false,
    },
    {
        id: 2,
        title: "Todo 2",
        complete: false,
    },
];
//reducer berisi fungsi yg akan di pass
const reducer = (state, action) => {
switch (action.type) {
    case "COMPLETE":
    return state.map((todo) => {
        if (todo.id === action.id) {
            return { ...todo, complete: !todo.complete };
        } else {
            return todo;
        }
    });
    default:
        return state;
}
};

export default function ReducerHooks() {
    const [todos, dispatch] = useReducer(reducer, initialTodos);//dispatch digunakan untuk mentrigger kondisi yang diinginkan di reducer

    const handleComplete = (todo) => {
        dispatch({ type: "COMPLETE", id: todo.id });
    };

    return (
            <>
        {todos.map((todo) => (
            <div key={todo.id}>
            <label>
                <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => handleComplete(todo)}
                />
                {todo.title}
            </label>
            </div>
        ))}
        </>
    );
}

//penjelasan hook bisa cek disini https://medium.com/@falzee/react-hooks-part-1-38cb28e07e41
