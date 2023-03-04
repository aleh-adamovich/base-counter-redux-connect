import {connect} from "react-redux";
import * as actions from "../store/actions";

const Counter = ({ counter, inc, rnd }) => {
  return (
    <div className='wrapper'>
      <h3>{counter}</h3>
      <button onClick={inc}>+</button>
      <button onClick={rnd}>1-5</button>
    </div>
  )
}

const mapStateToProps = ({counter}) => ({
  counter
});

export default connect(mapStateToProps, actions)(Counter);
