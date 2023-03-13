import React from 'react'

export default function time() {
  const [data, setData] = useState<number[]>([]);
  const [needLoading, setNeedLoading] = useState<boolean>(false);
  const loading = loadingByPage(bigData);

  useEffect(() => {
    const ele = document.getElementById("loading") as Element;
    const intersectionObserver = new IntersectionObserver(function (entries) {
      if (entries[0].intersectionRatio > 0) {
        setNeedLoading(true);
      }
    });
    /**
     * IntersectionObserver
     */
    intersectionObserver.observe(ele);
    return () => {
      intersectionObserver.unobserve(ele);
      intersectionObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (needLoading) {
      const getData = loading();
      setData([...data, ...getData]);
      setNeedLoading(false);
    }
  }, [needLoading]);
  return (
    <div>
      <ul>
        {data.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <div id="loading">loading</div>
    </div>
  );
}
