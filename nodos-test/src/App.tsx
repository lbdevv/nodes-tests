import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Tree from './components/Tree.tsx'

interface Node {
  id: number;
  node: string;
  value: number;
  children?: Node[];
}

function App() {
  const [tree, setTree] = useState<Node | null>(null)
  const [selectedNodeValue, setSelectedNodeValue] = useState<number | null>(null)

  useEffect(() => {
    axios.get<Node>('http://localhost:3000/api/nodes').then((response) => {
      setTree(response.data)
    })
  }, [])

  const calculateTotalValue = (node: Node): number => {
    if (!node.children) {
      return node.value
    }
    return node.value + node.children.reduce((acc, child) => acc + calculateTotalValue(child), 0)
  }

  const handleNodeSelect = (node: Node) => {
    const totalValue = calculateTotalValue(node);
    setSelectedNodeValue(totalValue);
  }

  return (
    <div>
      <h1>Árbol de Nodos</h1>
      {selectedNodeValue !== null && (
        <p>Suma total del nodo seleccionado: {selectedNodeValue}</p>
      )}
      <Tree tree={tree} onSelect={handleNodeSelect} />
    </div>
  )
}

export default App
