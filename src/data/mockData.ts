import { Server, Globe, ShieldCheck, Activity, Terminal } from "lucide-react";

export const HERO_DATA = {
  status: "System Operational",
  title: "The Universal Runtime",
  description: "Serverless GPU inference at the edge. Engineered for the next generation of high-density AI applications.",
  ctaPrimary: "Get Started",
  ctaSecondary: "Read Manifest",
  coord: "COORD: 47.3769° N, 8.5417° E", // Zurich (Swiss Style origin)
  version: "STATUS: ACTIVE / V.2.0.4",
};

export const FEATURES_DATA = [
  {
    id: "01",
    title: "Engineered Latency",
    description:
      "Sub-millisecond inference times achieved through our proprietary edge-caching protocol and bare-metal optimization.",
    icon: Activity,
  },
  {
    id: "02",
    title: "High Throughput",
    description:
      "Parallelized execution pipelines allowing for millions of concurrent requests without degradation in performance stability.",
    icon: Server,
  },
  {
    id: "03",
    title: "Global State",
    description:
      "Synchronized state management across all 35 regions ensuring data consistency regardless of geographic distribution.",
    icon: Globe,
  },
];

export const MESH_DATA = {
  title: "Global Mesh",
  subtitle: "35 REGIONS / 99.99% UPTIME",
  locations: [
    { x: 25, y: 30 },
    { x: 48, y: 25 },
    { x: 75, y: 40 }, // Simplified coordinates
  ],
};

export const BENTO_DATA = {
  uptime: {
    value: "99.99",
    unit: "%",
    label: "Reliability Metric",
    desc: "Guaranteed uptime SLA for enterprise deployments.",
  },
  security: {
    label: "Security",
    standard: "SOC2",
    type: "TYPE II CERTIFIED",
    icon: ShieldCheck,
  },
  partners: ["Vercel", "Supabase", "Docker"],
};
