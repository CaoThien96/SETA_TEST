import React, {Component} from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import Row from "antd/es/grid/row";
import Table from "antd/es/table/Table";
import Button from "antd/es/button/button";
import Modal from "antd/es/modal/Modal";

import WrappedHorizontalLoginForm from "./components/FormNew";
import {fetchSuccess} from './actions'
import {findLengthAppearMost} from '../NodejsTest/common/getHashMap'
const columns = [
    {
        title: 'User Id',
        dataIndex: 'userId',
        key: 'userId',
    },
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Body',
        dataIndex: 'body',
        key: 'body',
    },
];
class Index extends Component {
    constructor(props) {
        super(props);
        this.state={
            visible:false,
        }
    }
    componentWillMount(){
        console.log(this.props)
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>res.data).then(data=>{
            this.props.fetchSuccess(data)
        })
        console.log({max:findLengthAppearMost(['a', 'ab', 'abc', 'cd'])})
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    handleNewSuccess = ()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>res.data).then(data=>{
            this.props.fetchSuccess(data)
        })
        this.handleCancel();
    }
    render() {
        console.log(this.props.docs)
        const {docs} = this.props;
        const {visible} = this.state;
        console.log({docs})
        return (
            <div>
                <Row>
                    <Button onClick={this.showModal}>New</Button>
                    <Modal
                        title="New Post"
                        visible={visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        footer={false}
                    >
                        <WrappedHorizontalLoginForm handleNewSuccess = {this.handleNewSuccess}/>
                    </Modal>
                </Row>
               <Row>
                   <Table dataSource={docs} columns={columns} />
               </Row>

            </div>

        );
    }
}
const mapStateToProps = (state)=>{
    return {
        ...state,
        docs:state.reactTestReducers.docs
    }
}
const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchSuccess: (payload) => dispatch(fetchSuccess(payload))
})
export default connect(mapStateToProps,mapDispatchToProps)(Index);