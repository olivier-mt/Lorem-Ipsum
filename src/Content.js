import Description from "./Description";
import Title from "./Title";
import "./App.css";

const Content = (props) => {
  return (
    <div className={props.styleToApply}>
      <Title name={props.title}></Title>

      <Description text={props.text}></Description>
    </div>
  );
};

export default Content;
