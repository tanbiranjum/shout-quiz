import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const Stats = () => {
  const stats = useLoaderData();

  return (
    <div className="flex justify-center mt-12">
      <ResponsiveContainer width="99%" aspect={3}>
        <LineChart width={600} height={300} data={stats.data}>
          <Line type="monotone" dataKey="total" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Stats;
