//connect redux with react
//import react-redux , action and component
//use mapDispatchToProps -- This method is used to render the action creators with props to the component.
//use mapStateToProps  -- This method is used to render the stored data to the component.

import { connect } from "react-redux";
import Home from "../components/Home";
import { addToCart } from "../Services/Actions/actions"


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data))
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);


// export default Home;