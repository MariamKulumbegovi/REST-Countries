import { RouteWithSubRoutes } from "../../Routes"
import { Switch } from "react-router"
import styles from './Products.module.css'

export const Products=({routes})=>{
    return (
        <div>
            <h3 className={styles.white}>Products</h3>
            <div>
                <Switch>
                {routes.map((route,i)=>(
                    <RouteWithSubRoutes key={i} route={route} />
                ))}
                </Switch>
            </div>
        </div>
    )
}