import React from 'react'
import PageHeader from '../template/pageHeader'

const About = props => (
    <div>
        <PageHeader name='Sobre' small='TodoApp' />
        <h2>TodoApp - Gerenciamento de tarefas</h2>
        <p>TodoApp é uma aplicação de gerenciamento de tarefas
            que permite listar e organizar suas atividades diárias.
            Com ela, você pode adicionar novas tarefas,
            marcar como concluídas, desmarcar se necessário e
            excluir tarefas quando não forem mais relevantes.
            TodoApp facilita o controle e acompanhamento das suas
            responsabilidades diárias, ajudando a aumentar sua produtividade.
        </p>
    </div>
)

export default About