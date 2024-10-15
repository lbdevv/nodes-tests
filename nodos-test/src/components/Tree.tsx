// src/components/Tree.tsx
import React from 'react'
import TreeNode from './Treenode'

interface Node {
  id: number
  node: string
  value: number
  children?: Node[]
}

interface TreeProps {
  tree: Node | null
  onSelect: (node: Node) => void
}

const Tree: React.FC<TreeProps> = ({ tree, onSelect }) => {
  if (!tree) return <p>Cargando...</p>

  return (
    <ul>
      <TreeNode node={tree} onSelect={onSelect} />
    </ul>
  )
}

export default Tree
