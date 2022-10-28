import Google from '../support/acoes.cy'

describe('Realizar Pesquisas', () => {
    
    beforeEach(() => {
        Google.acessarSite()
    });

    it('Cães Fofinhos', () => {
        Google.pesquisarCaesFofinhos()
    });

    it('Mustang', () => {
        Google.pesquisarMustang()
    });

    it('Noite Estrelada de Van Gogh', () => {
        Google.pesquisarNoiteEstrelada()
    });
});