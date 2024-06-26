import TextNode from "./html/TextNode";
import OutputNode from "./html/OutputNode";
import ULNode from "./html/ULNode";
import HeaderNode from "./html/HeaderNode";
import DivNode from "./html/DivNode";

// Import other node components here

export interface NodeConfig {
  type: string;
  component: React.FC;
  displayName: string;
  description?: string;
  defaultData?: any;
  category?: string;
}

export const nodeConfigurations: NodeConfig[] = [
  {
    type: "TextNode",
    component: TextNode,
    data: {
      styles: {
        css: "",
      },
    },
    displayName: "Text Node",
    description: "A node for displaying text",
    defaultData: { text: "Default text" },
    category: "Basic",
  },
  {
    type: "OutputNode",
    component: OutputNode,
    displayName: "Output Node",
    description: "A node for outputting data",
    defaultData: { output: [] },
    category: "Basic",
  },
  {
    type: "ULNode",
    component: ULNode,
    data: {
      styles: {
        css: "",
      },
    },
    displayName: "ULNode",
    description: "A node for displaying text",
    defaultData: { text: "Default text" },
    category: "Basic",
  },
  {
    type: "HeaderNode",
    component: HeaderNode,
    data: {
      styles: {
        css: "",
      },
    },
    displayName: "HeaderNode",
    description: "A node for displaying text",
    defaultData: { text: "Default text" },
    category: "Basic",
  },
  {
    type: "DivNode",
    component: DivNode,
    data: {
      styles: {
        css: "",
      },
    },
    displayName: "DivNode",
    description: "A node for displaying text",
    defaultData: { text: "Default text" },
    category: "Basic",
  },
];

// Generate nodeTypes from nodeConfigurations
export const nodeTypes = nodeConfigurations.reduce((acc, config) => {
  acc[config.type] = config.component;
  return acc;
}, {});
