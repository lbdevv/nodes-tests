// src/infrastructure/repositories/InMemoryNodeRepository.ts
import { NodeRepository } from './../domain/repositories/NodeRepository'
import { Node } from './../domain/models/Node'

const nodes: Node[] = [
  { id: 1, node: 'root node', value: 15, nodeList: [2, 3, 4] },
  { id: 2, node: 'branch 1', value: 15, nodeList: [5, 6] },
  { id: 3, node: 'branch 2', value: 15, nodeList: [7, 8, 9] },
  { id: 4, node: 'branch 3', value: 15, nodeList: [10, 11, 12, 13] },
  { id: 5, node: 'branch 1.1', value: 10, nodeList: [14, 15] },
  { id: 6, node: 'branch 1.2', value: 10, nodeList: [16, 17] },
  { id: 7, node: 'branch 2.1', value: 10, nodeList: [18, 19, 20] },
  { id: 8, node: 'branch 2.2', value: 10 },
  { id: 9, node: 'branch 2.3', value: 10 },
  { id: 10, node: 'branch 3.1', value: 10, nodeList: [21, 22] },
  { id: 11, node: 'branch 3.2', value: 10 },
  { id: 12, node: 'branch 3.3', value: 10 },
  { id: 13, node: 'branch 3.4', value: 10, nodeList: [23, 24] },
  { id: 14, node: 'branch 1.1.1', value: 5 },
  { id: 15, node: 'branch 1.1.2', value: 5 },
  { id: 16, node: 'branch 1.2.1', value: 5 },
  { id: 17, node: 'branch 1.2.2', value: 5 },
  { id: 18, node: 'branch 2.1.1', value: 5 },
  { id: 19, node: 'branch 2.1.2', value: 5 },
  { id: 20, node: 'branch 2.1.3', value: 5 },
  { id: 21, node: 'branch 3.1.1', value: 5 },
  { id: 22, node: 'branch 3.1.2', value: 5 },
  { id: 23, node: 'branch 3.4.1', value: 5 },
  { id: 24, node: 'branch 3.4.2', value: 5 },
];

export class InMemoryNodeRepository implements NodeRepository {
  public async getAllNodes(): Promise<Node[]> {
    return nodes;
  }
}


