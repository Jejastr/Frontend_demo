import Heading from '@/components/Header/Heading'
import Head from 'next/head'

const Article = () => {
	return (
		<>
			<Head>
				<title>Article</title>
			</Head>
			<Heading text={'Article: '} />
		</>
	)
}

export default Article
