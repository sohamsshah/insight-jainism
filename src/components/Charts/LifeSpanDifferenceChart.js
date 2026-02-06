import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import {
  TIRTHANKARS,
  getLifeSpanYears,
  getLifeSpanDifferenceYears,
  formatYearsLabel,
} from "@site/src/data/tirthankars";

const data = TIRTHANKARS.map((t, i) => {
  const prev = i > 0 ? TIRTHANKARS[i - 1] : null;
  const diffYears = getLifeSpanDifferenceYears(t, prev);
  if (diffYears == null) return null;
  const prevYears = getLifeSpanYears(prev);
  const currYears = getLifeSpanYears(t);
  return {
    name: `${t.index}. ${t.name}`,
    difference: diffYears,
    tooltip: `Decrease: ${formatYearsLabel(diffYears)} (${formatYearsLabel(prevYears)} → ${formatYearsLabel(currYears)})`,
  };
}).filter(Boolean);

function formatAxisTick(years) {
  if (years >= 1e18) return `10²⁰`;
  if (years >= 1e15) return `10¹⁷`;
  if (years >= 1e12) return `10¹³`;
  if (years >= 1e9) return `10¹⁰`;
  if (years >= 1e6) return `10⁷`;
  if (years >= 1e3) return `10⁴`;
  if (years >= 1) return `10¹`;
  return String(years);
}

export default function LifeSpanDifferenceChart() {
  return (
    <div style={{ width: "100%", minWidth: 300, height: 420, minHeight: 400 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{ top: 16, right: 24, left: 16, bottom: 80 }}
          layout="vertical"
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis
            type="number"
            scale="log"
            domain={["auto", "auto"]}
            tickFormatter={formatAxisTick}
          />
          <YAxis type="category" dataKey="name" width={100} tick={{ fontSize: 11 }} />
          <Tooltip
            formatter={(value, name, props) => [props.payload.tooltip, "Decrease (years)"]}
            contentStyle={{ borderRadius: 8 }}
          />
          <ReferenceLine x={0} stroke="#666" />
          <Bar
            dataKey="difference"
            name="Decrease from previous"
            fill="#c62828"
            radius={[0, 4, 4, 0]}
            maxBarSize={28}
          />
        </BarChart>
      </ResponsiveContainer>
      <p style={{ textAlign: "center", marginTop: 8, fontSize: 12, color: "#666" }}>
        Decrease in life span (in years) from the previous Tirthankar. Log scale.
      </p>
    </div>
  );
}
