import React from "react";

const apiSections = [
  {
    title: "Fetch 1:1 rate",
    description: "Fetching stablecoins for 1 local currency",
    endpoint: "/rates/:stablecoin/fiats",
    method: "GET",
    example: "/rates/USDT/NGN",
    response: [
      {
        stablecoin: "USDT",
        fiat: "NGN",
        buyRate: 560.75,
        sellRate: 590.75,
        sources: ["binance", "paxful"],
        timestamp: "2023-10-01T12:00:00Z",
      },
    ],
  },
  {
    title: "Fetch 1:n rates",
    description:
      "Fetching USDT NGN KES how you can pass the rate for one stable coin for multiple currencies",
    endpoint: "/rates/:stablecoin/fiats",
    method: "GET",
    example: "/rates/USDT/NGN,KES",
    response: [
      {
        stablecoin: "USDT",
        fiat: "NGN",
        buyRate: 560.75,
        sellRate: 590.75,
        sources: ["binance", "paxful"],
        timestamp: "2023-10-01T12:00:00Z",
      },
      {
        stablecoin: "USDT",
        fiat: "KES",
        buyRate: 127.55,
        sellRate: 129,
        sources: ["binance", "localbitcoins"],
        timestamp: "2023-10-01T12:00:00Z",
      },
    ],
  },
  {
    title: "Fetch for all rates for a stablecoin",
    description:
      "Fetch all stablecoin rates across all countries (that we support) for one stablecoin",
    endpoint: "/rates/:stablecoin",
    method: "GET",
    example: "/rates/USDT",
    response: [
      {
        stablecoin: "USDT",
        fiat: "NGN",
        buyRate: 560.75,
        sellRate: 590.75,
        sources: ["binance", "paxful"],
        timestamp: "2023-10-01T12:00:00Z",
      },
      {
        stablecoin: "USDT",
        fiat: "KES",
        buyRate: 127.55,
        sellRate: 129,
        sources: ["binance", "localbitcoins"],
        timestamp: "2023-10-01T12:00:00Z",
      },
      {
        stablecoin: "USDT",
        fiat: "ZAR",
        buyRate: 18.25,
        sellRate: 19,
        sources: ["binance", "paxful"],
        timestamp: "2023-10-01T12:00:00Z",
      },
    ],
  },
];

function DeveloperPage() {
  return (
    <div className="w-full flex flex-col min-h-screen relative pb-32 bg-black text-white">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">For Developers</h1>
        <p className="text-lg md:text-xl mb-8 text-gray-300">
          Get rate data <span className="text-blue-400">rates.noblocks.xyz/for_developers</span>
        </p>

        {/* Path Params */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-3">Path Params</h2>
          <div className="bg-[#18181b] rounded-lg p-6">
            <label className="block text-gray-400 text-lg mb-2 font-medium">
              Reference <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full bg-[#232326] border border-[#232326] rounded-md px-4 py-3 text-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Unique identifier for the rates"
              disabled
            />
          </div>
        </div>

        {/* API Sections */}
        <h2 className="text-2xl font-semibold mb-6">REST API Schema and Endpoint</h2>
        {apiSections.map((section, idx) => (
          <div key={idx} className="mb-14">
            <h3 className="text-xl md:text-2xl font-bold mb-2">{section.title}</h3>
            <p className="text-gray-400 text-lg mb-4">{section.description}</p>
            <div className="bg-[#18181b] rounded-lg p-6 mb-2">
              <div className="flex flex-wrap gap-6 text-lg mb-3">
                <span>
                  <span className="font-semibold text-gray-300">Endpoint:</span>{" "}
                  <span className="bg-[#232326] px-3 py-1 rounded text-blue-300">{section.endpoint}</span>
                </span>
                <span>
                  <span className="font-semibold text-gray-300">Method:</span>{" "}
                  <span className="bg-[#232326] px-3 py-1 rounded text-green-400">{section.method}</span>
                </span>
                <span>
                  <span className="font-semibold text-gray-300">Example:</span>{" "}
                  <span className="bg-[#232326] px-3 py-1 rounded text-yellow-300">{section.example}</span>
                </span>
              </div>
              <div>
                <div className="flex gap-3 mb-2">
                  <span className="bg-green-700 text-green-200 px-3 py-1 rounded text-base">200</span>
                  <span className="bg-red-700 text-red-200 px-3 py-1 rounded text-base">400</span>
                </div>
                <pre className="bg-[#232326] rounded p-4 text-base md:text-lg overflow-x-auto text-gray-200">
                  {JSON.stringify(section.response, null, 2)}
                </pre>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeveloperPage; 