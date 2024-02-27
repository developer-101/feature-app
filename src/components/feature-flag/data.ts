

const featureFlags = {
    showTictac: true,
    showScrolling: true,
    showTheming: false
}

export type FeaturesType = typeof featureFlags;
export type FeatureKeys  = keyof FeaturesType;

export default function getFeature() : Promise<FeaturesType>{

    return new Promise(function(resolve, _){
        setTimeout(function(){
            resolve(featureFlags);
        }, 1000);
    })
}