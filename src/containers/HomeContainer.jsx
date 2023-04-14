//connect redux with react
//import react-redux , action and component
//use mapDispatchToProps -- This method is used to render the action creators with props to the component.
//use mapStateToProps  -- This method is used to render the stored data to the component.

import { connect } from "react-redux";
import Home from "../components/Home";
import { addToCart } from "../Services/Actions/actions"

//Used to recieve data from reducer(state is data recieved from reducer) and then that data used in react component
const mapStateToProps = state => ({
    cardData: state
});

//Used to send action to the component to be used as an action from component
const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data))
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);


// export default Home;