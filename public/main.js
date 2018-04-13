const React = require("react");
const ReactDom = require("react-dom");

const ListItem = () => {
  return (
    <li className="notice">
      <div className="notice__header">
        <img
          className="notice__img"
          src="https://media.licdn.com/mpr/mpr/shrinknp_100_100/AAIA_wDGAAAAAQAAAAAAAA2_AAAAJGQ3YjczOTBiLWMyY2MtNDI5OS1iYTA1LTEwZGQ2MWJiZGI3OQ.jpg"
        />
        <p className="notice__name">Fredrik Christenson</p>
      </div>
      <p className="notice__message">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim earum, unde tempora libero dolores quis voluptatibus nobis? Quia ducimus vel quaerat. Molestiae laborum eaque enim unde! Quidem voluptate nam sed?
      </p>
    </li>
  );
};

const App = () => {
  const list = [];
  for (let i = 0; i < 20; i++) {
    list.push(<ListItem key={i} />);
  }

  return (
    <ul className="notice-list">
      {list}
    </ul>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
