import React from 'react';
import { Area, AreaChart, CartesianGrid, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import './DashBoard.css'

const Dashboard = () => {
    // ---AreaChart data start--
    const data = [
        { "name": "point A", "price": 4000, "money": 2400, },
        { "name": "Point B", "price": 3000, "money": 1398, },
        { "name": "Point C", "price": 2000, "money": 9800, },
        { "name": "point E", "price": 1890, "money": 4800, },
        { "name": "Point F", "price": 2390, "money": 3800, },
        { "name": "point D", "price": 2780, "money": 3908, },
        { "name": "Point G", "price": 3490, "money": 4300, }
    ]
    // ---AreaChart data End---
    // ---pie chart data start--
    const data01 = [
        { "name": "Group A", "value": 500 },
        { "name": "Group B", "value": 400 },
        { "name": "Group C", "value": 350 },
        { "name": "Group D", "value": 250 },
        { "name": "Group E", "value": 278 },
        { "name": "Group F", "value": 239 }];
    const data02 = [
        { "name": "Group A", "value": 2700 },
        { "name": "Group B", "value": 4350 },
        { "name": "Group C", "value": 1268 },
        { "name": "Group D", "value": 8500 },
        { "name": "Group E", "value": 3908 },
        { "name": "Group F", "value": 4800 }
    ];
    //   -----pie chart data End---

    return (
        <div className='rechart'>
            {/* ----area chart start-- */}
            <div>
                <AreaChart width={730} height={500} data={data}>

                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="price" />
                    <Area type="monotone" dataKey="money" />
                </AreaChart>
            </div>
            {/* -----area chart End--- */}
            {/* ---pie chart start-- */}
            <div>
                <PieChart width={730} height={350}>
                    <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#383CC1" />
                    <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#22CB5C" label />
                    <Tooltip />
                </PieChart>
            </div>

        </div >
    );
};

export default Dashboard;