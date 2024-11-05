import {getAllServices} from "../helpers/services";
import ServiceTile from "./ServiceTile";

export default function ServicesGrid({className = '', ...rest}) {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ${className}`} {...rest}>
            {getAllServices().map((service, key) => {
                return (
                    <ServiceTile {...service} key={`Service: ${key}`}/>
                )
            })}
        </div>
    )
}