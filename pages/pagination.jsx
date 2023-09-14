import Heading from '@/components/Header/Heading'
import Head from 'next/head'
import PaginationComponent from '@/components/Pagination/PaginationComponent'

const Pagination = () => {
	return (
		<div>
			<Head>
				<title>Pagination</title>
			</Head>
			<Heading text={'Pagination'} />
			<PaginationComponent />
		</div>
	)
}

export default Pagination
