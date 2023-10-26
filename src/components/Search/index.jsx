import { useState } from 'react';
import PropTypes from 'prop-types';
import CarExitPopup from '../PopUp/index';
import { BntSearch, Container } from './stylee';

export const Search = ({ carros, onCarExit }) => {
    const [placaPesquisada, setPlacaPesquisada] = useState('');
    const [carroEncontrado, setCarroEncontrado] = useState(null);

    const handleBuscarClick = () => {
        const carro = carros.find((carro) => carro.placa === placaPesquisada);
        setCarroEncontrado(carro);
    };

    const handleConfirmExit = (car) => {
        onCarExit(car);
        setCarroEncontrado(null);
    };

    const handleSetSaida = (car, horarioSaida) => {
        car.horarioSaida = horarioSaida;
        setCarroEncontrado(null);
    };

    const handleCancelExit = () => {
        setCarroEncontrado(null);
    };

    const handleInputKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleBuscarClick();
        }
    };

    return (
        <Container >
            <h1>PESQUISAR CARRO</h1>
            <div>
                <input
                    type="text"
                    placeholder="Digite a placa"
                    value={placaPesquisada}
                    onChange={(e) => setPlacaPesquisada(e.target.value.toUpperCase())} 
                    onKeyDown={handleInputKeyPress}
                />
                <BntSearch
                    onClick={handleBuscarClick}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </BntSearch>
            </div>
            {carroEncontrado && (
                <CarExitPopup
                    carInfo={carroEncontrado}
                    onSetSaida={handleSetSaida}
                    onConfirm={handleConfirmExit}
                    onCancel={handleCancelExit}
                />

            )}
        </Container>
    );
};

Search.propTypes = {
    carros: PropTypes.array.isRequired,
    onCarExit: PropTypes.func,
};
