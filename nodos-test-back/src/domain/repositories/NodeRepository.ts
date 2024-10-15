import { Node } from '../models/Node';

export interface NodeRepository {
  getAllNodes(): Promise<Node[]>;
}
