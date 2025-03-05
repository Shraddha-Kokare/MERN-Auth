import React, { useEffect } from 'react';

function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <df-messenger
        intent="WELCOME"
        chat-title="PizzaOrder2"
        agent-id="f654804d-e6dc-4238-9451-9b0dbdea00eb"
        language-code="en"
      ></df-messenger>
    </div>
  );
}

export default Home;
