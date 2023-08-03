context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */
    const perfil = require('../fixtures/perfil.json')
    var faker = require('faker');


    beforeEach(() => {
        cy.visit('/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        //TODO 

        cy.get('.icon-user-unfollow').click()
        cy.get('#username').type(perfil.usuário)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('.post-3528 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
        cy.get('.button-variable-item-36').click()
        cy.get('.button-variable-item-Black').click()
        cy.get('.input-text').clear().type(1)
        cy.get('.single_add_to_cart_button').click()
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('.post-3680 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
        cy.get('.button-variable-item-XL').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.input-text').clear().type(1)
        cy.get('.single_add_to_cart_button').click()
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('.post-2559 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(1)
        cy.get('.single_add_to_cart_button').click()
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('.post-3111 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Yellow').click()
        cy.get('.input-text').clear().type(1)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
        cy.get('#billing_first_name').clear().type('Alexandre')
        cy.get('#billing_last_name').clear().type('Souza')
        cy.get('#billing_company').clear().type('Lider do Brasileirão')
        cy.get('#select2-billing_country-container').click().type('Brasil' + '{enter}')
        cy.get('#billing_address_1').clear().type('Rua do Acaso')
        cy.get('#billing_address_2').clear().type(10)
        cy.get('#billing_city').clear().type('Campos' + '{enter}')
        cy.get('#select2-billing_state-container').click().type('Rio de Janeiro' + '{enter}')
        cy.get('#billing_postcode').clear().type(22221010)
        cy.get('#billing_phone').clear().type(2199990-9999)
        cy.get('#order_comments').clear().type('Favor avisar o dia que for fazer a entrega')
        cy.get('#payment_method_bacs').click()
        cy.get('#terms').click()
        cy.get('#place_order').click()
        cy.get('.woocommerce-notice').should('contain' , 'Obrigado. Seu pedido foi recebido.')





    });


})