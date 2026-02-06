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
import { TIRTHANKARS, getLifeSpanYears, formatYearsLabel } from "@site/src/data/tirthankars";

const data = TIRTHANKARS.map((t) => {
  const years = getLifeSpanYears(t);
  const calculatedLabel = formatYearsLabel(years);
  const originalLabel = t.lifeSpanLabel ?? calculatedLabel;
  return {
    name: t.index,
    fullName: `${t.index}. ${t.name}`,
    value: years,
    label: `${t.index}. ${t.name} - ${originalLabel} (${calculatedLabel})`,
  };
});

/** Format axis tick for log scale (years). */
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

export default function LifeSpanChart() {
  return (
    <div style={{ width: "100%", minWidth: 300, height: 720, minHeight: 680 }}>
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
            allowDataOverflow
          />
          <YAxis type="category" dataKey="name" width={32} tick={{ fontSize: 11 }} interval={0} />
          <Tooltip
            content={({ active, payload }) =>
              active && payload?.length ? (
                <div style={{ padding: "8px 12px", borderRadius: 8, background: "var(--ifm-background-surface-color)", border: "1px solid var(--ifm-color-emphasis-300)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
                  {payload[0].payload.label}
                </div>
              ) : null
            }
          />
          <Bar
            dataKey="value"
            name="Life span"
            fill="#1565c0"
            radius={[0, 4, 4, 0]}
            maxBarSize={28}
          />
        </BarChart>
      </ResponsiveContainer>
      <p style={{ textAlign: "center", marginTop: 8, fontSize: 12, color: "#666" }}>
        All life spans in years (1 Purva = 70,560,000,000,000 years). Log scale.
      </p>
    </div>
  );
}
