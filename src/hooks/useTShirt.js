import { useEffect, useState } from "react"

const UseTShirt = () => {
    const [tShirt, setTShirt] = useState([]);
    useEffect(() => {
        fetch('t-shirt.json')
            .then(res => res.json())
            .then(data => setTShirt(data));
    }, []);
    return [tShirt, setTShirt];
}
export default UseTShirt;