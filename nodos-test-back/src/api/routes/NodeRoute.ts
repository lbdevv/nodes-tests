import { Router } from 'express'
import { NodeController } from '../controllers/NodeController'
import { GetNodeTree } from '../../application/useCases/GetNodeTree'
import { InMemoryNodeRepository } from './../../infrastructure/InMemoryNodeRepository'

const router = Router()
const nodeRepository = new InMemoryNodeRepository()
const getNodeTree = new GetNodeTree(nodeRepository)
const nodeController = new NodeController(getNodeTree)

router.get('/nodes', (req, res) => nodeController.getTree(req, res))

export default router
