export default function Map() {
    const nomes = ['João', 'Paulo', 'Pedro', 'Antônio', 'Ana', 'Laura', 'Maria'];
    return (
        <div>
            <h1>MAP</h1>
            <ul>
                {nomes.map((nome, id) => (
                <li key={id}>{nome}</li>
            ))}
            </ul>
        </div>
    )
}