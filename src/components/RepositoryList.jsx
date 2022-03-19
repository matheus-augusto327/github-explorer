const repositoryName = 'unform2'

export function RespositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de Respotitórios</h1>

            <ul>
                <li>
                    <strong>{repositoryName}</strong>
                    <p>Forms in React</p>

                    <a href="">
                        Acessar repositórios
                    </a>
                </li>
            </ul>
        </section>
    );
}