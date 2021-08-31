const language = "en";

function Conditional() {
  function renderGreeting(language) {
    if (language === "pt") {
      return <h1>Olá mundo</h1>;
    } else if (language === "en") {
      return <h1>Hello world</h1>;
    } else {
      return <h1>Hola mundo</h1>;
    }
  }

  return <div>{renderGreeting(language)}</div>;
}

export default Conditional;
