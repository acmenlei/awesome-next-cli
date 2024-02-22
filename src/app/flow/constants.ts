import { type CSSProperties } from "react";
import { BackgroundVariant } from "reactflow";

export const backgroundVariant = "dots" as BackgroundVariant;

export const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];

export const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export const ReactFlowSize = {
  width: "100vw",
  height: "100vh",
} as CSSProperties;
