import { type MouseEvent, useMemo } from "react";
import { type Editor } from "slate";
import { toggleMark, isMarkActive, toggleBlock, isBlockActive } from "./slateHelpers";

interface ToolbarProps {
  editor: Editor;
}

const Toolbar = ({ editor }: ToolbarProps) => {
  const activeStates = useMemo(() => {
    return {
      bold: isMarkActive(editor, "bold"),
      italic: isMarkActive(editor, "italic"),
      underline: isMarkActive(editor, "underline"),
      heading: isBlockActive(editor, "heading"),
      list: isBlockActive(editor, "list-item"),
    };
  }, [editor.selection, editor]); // Recompute when selection changes
  const handleClickMark = (e: MouseEvent, mark: "bold" | "italic" | "underline") => {
    e.preventDefault();
    toggleMark(editor, mark);
  };

  const handleClickBlock = (e: MouseEvent, block: "paragraph" | "heading" | "list-item") => {
    e.preventDefault();
    toggleBlock(editor, block);
  };

  const buttonClass = (active: boolean) => `border px-1 rounded ${active ? "bg-gray-300" : ""}`;

  return (
    <div className="flex gap-1 bg-zinc-400">
      {/* Marks */}
      <button className={buttonClass(activeStates.bold)} onMouseDown={(e) => handleClickMark(e, "bold")}>
        B
      </button>
      <button className={buttonClass(activeStates.italic)} onMouseDown={(e) => handleClickMark(e, "italic")}>
        I
      </button>
      <button className={buttonClass(activeStates.underline)} onMouseDown={(e) => handleClickMark(e, "underline")}>
        U
      </button>

      {/* Blocks */}
      <button className={buttonClass(activeStates.heading)} onMouseDown={(e) => handleClickBlock(e, "heading")}>
        H
      </button>
      <button className={buttonClass(activeStates.list)} onMouseDown={(e) => handleClickBlock(e, "list-item")}>
        • List
      </button>
    </div>
  );
};

export default Toolbar;
