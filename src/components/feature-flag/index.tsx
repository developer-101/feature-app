
import { Fragment, ReactNode, useContext } from 'react'
import './styles.scss'
import { FeatureFlagsContext } from './context'
import { FeatureKeys } from './data';


export default function FeatureFlags() {

    const { loading, enabledFlags } = useContext(FeatureFlagsContext);

    const componentsToRender: { key: FeatureKeys, component: ReactNode }[] = [
        { key: 'showTictac', component: <div>tic tac toe</div> },
        { key: 'showScrolling', component: <div>scrolling</div> },
        { key: 'showTheming', component: <div>theming</div> },
    ]
    return <>
        <h1>Feature flags</h1>

        {loading && <div>loadings...</div>}
        {componentsToRender.map((item) => enabledFlags[item.key] && <Fragment key={item.key}>{item.component}</Fragment>)}
    </>
}