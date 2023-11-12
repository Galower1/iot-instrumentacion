<script lang="ts">
  import "@carbon/charts-svelte/styles.css";
  import { ChartTheme, LineChart, ScaleTypes, type LineChartOptions } from "@carbon/charts-svelte";
  import { modulesStore } from "../stores/modulesStore";
  import { onMount } from "svelte";
  import BackButton from "../components/BackButton.svelte";

  type TemperatureHumidityCoeficient = {
    group: string;
    value: number;
    time: Date;
  };

  type PressureVsTime = TemperatureHumidityCoeficient;

  type TemperatureVsTime = PressureVsTime;

  const defaultGroup = {
    group: "Grupo 1",
    value: 0,
    time: new Date(),
  };

  let temperatureCoeficientValues: TemperatureHumidityCoeficient[] = [defaultGroup];

  let pressureVsTimeValues: PressureVsTime[] = [defaultGroup];

  let temperatureVsTimeValues: TemperatureVsTime[] = [defaultGroup];

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

  const pressureVsTime: LineChartOptions = {
    title: "Presión vs Tiempo",
    axes: {
      bottom: {
        title: "Tiempo",
        mapsTo: "time",
        scaleType: ScaleTypes.TIME,
      },
      left: {
        title: "Presión",
        mapsTo: "value",
        scaleType: ScaleTypes.LINEAR,
      },
    },
    curve: "curveMonotoneX",
    height: "400px",
    theme: ChartTheme.G100,
  };

  const temperatureVsTime: LineChartOptions = {
    title: "Temperatura vs Tiempo",
    axes: {
      bottom: {
        title: "Tiempo",
        mapsTo: "time",
        scaleType: ScaleTypes.TIME,
      },
      left: {
        title: "Temperatura",
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
      value: (temperature * 100) / (humidity || 1),
      time: new Date(),
    };
  };

  onMount(() => {
    const interval = setInterval(() => {
      temperatureCoeficientValues = [
        ...temperatureCoeficientValues,
        getTemperatureHumidityCoeficient($modulesStore.temperatures[1], $modulesStore.Humidity),
      ];

      pressureVsTimeValues = [
        ...pressureVsTimeValues,
        { group: "Grupo 1", value: $modulesStore.Pressure, time: new Date() },
      ];

      temperatureVsTimeValues = [
        ...temperatureVsTimeValues,
        { group: "Grupo 1", value: $modulesStore.temperatures[2], time: new Date() },
      ];
    }, 800);

    return () => clearInterval(interval);
  });
</script>

<div class="graphs">
  <h1>Graphs</h1>
  <BackButton />
  <LineChart options={temperatureHumidityGraph} data={temperatureCoeficientValues} />
  <LineChart options={pressureVsTime} data={pressureVsTimeValues} />
  <LineChart options={temperatureVsTime} data={temperatureVsTimeValues} />
</div>

<style>
  .graphs {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
</style>
