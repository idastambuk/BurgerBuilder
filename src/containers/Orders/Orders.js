import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    };

    componentDidMount() {
        this.props.onFetchOrders(this.props.token, this.props.userId);
    }

    render () {
        let orders = <Spinner/>;
        if(!this.props.loading) {
            orders = this.props.orders.map(order => (
                        <Order
                            key={order.id}
                            ingredients={order.ingredients}
                            price={order.price} />
                    ))
        }
        return (
            <div>
                {orders}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
 return {
     onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
 }};

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        orders: state.order.orders,
        loading: state.order.loading,
        userId: state.auth.userId
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));