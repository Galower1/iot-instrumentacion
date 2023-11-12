<script lang="ts">
  import "@carbon/charts-svelte/styles.css";
  import { ChartTheme, LineChart, ScaleTypes, type LineChartOptions } from "@carbon/charts-svelte";
  import { modulesStore } from "../stores/modulesStore";

  let tick = 0;

  type TemperatureHumidityCoeficient = {
    group: string;
    value: number;
    time: Date;
  };

  let temperatureCoeficientValues: TemperatureHumidityCoeficient[] = [
    {
      group: "Grupo 1",
      value: 0,
      time: new Date(),
    },
  ];

  const temperatureHumidityGraph: LineChartOptions = {
    title: "Coeficiente Temperatura-Humedad Vs. Tiempo",
    axes: {
      bottom: {
        title: "Tiempo",
        mapsTo: "time",
        scaleType: ScaleTypes.TIME,
      },
      left: {
        title: "Coeficiente Temperatura-Humedad",
        mapsTo: "value",
        scaleType: ScaleTypes.LINEAR,
      },
    },
    curve: "curveMonotoneX",
    height: "400px",
    theme: ChartTheme.G100,
  };

  const getTemperatureHumidityCoeficient = (temperature: number, humidity: number): TemperatureHumidityCoeficient => {
    return {
      group: "Grupo 1",
      value: (temperature * 100) / humidity,
      time: new Date(),
    };
  };

  modulesStore.subscribe((data) => {
    setTimeout(() => {
      temperatureCoeficientValues.push(getTemperatureHumidityCoeficient(data.temperatures[1], data.Humidity));
      temperatureCoeficientValues = temperatureCoeficientValues;
    }, 3000);
    tick++;
  });
</script>

<div class="graphs">
  <h1>Graphs</h1>
  <LineChart options={temperatureHumidityGraph} data={temperatureCoeficientValues} />
</div>

<style>
  .graphs {
    display: flex;
    align-self: center;
    flex-direction: column;
    justify-content: center;
  }
</style>
