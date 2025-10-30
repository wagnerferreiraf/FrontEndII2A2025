'use client';
import { useState } from 'react';
import styles from './page.module.css';
import CardProduto from '@/components/Produto';

export default function Produtos() {
    const produtos = [
        { id: 1, nome: "Notebook", preco: 4500 },
        { id: 2, nome: "Mouse", preco: 80 },
        { id: 3, nome: "Teclado", preco: 150 },
        { id: 4, nome: "Monitor", preco: 1200 },
        { id: 5, nome: "Impressora", preco: 900 },
        { id: 6, nome: "Cadeira Gamer", preco: 1800 },
        { id: 7, nome: "Headset", preco: 300 },
        { id: 8, nome: "Webcam", preco: 600 },
        { id: 9, nome: "HD Externo", preco: 400 },
        { id: 10, nome: "Mesa Digitalizadora", preco: 750 }
    ];

    const [produto, setProduto] = useState(null);

    const [busca, setBusca] = useState('');
    const produtosFiltro = produtos.filter(prod => prod.nome.toLowerCase().includes(busca.toLowerCase()));
    const [show, setShow] = useState(false);
    return (
        <div>
            <div className={styles.divTitulo}>
                <h1>Produtos</h1>
                <input
                    type="text"
                    onChange={e => setBusca(e.target.value)}
                    value={busca}
                />
            </div>
            {produto && <div
                className={styles.modal}
                onClick={() => setProduto(null)}
            >
                <CardProduto
                    nome={produto.nome}
                    id='1'
                    preco='10,00'
                />
            </div>}
            <table className={styles.tbl}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>PREÇO</th>
                    </tr>
                </thead>
                <tbody>
                    {produtosFiltro.map(p => (
                        // ao clicar em uma linha da tabela, exiba uma div (modal) ocupando toda a viewport;
                        // ao clicar na div, pare de exibir.
                        <tr key={p.id} onClick={() => setProduto(p) // passar um, produto para a variável de estado
                        }>
                            <td>{p.id}</td>
                            <td>{p.nome}</td>
                            <td>{p.preco.toLocaleString('pt-br', {
                                style: 'currency',
                                currency: 'BRL'
                            })}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


// Crie um componente chamado Produtos que possua o seguinte array:
// Os dados devem ser exibidos dentro de uma tabela.
// A tabela deve conter um <thead> com os títulos das colunas:ID,  Produto e Preço.
// Cada produto deve aparecer em uma linha (<tr>) dentro do <tbody>.
// O id deve estar dentro de uma célula <td>, onome deve estar dentro de outra célula <td> e o preço em outra <td>, com o formato R$ valor (utilize o toLocaleString para formatar).



// Adicione um campo de texto (<input>) acima da tabela para permitir que o usuário digite o nome de um produto.
/* Conforme o texto for digitado, mostre apenas os produtos cujo nome contenha o texto digitado (ignorando maiúsculas e minúsculas). */
// Use o método filter() para aplicar o filtro e map() para exibir os resultados na tabela. 
