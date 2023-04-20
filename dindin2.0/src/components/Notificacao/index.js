import { useEffect, useState } from 'react';
import ChecadoIcone from '../../assets/checada-notificacao.svg';
import FecharIconeNotificacao from '../../assets/fechar-notificacao.svg';
import './style.css';

export default function Notificacao() {
    const [mostrarNotificacao, setMostrarNotificacao] = useState(true);

    useEffect(() => {
        if (mostrarNotificacao) {
            setTimeout(() => {
                setMostrarNotificacao(false);
            }, 2000);
        }
    }, []);

    return (
        <>
            {mostrarNotificacao &&
                <div className='container-notificacao'>
                    <div className='conteudo-notificacao-esquerda'>
                        <img src={ChecadoIcone} alt='checado icone' />
                        <span>Cadastro concluído com sucesso</span>
                    </div>
                    <img
                        src={FecharIconeNotificacao}
                        alt='fechar notificacao'
                        className='fechar-notificacao-icone'
                        onClick={() => setMostrarNotificacao(false)}
                    />
                </div>
            }
        </>
    )
}