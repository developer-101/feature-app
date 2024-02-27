import { ReactNode, createContext, useEffect, useState } from "react";
import getFeature, { FeaturesType } from "./data";


export const FeatureFlagsContext = createContext<{ loading: boolean, enabledFlags: FeaturesType }>({ loading: false, enabledFlags: {} as FeaturesType });

export default function FeatureFlagsContextProvider({ children }: { children: ReactNode }) {

    const [loading, setLoading] = useState(false);
    const [enabledFlags, setEnabledFlags] = useState<FeaturesType>({} as FeaturesType);

    async function fetchFeatureFlags() {
        try {

            setLoading(true);
            const response = await getFeature();
            setEnabledFlags(response);

        } catch (error) {
            if (error instanceof Error)
                throw new Error(error.message);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchFeatureFlags();
    }, [])

    return (<FeatureFlagsContext.Provider value={{ loading, enabledFlags }}>{
        children}
    </FeatureFlagsContext.Provider>)
}

