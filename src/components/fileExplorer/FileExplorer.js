import { useMemo, useState } from "react";

export default function FileExplorer({ data }) {
  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => {
      const aIsFolder = a?.children?.length > 0 ? true : false;
      const bIsFolder = b?.children?.length > 0 ? true : false;

      if (aIsFolder && !bIsFolder) return -1;
      if (!aIsFolder && bIsFolder) return 1;

      return a.name.localeCompare(b.name);
    });
  }, [data]);
  return (
    <div>
      <h1>File Explorer</h1>
      {sortedData.map((item) => {
        return <FileNode key={item.id} node={item} />;
      })}
    </div>
  );
}

function FileNode({ node }) {
  const { name, children } = node;
  const [isExpanded, setIsExpanded] = useState(false);

  const hasChildren = children?.length > 0 ? true : false;

  const sortedChildren = hasChildren
    ? [...children].sort((a, b) => {
        const aIsFolder = a?.children?.length > 0 ? true : false;
        const bIsFolder = b?.children?.length > 0 ? true : false;

        if (aIsFolder && !bIsFolder) return -1;
        if (!aIsFolder && bIsFolder) return 1;

        return a.name.localeCompare(b.name);
      })
    : null;

  const handleFolderExpand = () => {
    if (hasChildren) {
      setIsExpanded((prev) => !prev);
    }
  };

  return (
    <div style={{ marginLeft: "10px" }}>
      <div onClick={handleFolderExpand}>
        {hasChildren && (
          <strong style={{ textDecoration: "underline" }}>{name}</strong>
        )}
        <span>{hasChildren ? (isExpanded ? " [-] " : " [+] ") : ""}</span>
        {!hasChildren && name}
      </div>
      {isExpanded &&
        hasChildren &&
        sortedChildren.map((item) => <FileNode key={item.id} node={item} />)}
    </div>
  );
}
