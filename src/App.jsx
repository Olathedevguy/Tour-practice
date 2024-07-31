import { useEffect, useState } from "react";
import Loading from "./Components/Loading";
const url = "https://www.course-api.com/react-tours-project";
import Tours from "./Components/Tours";
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const handleInterest = (id) => {
    const filterTours = tours.filter((item) => item.id !== id);
    setTours(filterTours);
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data)
      setIsLoading(false);
      setTours(data);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(tours);

  if (isLoading) {
    return <Loading />;
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours</h2>
          <button className="btn" onClick={() => fetchData()}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} handleInterest={handleInterest} />
    </main>
  );
};
export default App;
