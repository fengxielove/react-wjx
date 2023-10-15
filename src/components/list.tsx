function List() {
	const questionList = [
		{ id: 'q1', title: '问卷1', isPublished: false },
		{ id: 'q2', title: '问卷2', isPublished: true },
	]

	const edit = (id: string) => {
		console.log(id)
	}
	return (
		<div>
			<h1>问卷调查</h1>
			<div>
				{questionList.map(question => {
					const { id, title, isPublished } = question
					return (
						<div
							key={id}
							style={{
								border: '1px solid gray',
								margin: '10px',
								padding: '10px',
							}}
						>
							<strong>{title}</strong>
							&nbsp;
							{}
							{isPublished ? (
								<span style={{ color: 'green' }}>已发布</span>
							) : (
								<span style={{ color: 'red' }}>未发布</span>
							)}
							&nbsp;
							<button
								onClick={() => {
									edit(id)
								}}
							>
								编辑问卷
							</button>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default List
