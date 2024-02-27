import FeatureFlags from "./components/feature-flag";
import FeatureFlagsContextProvider from "./components/feature-flag/context";



export default function App() {

  return (
    <>
      <FeatureFlagsContextProvider>
        <FeatureFlags />
      </FeatureFlagsContextProvider>
    </>
  )
}