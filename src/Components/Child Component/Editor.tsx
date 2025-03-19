import { useEffect, useRef } from "react";

interface WYSIWYGEditorProps {
  id: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange?: (value: string) => void;
}

const WYSIWYGEditor: React.FC<WYSIWYGEditorProps> = ({ id, name, placeholder, value, onChange }) => {
  const editorRef = useRef<HTMLDivElement>(null);

  const execCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value || "");
  };

  // Handle input changes
  const handleInput = () => {
    if (editorRef.current) {
      const newContent = editorRef.current.innerHTML;
      onChange?.(newContent);
    }
  };

  useEffect(() => {
    if (editorRef.current && !editorRef.current.innerHTML) {
      editorRef.current.innerHTML = value;
    }
  }, [value]);
  return (

    <div className="w-full  mx-auto mt-4 p-4 border rounded-lg shadow-lg bg-white">

      <div className="flex gap-2 mb-4 border-b pb-2">
        <button type="button" onClick={() => execCommand("bold")} className="px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300">B</button>
        <button type="button" onClick={() => execCommand("italic")} className="px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300 italic">I</button>
        <button type="button" onClick={() => execCommand("underline")} className="px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300">U</button>
        <button type="button" onClick={() => execCommand("insertOrderedList")} className="px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300">1.</button>
        <button type="button" onClick={() => execCommand("insertUnorderedList")} className="px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300">•</button>
        <select
          onChange={(e) => execCommand("fontName", e.target.value)}
          className="px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300"
        >
          <option value="Arial">Arial</option>
          <option value="Courier New">Courier New</option>
          <option value="Georgia">Georgia</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Verdana">Verdana</option>
        </select>

        <select
          onChange={(e) => execCommand("fontSize", e.target.value)}
          className="px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300"
        >
          <option value="1">Extra Small</option>
          <option value="2">Small</option>
          <option value="3" selected>Normal</option>
          <option value="4">Large</option>
          <option value="5">Extra Large</option>
          <option value="6">Huge</option>
          <option value="7">Massive</option>
        </select>
      </div>
      <div
        id={id}
        ref={editorRef}
        contentEditable

        className="w-full h-32 border  p-3 rounded overflow-y-auto focus:outline-none break-words whitespace-pre-wrap"

        onInput={handleInput}
      ></div>
      <input
        type="hidden"
        name={name}
        value={value}
        placeholder={placeholder}
      />

    </div>
  );
};

export default WYSIWYGEditor;
