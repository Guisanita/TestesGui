import { useState } from 'react';
import ClienteIcone from '../../assets/cliente-icone.svg';
import FecharIcone from '../../assets/fechar.svg';
import '../../styles/modal-style.css';
import { getItem } from '../../Utils/storage';
import api from '../../Service/api'

export default function CadastrarClienteModal({ setModalCadastrarCliente }) {
    const [form, setForm] = useState({
        nome: '',
        email: '',
        cpf: '',
        telefone: '',
        cep: '',
        logradouro: '',
        complemento: '',
        bairro: '',
        cidade: '',
        estado: ''
    });

    const [erroNome, setErrorNome] = useState('')
    const [erroEmail, setErrorEmail] = useState('')
    const [erroCpf, setErrorCpf] = useState('')
    const [erroTelefone, setErrorTelefone] = useState('')
    const [erroMsg, setErrorMsg] = useState('')

    async function cadastrarCliente(event) {
        event.preventDefault();
        event.stopPropagation();
        setErrorNome('');
        setErrorEmail('');
        setErrorCpf('');
        setErrorTelefone('');

        try {

            await api.post("/clientes", {
                ...form

            }, {
                headers: { Authorization: `Bearer ${getItem("token")}` }
            }
            )

            setForm({
                nome: '',
                email: '',
                cpf: '',
                telefone: '',
                cep: '',
                logradouro: '',
                complemento: '',
                bairro: '',
                cidade: '',
                estado: ''
            })

            setModalCadastrarCliente(false);

        } catch ({ response: { data: { mensagem } } }) {

            if (mensagem.nome) {
                setErrorMsg(mensagem.nome)
                return setErrorNome(mensagem.nome);
            }

            if (mensagem.email) {
                setErrorMsg(mensagem.email)
                return setErrorEmail(mensagem.email);
            }

            if (mensagem.cpf) {
                setErrorMsg(mensagem.cpf)
                return setErrorCpf(mensagem.cpf);
            }

            if (mensagem.telefone) {
                setErrorMsg(mensagem.telefone)
                return setErrorTelefone(mensagem.telefone);
            }

            setErrorEmail(mensagem)
            return setErrorMsg(mensagem)

        }

    }

    function mudarValoresDoInput({ target }) {
        setForm({ ...form, [target.name]: target.value });
    }

    return (
        <div className='container-modal'>
            <div className='modal cadastrar-cliente'>
                <div className='modal-titulo'>
                    <img
                        src={FecharIcone}
                        alt='fechar'
                        onClick={() => setModalCadastrarCliente(false)}
                        className='modal-fechar-icone'
                    />
                    <div className='modal-titulo-esquerda'>
                        <img src={ClienteIcone} alt='cliente icone' />
                        <h1>Cadastro do Cliente</h1>
                    </div>
                </div>
                <form className='form-cadastrar-cliente' onSubmit={cadastrarCliente}>
                    <label>Nome*</label>
                    <input
                        name='nome'
                        type='text'
                        placeholder='Digite o nome'
                        value={form.nome}
                        onChange={mudarValoresDoInput}
                    />
                    <label>E-mail*</label>
                    <input
                        name='email'
                        type='email'
                        placeholder='Digite o e-mail'
                        value={form.email}
                        onChange={mudarValoresDoInput}
                    />
                    <div className='form-inputs-juntos'>
                        <div style={{ width: '235px', marginRight: '24px' }}>
                            <label>CPF*</label>
                            <input
                                name='cpf'
                                type='number'
                                placeholder='Digite o CPF'
                                value={form.cpf}
                                onChange={mudarValoresDoInput}
                            />
                        </div>
                        <div style={{ width: '224px' }}>
                            <label>Telefone*</label>
                            <input
                                name='telefone'
                                type='number'
                                placeholder='Digite o telefone'
                                value={form.telefone}
                                onChange={mudarValoresDoInput}
                            />
                        </div>
                    </div>
                    <label>Endereço</label>
                    <input
                        name='logradouro'
                        type='text'
                        placeholder='Digite o endereço'
                        value={form.logradouro}
                        onChange={mudarValoresDoInput}
                    />
                    <label>Complemento</label>
                    <input
                        name='complemento'
                        type='text'
                        placeholder='Digite o complemento'
                        value={form.complemento}
                        onChange={mudarValoresDoInput}
                    />
                    <div className='form-inputs-juntos'>
                        <div style={{ width: '228px', marginRight: '24px' }}>
                            <label>cep</label>
                            <input
                                name='CEP'
                                type='number'
                                placeholder='Digite o CEP'
                                value={form.cep}
                                onChange={mudarValoresDoInput}
                            />
                        </div>
                        <div style={{ width: '235px' }}>
                            <label>Bairro</label>
                            <input
                                name='bairro'
                                type='text'
                                placeholder='Digite o bairro'
                                value={form.bairro}
                                onChange={mudarValoresDoInput}
                            />
                        </div>
                    </div>
                    <div className='form-inputs-juntos'>
                        <div style={{ width: '300px', marginRight: '24px' }}>
                            <label>Cidade</label>
                            <input
                                name='cidade'
                                type='text'
                                placeholder='Digite a cidade'
                                value={form.cidade}
                                onChange={mudarValoresDoInput}
                            />
                        </div>
                        <div style={{ width: '160px' }}>
                            <label>UF</label>
                            <input
                                name='estado'
                                type='text'
                                placeholder='Digite a UF'
                                value={form.estado}
                                onChange={mudarValoresDoInput}
                            />
                        </div>
                    </div>

                    <div className='modal-botoes'>
                        <button
                            type='button'
                            onClick={() => setModalCadastrarCliente(false)}
                        >
                            Cancelar
                        </button>
                        <button type='submit'>Aplicar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}