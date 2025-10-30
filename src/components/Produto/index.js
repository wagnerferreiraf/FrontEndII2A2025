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