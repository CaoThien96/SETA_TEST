import React from 'react';
import Row from "antd/es/grid/row";
import Col from "antd/es/grid/col";
import ReactTest from './ReactTest'
const Layout = ()=>{
    return (
        <Row>
            <Col span={14} offset={5}>
                <ReactTest/>
            </Col>

        </Row>
    )
}
export default Layout