import Link from 'next/link'
import Article from '../Article/Article'


const Users = ({ users, loading }) => {
	if (loading) return <h1>Loading...</h1>

	return (
		<div >
			{users &&
				users.map(({ id, name, email }) => (
					<li key={id}>
						<Link href={`/articles/${id}`} >
							<Article name={name} id={id} email={email} />
						</Link>
					</li>
				))}
		</div>
	)
}

export default Users
