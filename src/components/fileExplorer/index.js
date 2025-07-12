import FileExplorer from "./FileExplorer";

import { filesData } from "../shared/data";

export default function FileExplorerWrapper() {
  return <FileExplorer data={filesData} />;
}
