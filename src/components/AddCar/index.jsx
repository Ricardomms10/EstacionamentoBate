import { useState } from 'react';
import { BoxInput, Container } from './style';
import PropTypes from 'prop-types';

export const AddCar = ({ onCarAdded }) => {
    const [modelo, setModelo] = useState('');
    const [placa, setPlaca] = useState('');

    const handleModeloChange = (e) => {
        if (e.target.value.length <= 8) {
            setModelo(e.target.value.toUpperCase());
        }
    };

    const handlePlacaChange = (e) => {
        if (e.target.value.length <= 7) {
            setPlaca(e.target.value.toUpperCase());
        }
    };

    const handleSubmit = () => {
        if (modelo.trim() !== '' && placa.trim() !== '') {
            const novoCarro = { modelo, placa, horarioEntrada: new Date().toLocaleString() };
            const carros = JSON.parse(localStorage.getItem('carros')) || [];
            carros.push(novoCarro);
            localStorage.setItem('carros', JSON.stringify(carros));
            setModelo('');
            setPlaca('');
            onCarAdded(novoCarro);
        }
    };

    return (
        <Container>
            <BoxInput>
                <div>
                    <h2> <i className="fa-solid fa-car"></i> Modelo</h2>
                    <input
                        type="text"
                        value={modelo}
                        onChange={handleModeloChange}
                        placeholder="Modelo do Carro"
                    />
                </div>

                <div>
                    <h2><i className="fa-solid fa-tarp"></i> Placa</h2>
                    <input
                        type="text"
                        value={placa}
                        onChange={handlePlacaChange}
                        placeholder="Placa do Carro"
                    />
                </div>
            </BoxInput>
            <button onClick={handleSubmit} disabled={!modelo || !placa}>
                Cadastrar
            </button>
        </Container>
    );
};

AddCar.propTypes = {
    onCarAdded: PropTypes.func.isRequired,
};