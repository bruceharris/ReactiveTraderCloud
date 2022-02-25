import { AnalyticsService } from "@/generated/TradingGateway"
import { of } from "rxjs"

const fakeAnalytics = {
  currentPositions: [
    {
      symbol: "NZDUSD",
      basePnl: 0.0,
      baseTradedAmount: 0.0,
      counterTradedAmount: 0.0,
    },
    {
      symbol: "USDJPY",
      basePnl: 0.0,
      baseTradedAmount: 0.0,
      counterTradedAmount: 0.0,
    },
    {
      symbol: "GBPJPY",
      basePnl: 0.0,
      baseTradedAmount: 0.0,
      counterTradedAmount: 0.0,
    },
    {
      symbol: "EURJPY",
      basePnl: 0.0,
      baseTradedAmount: 0.0,
      counterTradedAmount: 0.0,
    },
    {
      symbol: "EURCAD",
      basePnl: 0.0,
      baseTradedAmount: 0.0,
      counterTradedAmount: 0.0,
    },
    {
      symbol: "EURUSD",
      basePnl: 0.0,
      baseTradedAmount: 0.0,
      counterTradedAmount: 0.0,
    },
    {
      symbol: "EURAUD",
      basePnl: 0.0,
      baseTradedAmount: 0.0,
      counterTradedAmount: 0.0,
    },
    {
      symbol: "GBPUSD",
      basePnl: 0.0,
      baseTradedAmount: 0.0,
      counterTradedAmount: 0.0,
    },
    {
      symbol: "AUDUSD",
      basePnl: 0.0,
      baseTradedAmount: 0.0,
      counterTradedAmount: 0.0,
    },
  ],
  history: [
    { timestamp: "2022-02-24T11:36:06.685Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:36:16.692Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:36:26.709Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:36:36.719Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:36:46.729Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:36:56.733Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:37:06.742Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:37:16.755Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:37:26.770Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:37:36.784Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:37:46.793Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:37:56.798Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:38:06.803Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:38:16.810Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:38:26.822Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:38:36.835Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:38:46.849Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:38:56.861Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:39:06.866Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:39:16.874Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:39:26.883Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:39:36.894Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:39:46.895Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:39:56.904Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:40:06.919Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:40:16.934Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:40:26.944Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:40:36.954Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:40:46.958Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:40:56.971Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:41:06.975Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:41:16.987Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:41:26.993Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:41:37.001Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:41:47.009Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:41:57.015Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:42:07.022Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:42:17.031Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:42:27.036Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:42:37.049Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:42:47.058Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:42:57.064Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:43:07.081Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:43:17.095Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:43:27.104Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:43:37.113Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:43:47.128Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:43:57.142Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:44:07.157Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:44:17.162Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:44:27.171Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:44:37.179Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:44:47.187Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:44:57.193Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:45:07.196Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:45:17.206Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:45:27.219Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:45:37.235Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:45:47.246Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:45:57.258Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:46:07.262Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:46:17.273Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:46:27.278Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:46:37.288Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:46:47.298Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:46:57.311Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:47:07.318Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:47:17.330Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:47:27.338Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:47:37.345Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:47:47.355Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:47:57.360Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:48:07.369Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:48:17.376Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:48:27.387Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:48:37.396Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:48:47.406Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:48:57.419Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:49:07.427Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:49:17.429Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:49:27.446Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:49:37.458Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:49:47.466Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:49:57.470Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:50:07.477Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:50:17.486Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:50:27.492Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:50:37.500Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:50:47.511Z", usdPnl: 0.0 },
    { timestamp: "2022-02-24T11:50:57.521Z", usdPnl: 0.0 },
  ],
}

export const getAnalytics: typeof AnalyticsService.getAnalytics = () => {
  // TODO
  return of(fakeAnalytics)
}
