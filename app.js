const express = require('express')

const app = express()
const port = 3000

app.get('/api/health', (req, res) => {
	
	const relevantData={success: true,data:"Halo Rules"};
	res.json(relevantData)
})

app.listen(port, () =>
	console.log(`Server is running on port ${port}`)
)
