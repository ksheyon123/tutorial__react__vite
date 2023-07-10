import { useEffect } from "react";

const HeavyLoader : React.FC = () => {
    const fetchData = async () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                fetch("/").then(() => {
                    resolve(1)
                }).catch(() => {
                    reject("E")
                })
            }, 1000)
        })
    }
    
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>Load!!</div>
    )
}

export default HeavyLoader