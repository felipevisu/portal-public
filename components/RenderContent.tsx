"use client";
import { convertFromRaw, convertToRaw, EditorState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";

export const RenderContent = ({ content }: { content: string }) => {
  const generated = EditorState.createWithContent(
    convertFromRaw(JSON.parse(content))
  );
  const html = stateToHTML(generated.getCurrentContent());
  return (
    <div
      className="draft-js-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
