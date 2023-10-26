import { AddCar } from "../../components/AddCar";
import { ListCar } from "../../components/ListCar";
import { Search } from "../../components/Search";
import { Head } from "../../components/head";
import { Container } from "./style";
import { useState, useEffect } from 'react';

export const Home = () => {
    const [carros, setCarros] = useState([]);

    useEffect(() => {
        const carrosFromStorage = JSON.parse(localStorage.getItem('carros')) || [];
        setCarros(carrosFromStorage);
    }, []);

    const handleCarExit = (car) => {

        const carIndex = carros.findIndex((c) => c === car);
        if (carIndex !== -1) {
            const updatedCarros = [...carros];
            updatedCarros.splice(carIndex, 1);
            setCarros(updatedCarros);
            localStorage.setItem('carros', JSON.stringify(updatedCarros));
        }
    };

    return (
        <Container>
            <Head />
            <AddCar
                onCarAdded={(novoCarro) => {
                    setCarros((prevCarros) => [...prevCarros, novoCarro]);
                }}
            />
            <Search carros={carros}
            onCarExit={handleCarExit}
            />
            <ListCar
                carros={carros}
                onCarExit={handleCarExit}
            />
        </Container>
    );
}