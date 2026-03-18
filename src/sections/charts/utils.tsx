import Papa, { type ParseResult } from "papaparse";

export const csvFileToJson = (file: File): Promise<Record<string, string | number>[]> => {
  return new Promise((resolve, reject) => {
    Papa.parse<Record<string, string | number>>(file, {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: true, // <-- automatically converts numeric strings to numbers
      complete: (results: ParseResult<Record<string, string | number>>) => {
        resolve(results.data);
      },
      error: (err) => reject(err),
    });
  });
};

export const darkOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        color: "#ffffff",
      },
    },
    tooltip: {
      titleColor: "#ffffff",
      bodyColor: "#ffffff",
    },
    title: {
      display: true,
      text: "",
      color: "#ffffff",
      font: {
        size: 24,
        weight: "bold" as const,
      },
      padding: {
        top: 10,
        bottom: 20,
      },
    },
    zoom: {
      pan: {
        enabled: true,
        mode: "x" as const,
      },
      zoom: {
        wheel: { enabled: true },
        pinch: { enabled: true },
        mode: "x" as const,
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#ffffff",
      },
      grid: {
        color: "#dedede",
      },
    },
    y: {
      ticks: {
        color: "#ffffff",
      },
      grid: {
        color: "#dedede",
      },
    },
  },
};

export const lightOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        color: "#000000",
      },
    },
    tooltip: {
      titleColor: "#ffffff",
      bodyColor: "#ffffff",
    },
    title: {
      display: true,
      text: "",
      color: "#000000",
      font: {
        size: 24,
        weight: "bold" as const,
      },
      padding: {
        top: 10,
        bottom: 20,
      },
    },
    zoom: {
      pan: {
        enabled: true,
        mode: "x" as const,
      },
      zoom: {
        wheel: { enabled: true },
        pinch: { enabled: true },
        mode: "x" as const,
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#000000",
      },
      grid: {
        color: "#dedede",
      },
    },
    y: {
      ticks: {
        color: "#000000",
      },
      grid: {
        color: "#dedede",
      },
    },
  },
};
