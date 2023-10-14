import { useState } from 'react'
import './App.css'

function App() {
	const [count, setCount] = useState(0)

	const flag = false
	const list = [
		{ username: 'fengxie', name: 'fengxie' },
		{ username: '1', name: '1' },
	]
	return (
		<>
			<div className="card">
				<button onClick={() => setCount(count => count + 1)}>count is {count}</button>
				<p style={{ color: 'red', backgroundColor: 'white' }}>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<div>
				<ul>
					{list.map(item => {
						const { username, name } = item
						return <li key={username}>{name}</li>
					})}
				</ul>
			</div>
			<div>{flag ? <p>Hello World</p> : <h1>sss</h1>}</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
		</>
	)
}

export default App
