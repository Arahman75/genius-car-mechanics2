import { useEffect, useState } from "react";

const useService =()=>{
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('https://nameless-shore-65260.herokuapp.com/service')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    return [services,
    setServices
    ]
}
export default useService;