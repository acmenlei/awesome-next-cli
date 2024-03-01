import { type CSSProperties } from "react";
import { BackgroundVariant, Edge, Node } from "reactflow";

export const backgroundVariant = "dots" as BackgroundVariant;
/**
 * 图谱中初始化节点
 */
export const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
] as Node[];
/**
 * 图谱中所有边
 */
export const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
] as Edge[];
/**
 * 图谱大小
 */
export const ReactFlowSize = {
  width: "100vw",
  height: "100vh",
} as CSSProperties;
