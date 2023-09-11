import Article from '@/components/Article/Article'
import Heading from '@/components/Header/Heading'
import Head from 'next/head'
import Link from 'next/link'

export const getStaticProps = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/users')
	const data = await response.json()
	if (!data) {
		return {
			notFound: true,
		}
	}

	return {
		props: { articles: data },
		
	}
}

const Articles = ({ articles }) => {
	return (
		<>
			<Head>
				<title>Articles</title>
			</Head>
			<Heading text={'Articles: '} />
			{articles && 
				articles.map( ({id,name,email}) => (
					<li>
						<Link href={`/articles/${id}`} key={id} name={name}>
							<Article key={id} name={name} id={id} email={email}/>
						</Link>
					</li>
				) )
			}
		</>
	)
}

export default Articles
