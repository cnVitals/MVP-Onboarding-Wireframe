import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const BodyGraph = () => {
  const data = [
    { metric: "Revenue", value: 80 },
    { metric: "Growth", value: 65 },
    { metric: "Engagement", value: 90 },
  ];

  return (
    <div className="mt-4">
      <h4>Body Graph</h4>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="metric" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#007bff" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BodyGraph;
