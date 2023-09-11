import Heading from '@/components/Header/Heading'
import Head from 'next/head'

export default function Home() {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<Heading text={'Home'}/>
		</>
	)
}
