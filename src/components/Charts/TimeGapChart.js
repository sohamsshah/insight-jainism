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
import { TIME_BETWEEN_TIRTHANKARS } from "@site/src/data/tirthankars";

const data = TIME_BETWEEN_TIRTHANKARS.map((g) => ({
  name: `${g.index} to ${g.index + 1}`,
  fullName: g.name,
  value: g.years,
  label: g.label,
}));

/** Format axis tick for log scale (years). */
function formatAxisTick(years) {
  if (years >= 1e30) return `10³⁰`;
  if (years >= 1e27) return `10²⁸`;
  if (years >= 1e24) return `10²⁵`;
  if (years >= 1e21) return `10²²`;
  if (years >= 1e18) return `10¹⁹`;
  if (years >= 1e15) return `10¹⁶`;
  if (years >= 1e12) return `10¹³`;
  if (years >= 1e9) return `10¹⁰`;
  if (years >= 1e6) return `10⁷`;
  if (years >= 1e3) return `10⁴`;
  if (years >= 1) return `10¹`;
  return String(Math.round(years));
}

export default function TimeGapChart() {
  return (
    <div style={{ width: "100%", minWidth: 300, height: 720, minHeight: 680 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{ top: 16, right: 24, left: 16, bottom: 120 }}
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
          <YAxis
            type="category"
            dataKey="name"
            width={56}
            tick={{ fontSize: 11 }}
            interval={0}
          />
          <Tooltip
            content={({ active, payload }) =>
              active && payload?.length ? (
                <div style={{ padding: "10px 12px", borderRadius: 8, background: "var(--ifm-background-surface-color)", border: "1px solid var(--ifm-color-emphasis-300)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", minWidth: 200 }}>
                  <div style={{ fontWeight: 600, marginBottom: 6, fontSize: 13 }}>{payload[0].payload.fullName}</div>
                  <div style={{ fontSize: 12, color: "var(--ifm-font-color-secondary)" }}>{payload[0].payload.label}</div>
                </div>
              ) : null
            }
          />
          <Bar
            dataKey="value"
            name="Time gap"
            fill="#6a1b9a"
            radius={[0, 4, 4, 0]}
            maxBarSize={24}
          />
        </BarChart>
      </ResponsiveContainer>
      <p style={{ textAlign: "center", marginTop: 8, fontSize: 12, color: "#666" }}>
        Time between consecutive Tirthankars. Early gaps in Saagar/Kodi/Palya; later in years. Log scale.
      </p>
    </div>
  );
}
