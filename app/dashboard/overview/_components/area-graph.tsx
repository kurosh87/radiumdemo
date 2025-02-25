'use client';

import { TrendingUp } from 'lucide-react';
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';

const chartData = [
  { time: '00:00', gpu: 45, memory: 38 },
  { time: '04:00', gpu: 52, memory: 45 },
  { time: '08:00', gpu: 78, memory: 68 },
  { time: '12:00', gpu: 85, memory: 72 },
  { time: '16:00', gpu: 92, memory: 85 },
  { time: '20:00', gpu: 68, memory: 62 }
];

const chartConfig: ChartConfig = {
  gpu: {
    label: 'GPU Usage',
    color: 'hsl(var(--chart-1))',
    theme: {
      backgroundColor: 'hsl(var(--chart-1))',
      borderColor: 'hsl(var(--chart-1))'
    }
  },
  memory: {
    label: 'Memory Usage',
    color: 'hsl(var(--chart-2))',
    theme: {
      backgroundColor: 'hsl(var(--chart-2))',
      borderColor: 'hsl(var(--chart-2))'
    }
  }
};

export function AreaGraph() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resource Utilization Trends</CardTitle>
        <CardDescription>24-hour GPU and memory usage patterns</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[310px] w-full"
        >
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="time"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="memory"
              type="monotone"
              fill={chartConfig.memory.theme?.backgroundColor}
              fillOpacity={0.2}
              stroke={chartConfig.memory.theme?.borderColor}
              strokeWidth={2}
            />
            <Area
              dataKey="gpu"
              type="monotone"
              fill={chartConfig.gpu.theme?.backgroundColor}
              fillOpacity={0.2}
              stroke={chartConfig.gpu.theme?.borderColor}
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Peak utilization at 16:00 (92% GPU, 85% Memory){' '}
              <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Last 24 hours
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
