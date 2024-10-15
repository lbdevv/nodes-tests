import { Node } from '../../domain/models/Node'
import { NodeRepository } from '../../domain/repositories/NodeRepository'

const buildTree = (nodeId: number, nodeList: any[]): any => {
  const node = nodeList.find((n) => n.id === nodeId);
  if (!node) return null;

  return {
    ...node,
    children: (node.nodeList || []).map((childId: number) => buildTree(childId, nodeList)),
  };
};

export class GetNodeTree {
  private nodeRepository: NodeRepository

  constructor(nodeRepository: NodeRepository) {
    this.nodeRepository = nodeRepository
  }
  
  public async execute(): Promise<Node> {
    const nodes = await this.nodeRepository.getAllNodes()
    return buildTree(1, nodes)
  }
}
