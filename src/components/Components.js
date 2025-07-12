import { Link } from "react-router";

export const Components = () => {
  return (
    <div className="components-ui">
      <ul>
        <li className="component-li">
          <Link to="/components/fileExplorer">File explorer</Link>
        </li>
        <li className="component-li">
          <Link to="/components/starRating">Start Rating</Link>
        </li>
        <li className="component-li">
          <Link to="/components/listPagination">List Pagination</Link>
        </li>
        <li className="component-li">
          <Link to="/components/infiniteScroll">Infinite Scroll</Link>
        </li>
        <li className="component-li">
          <Link to="/components/trafficLight">Traffic Light</Link>
        </li>
      </ul>
    </div>
  );
};
