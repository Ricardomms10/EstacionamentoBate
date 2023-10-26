import PropTypes from 'prop-types';
import { BoxBtn, BtnExit, BtnTrash, CloseButton, Container, PopUp } from './style';

const CarExitPopup = ({ carInfo, onSetSaida, onConfirm, onCancel }) => {
    const handleSetSaida = () => {
        const horaAtual = new Date().toLocaleTimeString();
        onSetSaida(carInfo, horaAtual);
    };

    const handleConfirmExit = () => {
        onConfirm(carInfo);
    };

    return (
        <Container>
            <PopUp>
                <h3>Confirmar a saída ?</h3>
                <ul>
                    <li> <strong>Carro: </strong>{`${carInfo.modelo}`}</li>
                    <li> <strong>Placa:</strong> {`${carInfo.placa}`}</li>
                </ul>
                <BoxBtn>
                    <BtnTrash title="Clique para a exclusão do carro" onClick={handleConfirmExit}><i className="fa-solid fa-trash"></i></BtnTrash>
                    <BtnExit title="Clique para definir a saída" onClick={handleSetSaida}>Confirma</BtnExit>
                </BoxBtn>
                <CloseButton onClick={onCancel}>x</CloseButton>
            </PopUp>
        </Container>
    );
};

CarExitPopup.propTypes = {
    carInfo: PropTypes.shape({
        modelo: PropTypes.string,
        placa: PropTypes.string,
        horarioSaida: PropTypes.string,
    }),
    onSetSaida: PropTypes.func,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func,
};

export default CarExitPopup;


