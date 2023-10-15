import { useState } from 'react'
import List from './components/list'
// import "./App.css";

function App() {
	const [count, setCount] = useState(0)
	const add = () => {
		setCount(count + 1)
	}

	return (
		<>
			<List></List>
			<div>
				<button onClick={add}>add {count}</button>
			</div>
		</>
	)
}

export default App
