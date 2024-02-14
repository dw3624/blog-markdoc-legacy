export const formatDate = (date: string) => {
	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	}
	const formattedDate = new Date(date)
		.toLocaleDateString('en-us', options)
		.toString()
	return formattedDate
}
