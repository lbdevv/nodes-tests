import React from 'react'

interface Node {
  id: number
  node: string
  value: number
  children?: Node[]
}

interface TreeNodeProps {
  node: Node
  onSelect: (node: Node) => void
}

const TreeNode: React.FC<TreeNodeProps> = ({ node, onSelect }) => {
  return (
    <li key={node.id}>
      <span onClick={() => onSelect(node)}>
        {node.node} (Valor: {node.value})
      </span>
      {node.children && (
        <ul>
          {node.children.map((child) => (
            <TreeNode key={child.id} node={child} onSelect={onSelect} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default TreeNode
