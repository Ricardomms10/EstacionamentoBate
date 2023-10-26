import { useState, useEffect } from 'react';
import { BntTrash, Container } from './style';
import PropTypes from 'prop-types';
import CarExitPopup from '../PopUp/index.jsx';

export const ListCar = ({ carros, onCarExit }) => {
    const [selectedCar, setSelectedCar] = useState(null);

    const handleExitClick = (car) => {
        setSelectedCar(car);
    };

    const handleConfirmExit = (car) => {
        onCarExit(car);
        setSelectedCar(null);
    };

    const handleSetSaida = (car, horarioSaida) => {
        car.horarioSaida = horarioSaida;
                setSelectedCar(null); 
    };

    const handleCancelExit = () => {
        setSelectedCar(null);
    };

    useEffect(() => {
        carros.forEach((carro) => {
            const horarioSaida = localStorage.getItem(`horarioSaida-${carro.id}`);
            if (horarioSaida) {
                carro.horarioSaida = horarioSaida;
            }
        });
    }, [carros]);

    return (
        <Container>
            <h2>Tabela de Carros</h2>
            <table>
                <thead>
                    <tr>
                        <th>PLACA</th>
                        <th>MODELO</th>
                        <th>HORA ENTRADA</th>
                        <th>HORA SAÍDA</th>
                    </tr>
                </thead>
                <tbody>
                    {carros.map((carro, index) => (
                        <tr key={index}>
                            <td>{carro.placa}</td>
                            <td>{carro.modelo}</td>
                            <td>{carro.horarioEntrada}</td>
                            <td>{carro.horarioSaida}</td>
                            <td>
                                <BntTrash onClick={() => handleExitClick(carro)}><i className="fa-solid fa-car-side"></i></BntTrash>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {selectedCar && (
                <CarExitPopup
                    carInfo={selectedCar}
                    onSetSaida={handleSetSaida}
                    onConfirm={handleConfirmExit}
                    onCancel={handleCancelExit}
                />
            )}
        </Container>
    );
};

ListCar.propTypes = {
    carros: PropTypes.array.isRequired,
    onCarExit: PropTypes.func,
};






