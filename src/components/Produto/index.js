import styles from './Produto.module.css';

export default function Produto({ id, nome, preco }) {
    return (
        <div className={styles.card}>
            <h2 className={styles.titulo}>{id} </h2>
            <p className={styles.nome}>{nome}</p>
            <p className={styles.preco}>{preco}</p>
        </div>
    )
}

// mude o cursor para "mãozinha" sobre as linhas da tabela
// coloque cores diferentes em linhas pares e ímpares
// altere a cor ao passar o mouse sobre uma linha
// coloque o card Produto centralizado (vertical e horizontalmente) na div modal