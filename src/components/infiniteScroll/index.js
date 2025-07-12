import React, { useEffect, useState, useRef, useCallback } from "react";

/**
 * TODO : Implement it on your own
 * @returns 
 */

function InfiniteScrollList() {
  const [items, setItems] = useState([]);
  const [start, setStart] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  const loadItems = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=10`
    );
    const data = await res.json();

    setItems((prev) => [...prev, ...data]);
    setStart((prev) => prev + 10);
    setHasMore(data.length > 0);
    setLoading(false);
  }, [start, loading, hasMore]);

  useEffect(() => {
    loadItems();
  }, [loadItems]);

  const lastItemRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadItems();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loadItems, loading, hasMore]
  );

  return (
    <div>
      <h2>Infinite Scroll</h2>
      <ul>
        {items.map((item, index) => {
          if (index === items.length - 1) {
            return (
              <li key={item.id} ref={lastItemRef}>
                #{item.id} - {item.title}
              </li>
            );
          }
          return (
            <li key={item.id}>
              #{item.id} - {item.title}
            </li>
          );
        })}
      </ul>
      {loading && <p>Loading more...</p>}
      {!hasMore && <p>No more items.</p>}
    </div>
  );
}

export default InfiniteScrollList;
