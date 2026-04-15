import { useEffect, useRef, useState } from 'react'
import Dashboard from './Dashboard'
import './App.css'

const initialTasks = [
  { id: 1, task: 'Learn React' },
  { id: 2, task: 'Build App' },
  { id: 3, task: 'Practice Components' },
  { id: 4, task: 'Review Hooks' },
]

function App() {
  const [isOn, setIsOn] = useState(false)
  const [counter, setCounter] = useState(0)
  const [searchText, setSearchText] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const nameInputRef = useRef(null)

  useEffect(() => {
    nameInputRef.current?.focus()
  }, [])

  const increment = () => setCounter((prev) => prev + 1)
  const decrement = () => setCounter((prev) => (prev > 0 ? prev - 1 : 0))
  const reset = () => setCounter(0)

  const renderLogoutIfElse = () => {
    if (isLoggedIn) {
      return <button type="button">Logout</button>
    }
    return <button type="button">Login</button>
  }

  return (
    <main className="assignment-page">
      <header className="hero">
        <p className="eyebrow">React Day 2</p>
        <h1>React Fundamentals Assignment</h1>
        <p className="hero-copy">
          A complete practice board covering components, props, state, events,
          conditional rendering, lists, and refs.
        </p>
      </header>

      <section className="card">
        <h2>1. Functional Components & Props</h2>
        <p className="section-note">
          <code>UserProfile</code> uses prop destructuring with a default value:
          <code> isAdmin = false</code>.
        </p>
        <Dashboard />
      </section>

      <section className="card">
        <h2>2. Managing State with useState</h2>
        <p className="section-note">
          Light switch analogy: state is the switch memory. When the switch value
          changes, the UI updates instantly.
        </p>

        <div className="switch-wrap">
          <div className={`switch-panel ${isOn ? 'on' : 'off'}`}>
            <strong>{isOn ? 'ON' : 'OFF'}</strong>
          </div>
          <button onClick={() => setIsOn((prev) => !prev)}>
            Toggle Light Switch
          </button>
        </div>

        <div className="counter-wrap">
          <h3>Counter App</h3>
          <p className="counter-value">{counter}</p>
          <div className="button-row">
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
          </div>
        </div>
      </section>

      <section className="card">
        <h2>3. Event Handling & Transitions</h2>
        <p className="section-note">
          <code>event.target.value</code> is the current text inside the input,
          captured on every <code>onChange</code> event.
        </p>
        <label htmlFor="search-input">Search</label>
        <input
          id="search-input"
          type="text"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          placeholder="Type here..."
        />
        <p className="search-output">{searchText.toUpperCase() || 'TYPE TO SEE UPPERCASE OUTPUT'}</p>
      </section>

      <section className="card">
        <h2>4. Conditional Rendering</h2>
        <div className="condition-block">
          <h3>Three Logout render patterns</h3>
          <p>If/Else:</p>
          <div className="render-demo">{renderLogoutIfElse()}</div>
          <p>Logical &&:</p>
          <div className="render-demo">{isLoggedIn && <button type="button">Logout</button>}</div>
          <p>Ternary:</p>
          <div className="render-demo">{isLoggedIn ? <button type="button">Logout</button> : <button type="button">Login</button>}</div>
          <button onClick={() => setIsLoggedIn((prev) => !prev)}>
            Toggle Login State
          </button>
        </div>

        <div className="condition-block">
          <h3>Secret Message</h3>
          <label className="check-row">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(event) => setIsChecked(event.target.checked)}
            />
            Show secret message
          </label>
          {isChecked && (
            <p className="secret-message">
              Consistency beats intensity. Keep shipping small wins every day.
            </p>
          )}
        </div>
      </section>

      <section className="card">
        <h2>5. Lists & Keys</h2>
        <p className="section-note">
          Keys help React track list items efficiently so only changed elements
          get re-rendered.
        </p>
        <ul className="todo-list">
          {initialTasks.map((item) => (
            <li key={item.id}>
              <span>{item.task}</span>
              <button type="button" className="ghost-btn">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2>6. Ref Prop (useRef)</h2>
        <p className="section-note">
          The first field is focused automatically on page load using
          <code> useRef</code> + <code>useEffect</code>.
        </p>
        <form className="form-grid">
          <label htmlFor="full-name">Full Name</label>
          <input id="full-name" ref={nameInputRef} placeholder="Enter full name" />

          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Enter email" />

          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
  )
}

export default App
