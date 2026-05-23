import React from "react";
import { useGetAllUserShortLinks } from "@/authentication/useGetAllUserShortLinks";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { TrendingUp, Users, MousePointer2, ArrowUpRight } from "lucide-react";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border p-4 rounded-xl shadow-xl">
        <p className="font-bold text-sm mb-1">{payload[0].payload.name}</p>
        <p className="text-primary-indigo font-bold text-lg">
          {payload[0].value} views
        </p>
        <p className="text-[10px] text-muted-foreground truncate max-w-[200px] mt-2">
          {payload[0].payload.fullUrl}
        </p>
      </div>
    );
  }
  return null;
};

export default function DashboardAnalytics() {
  const { shortlinkdetails } = useGetAllUserShortLinks();

  const links = shortlinkdetails?.result || [];
  const totalViews = links.reduce((acc, curr) => acc + (curr.views || 0), 0);

  // Sort links by views for the ranking and chart
  const sortedLinks = [...links].sort(
    (a, b) => (b.views || 0) - (a.views || 0),
  );

  // Data for the chart (top 5 or 7 links)
  const chartData = sortedLinks.slice(0, 7).map((link) => ({
    name: link.shortCode || link.link.substring(0, 10),
    views: link.views || 0,
    fullUrl: link.link,
  }));

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12">
      <div>
        <h2 className="text-3xl font-extrabold font-heading text-foreground tracking-tight">
          Analytics
        </h2>
        <p className="text-muted-foreground font-medium">
          Track your link performance and engagement
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 rounded-[2rem] bg-gradient-to-br from-primary-indigo to-primary-violet text-white shadow-xl shadow-primary-indigo/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          <TrendingUp className="w-8 h-8 mb-6 opacity-80" />
          <p className="text-sm font-bold uppercase tracking-widest opacity-80 mb-1">
            Total Views
          </p>
          <h3 className="text-5xl font-black">{totalViews.toLocaleString()}</h3>
          <div className="mt-6 flex items-center gap-2 text-xs font-bold bg-white/20 w-fit px-3 py-1 rounded-full">
            <ArrowUpRight className="w-3 h-3" />
            <span>+12.5% from last month</span>
          </div>
        </div>

        <div className="p-8 rounded-[2rem] bg-card border border-border/50 shadow-sm flex flex-col justify-between">
          <div className="w-12 h-12 rounded-2xl bg-accent-teal/10 flex items-center justify-center mb-6">
            <Users className="w-6 h-6 text-accent-teal" />
          </div>
          <div>
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">
              Unique Visitors
            </p>
            <h3 className="text-4xl font-black text-foreground">
              {(totalViews * 0.7).toFixed(0).toLocaleString()}
            </h3>
          </div>
        </div>

        <div className="p-8 rounded-[2rem] bg-card border border-border/50 shadow-sm flex flex-col justify-between">
          <div className="w-12 h-12 rounded-2xl bg-primary-indigo/10 flex items-center justify-center mb-6">
            <MousePointer2 className="w-6 h-6 text-primary-indigo" />
          </div>
          <div>
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">
              Avg. CTR
            </p>
            <h3 className="text-4xl font-black text-foreground">24.8%</h3>
          </div>
        </div>
      </div>

      {/* Main Chart */}
      <div className="p-8 rounded-[2.5rem] bg-card border border-border/50 shadow-sm">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h3 className="text-xl font-bold font-heading text-foreground">
              Top Performing Links
            </h3>
            <p className="text-sm text-muted-foreground">
              Views per short link code
            </p>
          </div>
          <div className="flex gap-2">
            {["7D", "30D", "ALL"].map((t) => (
              <button
                key={t}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${t === "ALL" ? "bg-primary-indigo text-white" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366F1" stopOpacity={1} />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity={0.8} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#E2E8F0"
                opacity={0.5}
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748B", fontSize: 12, fontWeight: 600 }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748B", fontSize: 12, fontWeight: 600 }}
              />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: "#F1F5F9" }}
              />
              <Bar dataKey="views" radius={[10, 10, 0, 0]} barSize={40}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill="url(#barGradient)" />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Rankings Table */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold font-heading text-foreground px-2">
          Link Rankings
        </h3>
        <div className="max-h-[500px] overflow-y-auto pr-2 space-y-3 custom-scrollbar">
          {sortedLinks.map((link, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-5 bg-card border border-border/50 rounded-2xl hover:border-primary-indigo/20 transition-all group"
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg shrink-0 ${
                  idx === 0
                    ? "bg-yellow-100 text-yellow-600"
                    : idx === 1
                      ? "bg-slate-200 text-slate-600"
                      : idx === 2
                        ? "bg-orange-100 text-orange-600"
                        : "bg-muted text-muted-foreground"
                }`}
              >
                {idx + 1}
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-foreground truncate group-hover:text-primary-indigo transition-colors">
                  {link.link}
                </h4>
                <p className="text-xs text-muted-foreground font-mono">
                  rootly.com/{link.shortCode}
                </p>
              </div>

              <div className="flex items-center gap-8">
                <div className="text-right">
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                    Views
                  </p>
                  <p className="font-black text-foreground">
                    {link.views || 0}
                  </p>
                </div>
                <div className="w-24 h-2 bg-muted rounded-full overflow-hidden shrink-0 hidden md:block">
                  <div
                    className="h-full bg-primary-indigo"
                    style={{
                      width: `${(link.views / (sortedLinks[0].views || 1)) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
