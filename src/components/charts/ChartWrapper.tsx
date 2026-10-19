export default function ChartWrapper({ children }: any) {
  return (
    <div className="border rounded-xl p-4 shadow-sm bg-background">
      <h2 className="text-lg font-semibold mb-4">Contest Rating Progress</h2>
      {children}
    </div>
  );
}
