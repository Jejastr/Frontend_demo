
import Heading from '@/components/Header/Heading'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

export const getServerSideProps = async context => {
	console.log(context)
	const { id } = context.params
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/users/${id}`
	)
	const data = await response.json()

	if (!data) {
		return {
			notFound: true,
		}
	}
	return {
		props: { article: data },
	}
}

const PaginationRouter = id => {
	const router = useRouter()

	const handleNext = () => {
		router.push(`${10 > id ? id + 1 : id}`)
	}

	const handleBack = () => {
		router.back()
	}
	return [handleNext, handleBack]
}

const Articles = ({ article }) => {
	const { name, id, email, username } = article

	const [handleNext, handleBack] = PaginationRouter(id)

	return (
		<>
			<Head>
				<title>Article</title>
			</Head>
			<Heading text={'Article'} />
			<div className='p-8 mx-80'>
				<Image
					className='mb-4'
					src={'/next.svg'}
					height={200}
					width={200}
					alt='color'
				/>
				<h1 className='font-semibold text-3xl'>
					{name} ({email})
				</h1>
				<Heading tag={'h2'} text={`${username} ${id}`} />
				<p className=''>
					Lorem Ipsum - это текст-"рыба", часто используемый в печати и
					вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
					латинице с начала XVI века. В то время некий безымянный печатник
					создал большую коллекцию размеров и форм шрифтов, используя Lorem
					Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил
					без заметных изменений пять веков, но и перешагнул в электронный
					дизайн. Его популяризации в новое время послужили публикация листов
					Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее
					время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах
					которых используется Lorem Ipsum.
				</p>
				<div>
					<button className='mr-8' onClick={handleBack}>
						Back
					</button>
					<button onClick={handleNext}>Next</button>
				</div>
			</div>
		</>
	)
}

export default Articles
