import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform'
}

export function RespositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de Respotitórios</h1>

            <ul>
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
    );
}