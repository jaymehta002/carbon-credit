import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveBar } from "@nivo/bar"

export default function DashboardAnalytics() {
  return (
    <div className="flex bg-muted/40 mb-4">
      <div className="grid flex-1 items-start gap-4 sm:py-0 md:gap-8 lg:grid-cols-2 xl:grid-cols-2">
        <div className="lg:col-span-1 grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Projects</CardTitle>
              <CardDescription>Breakdown of projects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-4xl font-bold">24</div>
                  <div className="text-muted-foreground">Total Projects</div>
                </div>
              </div>
              <div className="mt-4">
                <BarChart className="w-full aspect-[3/1]" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function BarChart(props:any) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 30, left: 30 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 12,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 12,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              color: "#000",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  )
}
