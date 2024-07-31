import Tour from "./Tour";
const Tours = ({ tours, handleInterest }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((item) => (
          <Tour key={item.id} {...item} handleInterest={handleInterest}/>
        ))}
      </div>
    </section>
  );
};
export default Tours;
