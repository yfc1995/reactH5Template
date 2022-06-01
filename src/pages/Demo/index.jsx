import { add, asyncAdd } from '@store/demo'
import { useSelector, useDispatch } from "react-redux"

const Demo = () => {
  const dispatch = useDispatch()
  const { sum } = useSelector((state) => {
    return state.demo
  })
  return <div>
    <h1>Demo</h1>
    <button onClick={() => dispatch(add({ num: 1 }))}>同步{sum}</button>
    <button onClick={() => dispatch(asyncAdd({ num: 1 }))}>异步{sum}</button>
  </div>
}


export default Demo