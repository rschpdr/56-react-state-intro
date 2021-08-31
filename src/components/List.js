const arr = ["banana", "maçã", "abacaxi", "goiaba", "uva"];

function List() {
  return (
    <ul>
      {arr.map((fruit, index) => {
        const bgColor = index % 2 === 0 ? "bg-primary" : "";

        return (
          <li key={index} className={bgColor}>
            {fruit}
          </li>
        );
      })}
    </ul>
  );
}

export default List;
