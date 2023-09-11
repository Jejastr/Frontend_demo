import Image from 'next/image'

const Article = ({ name, id, email }) => {
	return (
		<div>
			<div className='p-8 border-cyan-500 bg-red-300 border-2 cursor-pointer'>
				<Image
					className='mb-4'
					src={'/next.svg'} //Тут має приймати url
					height={400}
					width={400}
					alt={name} //
				/>
				<h1 className='font-semibold text-3xl text-cyan-50'>
					{name} ({email})
				</h1>
			</div>
		</div>
	)
}

export default Article
