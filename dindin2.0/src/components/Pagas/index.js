export default function Pagas() {
    return (
        <div className='conteudo-box'>
            <div className='conteudo-titulo'>
                <h1>Cobranças Pagas</h1>
                <div className='quantia verde'>10</div>
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