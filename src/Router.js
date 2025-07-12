import { Route, Routes } from "react-router";

import App from "./App";
import { Home } from "./components/Home";
import { Components } from "./components/Components";

import FileExplorerWrapper from "./components/fileExplorer/index";
import InfiniteScrollList from "./components/infiniteScroll";
import PaginatedView from "./components/pagination";
import StarRatingWrapper from "./components/starRating/index";
import { TrafficLight } from "./components/trafficLights";

export const MyRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="components">
          <Route index element={<Components />} />
          <Route path="fileExplorer" element={<FileExplorerWrapper />} />
          <Route path="starRating" element={<StarRatingWrapper />} />
          <Route path="listPagination" element={<PaginatedView />} />
          <Route path="infiniteScroll" element={<InfiniteScrollList />} />
          <Route path="trafficLight" element={<TrafficLight />} />
        </Route>
      </Route>
    </Routes>
  );
};
