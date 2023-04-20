import EmDiaIcone from '../../assets/em-dia-icone.svg';

export default function EmDia() {
    return (
        <div className='conteudo-box-maior'>
            <div className='conteudo-titulo'>
                <div className='conteudo-titulo-direita'>
                    <img src={EmDiaIcone} />
                    <h1>Clientes em dia</h1>
                </div>
                <div className='quantia verde'>08</div>
            </div>
            <div className='box-titulos'>
                <strong>Cliente</strong>
                <strong>ID da cob.</strong>
                <strong>Valor</strong>
            </div>
            <div className='box-info'>
                <div className='box-usuario'>
                    <span>Sara Silva</span>
                    <span>223456787</span>
                    <span>R$ 1000,00</span>
                </div>
                <div className='box-usuario'>
                    <span>Sara Silva</span>
                    <span>223456787</span>
                    <span>R$ 1000,00</span>
                </div>
                <div className='box-usuario'>
                    <span>Sara Silva</span>
                    <span>223456787</span>
                    <span>R$ 1000,00</span>
                </div>
                <div className='box-usuario'>
                    <span>Sara Silva</span>
                    <span>223456787</span>
                    <span>R$ 1000,00</span>
                </div>
            </div>
            <div className='box-ver-todos'>
                <span>Ver todos</span>
            </div>
        </div>
    )
}