import { Request, Response } from 'express'
import { GetNodeTree } from '../../application/useCases/GetNodeTree'
import { Node } from '../../domain/models/Node'

export class NodeController {
  constructor(private getNodeTree: GetNodeTree) {}

  public async getTree(req: Request, res: Response): Promise<void> {
    try {
      const tree: Node = await this.getNodeTree.execute() 
      res.json(tree)
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener el árbol' })
    }
  }
}
