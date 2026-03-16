import { Editor, Transforms, Element as SlateElement } from "slate";

type TextBlock = "paragraph" | "heading" | "list-item";

/* -------------------- Marks -------------------- */
export const isMarkActive = (editor: Editor, format: "bold" | "italic" | "underline") => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

export const toggleMark = (editor: Editor, format: "bold" | "italic" | "underline") => {
  const isActive = isMarkActive(editor, format);
  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

/* -------------------- Blocks -------------------- */
export const isBlockActive = (editor: Editor, format: string) => {
  const [match] = Editor.nodes(editor, {
    match: (n) => !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format,
  });
  return !!match;
};

export const toggleBlock = (editor: Editor, format: TextBlock) => {
  const isActive = isBlockActive(editor, format);
  const isList = format === "list-item";

  // Unwrap any existing list-item blocks
  Transforms.unwrapNodes(editor, {
    match: (n) => SlateElement.isElement(n) && n.type === "list-item",
    split: true,
  });

  // Set new block type
  const newType: string = isActive ? "paragraph" : isList ? "list-item" : format;
  Transforms.setNodes<SlateElement>(
    editor,
    { type: newType as TextBlock },
    {
      match: (n) => SlateElement.isElement(n) && n.type !== "list-item",
    },
  );

  // Wrap in list-item if needed
  if (!isActive && isList) {
    const block: SlateElement = { type: "list-item", children: [] };
    Transforms.wrapNodes(editor, block);
  }
};
