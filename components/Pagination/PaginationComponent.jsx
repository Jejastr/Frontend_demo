import { useEffect, useState } from 'react'

import axios from 'axios'
import Users from './Users'
import Link from 'next/link'

const PaginationComponent = () => {
	const [users, setUsers] = useState([])
	const [loading, setLoading] = useState(false)
	const [currentPage, setCurrentPage] = useState(1)
	const [pageQty] = useState(2)

	useEffect(() => {
		const getUsers = async () => {
			setLoading(true)
			const res = await axios.get('https://jsonplaceholder.typicode.com/users')
			setUsers(res.data)
			setLoading(false)
		}
		getUsers()
	}, [])

	const lastUserIndex = currentPage * pageQty
	const firstUserIndex = lastUserIndex - pageQty
	const currentUser = users.slice(firstUserIndex, lastUserIndex)

	const paginate = pageNumber => setCurrentPage(pageNumber)

	const pageNumbers = []

	const totalUsers = users.length

	for (let i = 1; i <= Math.ceil(totalUsers / pageQty); i++) {
		pageNumbers.push(i)
	}

	return (
		<div>
			<Users key={users.id} users={currentUser} loading={loading} />
			<ul className='flex text-cyan-400 font-bold'>
				{pageNumbers.map(number => (
					<li key={number}>
						<Link href={`/pagination?${number}`} onClick={() => paginate(number)}>
							{number}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default PaginationComponent
