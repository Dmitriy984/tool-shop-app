import React, {Component} from "react";
import withToolShopApi from "../common/hoc/withToolShopApi";
import compose from "../common/utils/compose";
import GoodGridItem from "./GoodGridItem";
import Spinner from "../common/genericComponents/Spinner";
import ErrorIndicator from "../common/genericComponents/ErrorIndicator";
import './GoodGrid.scss';

const GoodGrid = ({goods, onAddedToCart}) => {
    return (
        <div id="grid">
            {goods.map((good) => {
                return (
                    <div key={good.id}>
                        <GoodGridItem
                            good={good}
                            onAddedToCart={() => onAddedToCart(good)}
                        />
                    </div>
                );
            })}
        </div>
    );
};

class GoodGridContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goods: [],
            loading: true,
            error: false
        };
        this.onAddedToCart = this.onAddedToCart.bind(this);
    }

    componentDidMount() {
        this.props.toolShopApi.getGoods()
            .then(goods => {
                this.setState({...this.state, goods: [...goods], loading: false});
            });
    }

    onAddedToCart(good) {
        console.log(good.id);
    }

    render() {
        const {goods, loading, error} = this.state;

        if (loading) {
            return <Spinner/>;
        }

        if (error) {
            return <ErrorIndicator/>;
        }

        return <GoodGrid goods={goods} onAddedToCart={this.onAddedToCart}/>;
    }
}

export default compose(
    withToolShopApi()
)(GoodGridContainer);




