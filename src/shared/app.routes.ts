import { Router } from 'express'

const routes = Router()

routes.get('/', (request, response) => {
	try {
		return response.json({ msg: 'testando' })
	} catch (error) {
		const message = error instanceof Error ? error.message : String(error)
		return response.status(400).json({ error: message })
	}
})

export default routes
