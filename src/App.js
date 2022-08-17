
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const reducer = (state = 0, action) => {
  console.log({state, action});
  switch (action.type) {
    case 'incrementar':
      return state + 1
    case 'decrementar':
      return state - 1
    case 'set':
      return action.payload
  }
}

const App = () => {

  const [valor, setValor] = useState('')
  const state = useSelector(state => state)
  const dispatch = useDispatch();
  const set = () => {
    dispatch({type: 'set', payload: valor})
    setValor('')
  }

  return(
    <div>
      <p>contador: {state ? state : 0}</p>
      <button onClick={() => dispatch({type: 'incrementar'})}>Incrementar</button>
      <button onClick={() => dispatch({type: 'decrementar'})}>Decrementar</button>
      <button onClick={set}>Set</button>
      <input type="number" value={valor} onChange={ e => setValor(Number(e.target.value)) }></input>
    </div>
  )
}

export default App;