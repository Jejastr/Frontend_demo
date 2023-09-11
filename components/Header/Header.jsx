import Link from 'next/link'

const Header = () => {
	return (
		<header>
			<nav>
				<ul className='flex'>
					<li>
						<Link href={'/'}>Home</Link>
					</li>
					<li>
						<Link href={'/articles'}>Articles</Link>
					</li>
					<li>
						<Link href={'/pagination'}>Pagination</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
