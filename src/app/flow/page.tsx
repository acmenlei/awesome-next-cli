"use client";

import React, { useCallback, useMemo, useState } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  type Connection,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";
import TextUpdaterNode from "./components/TextUpdaterNode";

import "reactflow/dist/style.css";
import {
  ReactFlowSize,
  backgroundVariant,
  initialEdges,
  initialNodes,
} from "./constants";

export default function App() {
  // const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  // const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // const onConnect = useCallback(
  //   (params: Connection) => setEdges((eds) => addEdge(params, eds)),
  //   [setEdges]
  // );
  const nodeTypes = useMemo(() => ({ textUpdater: TextUpdaterNode }), []);

  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState([]);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );
  return (
    <div style={ReactFlowSize}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background variant={backgroundVariant} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
