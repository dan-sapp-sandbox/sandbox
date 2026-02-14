export default function StorybookPage() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        src="/storybook/index.html"
        title="Storybook"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
      />
    </div>
  );
}
