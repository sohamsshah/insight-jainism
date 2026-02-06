import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { TIRTHANKARS } from "@site/src/data/tirthankars";

const data = TIRTHANKARS.map((t) => ({
  name: t.index,
  fullName: `${t.index}. ${t.name}`,
  area: t.samavsaranYojan,
  label: `${t.samavsaranYojan} Yojan`,
}));

export default function SamavsaranChart() {
  return (
    <div style={{ width: "100%", minWidth: 300, height: 720, minHeight: 680 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{ top: 16, right: 24, left: 16, bottom: 80 }}
          layout="vertical"
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis type="number" domain={[0, 13]} tick={{ fontSize: 11 }} />
          <YAxis type="category" dataKey="name" width={32} tick={{ fontSize: 11 }} interval={0} />
          <Tooltip
            formatter={(value, name, props) => [props.payload.label, props.payload.fullName]}
            contentStyle={{ borderRadius: 8 }}
          />
          <Bar
            dataKey="area"
            name="Area of Samavsaran"
            fill="#00897b"
            radius={[0, 4, 4, 0]}
            maxBarSize={28}
          />
        </BarChart>
      </ResponsiveContainer>
      <p style={{ textAlign: "center", marginTop: 8, fontSize: 12, color: "#666" }}>
        Area of Samavsaran in Yojan — systematic decrease from 12 (1st) to 1 (24th).
      </p>
    </div>
  );
}
