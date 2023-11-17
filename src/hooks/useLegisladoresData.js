import { useRef } from 'react';
import data from '../data/legisladores.json';
const useLegisladoresData = () => {
    const datLeg = useRef(data);
    const datLegisladores = datLeg.current;
    return {
        datLegisladores
    }
}
export default useLegisladoresData;