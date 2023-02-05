import Router from 'express'
import PostController from './PostConteroller.js';

const router = new Router()

router.post('/posts', async (req, res) => {
    
})
router.get('/posts', PostController.create)
router.get('/posts/:id')
router.put('/posts')
router.delete('/posts?')

export default router;