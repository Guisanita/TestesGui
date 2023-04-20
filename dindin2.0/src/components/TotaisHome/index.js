import './style.css';
import PagasIcon from '../../assets/pagas.svg';
import VencidasIcon from '../../assets/vencidas.svg';
import PrevistasIcon from '../../assets/previstas.svg';

export default function TotaisHome() {
    return (
        <div className='detalhes'>
            <div className='detalhe-pago'>
                <img src={PagasIcon} alt='pagas icon' />
                <div className='info-detalhe'>
                    <span>Cobranças Pagas</span>
                    <strong>R$ 30.000</strong>
                </div>
            </div>
            <div className='detalhe-vencido'>
                <img src={VencidasIcon} alt='vencidas icon' />
                <div className='info-detalhe'>
                    <span>Cobranças Vencidas</span>
                    <strong>R$ 30.000</strong>
                </div>
            </div>
            <div className='detalhe-previsto'>
                <img src={PrevistasIcon} alt='previstas icon' />
                <div className='info-detalhe'>
                    <span>Cobranças Previstas</span>
                    <strong>R$ 30.000</strong>
                </div>
            </div>
        </div>
    )
}