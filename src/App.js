import React, { Suspense, useState } from 'react'
import { hot } from 'react-hot-loader'
import './styles.css'

const Warning = React.lazy(() => import('./Warning'))

const App = () => {
  const [count, setCounter] = useState(0)
  return (
    <div>
      <h1>Hello World!!XX</h1>
      <h2 className={count > 10 ? 'warning' : null}>Count: {count}</h2>
      <button onClick={() => setCounter(count + 1)}>+</button>
      <button onClick={() => setCounter(count - 1)}>-</button>
      <Suspense fallback={null}>{count > 10 ? <Warning /> : null}</Suspense>
    </div>
  )
}
export default hot(module)(App)
