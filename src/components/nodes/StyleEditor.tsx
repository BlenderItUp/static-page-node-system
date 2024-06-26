import React from 'react';
import CodeEditor from './CodeEditor';

interface StyleEditorProps {
  selectedNode: any;
  updateNodeStyle: (nodeId: string, newStyles: { css: string }) => void;
}

const StyleEditor: React.FC<StyleEditorProps> = ({ selectedNode, updateNodeStyle }) => {
  if (!selectedNode) return null;
  const styles = selectedNode.data.styles || {};

  const handleStyleChange = (newCss: string) => {
    updateNodeStyle(selectedNode.id, { css: newCss });
  };

  return (
    <div className="style-editor" style={{width:"20%", minWidth:"30%"}}>
      <h3>Edit Styles {selectedNode.id}</h3>
      <CodeEditor
        initialCode={styles.css || ''}
        onCodeChange={handleStyleChange}
        nodeId={selectedNode.id}
      />
    </div>
  );
};

export default StyleEditor;
