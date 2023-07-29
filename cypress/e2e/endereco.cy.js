import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.login()
        
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Alexandre', 'Souza', 'Botafogo Campeão', 'Brasil', 'Av. do Líder', '2023', 'Rio de Janeiro', 'Rio de Janeiro', '22221-010', '(21) 97212-8609', 'xandibr@yahoo.com')

        cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso.')

    });

    it.only('Deve fazer cadastro de faturamento com sucesso - Usando arquivos de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email)

        cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso.')

});