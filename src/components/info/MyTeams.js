import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { List, Card } from 'antd';

const data = [
    {
        title: 'Team 1',
    },
    {
        title: 'Team 2',
    },
    {
        title: 'Team 3',
    },
    {
        title: 'Team 4',
    },
];

class MyTeams extends Component {
    render() {
        return (
            <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <Card id="card" title={item.title}>Team Details</Card>
                    </List.Item>
                )}
            />
        );
    }
}

export default MyTeams;
